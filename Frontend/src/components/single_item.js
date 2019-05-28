
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class single_item extends Component {

    constructor(props){
        super(props);
        
        this.delete = this.delete.bind(this);
        this.sweetalertfucntion = this.sweetalertfucntion.bind(this);
    }
    
    componentWillUpdate(){
        axios.get('http://localhost:8080/api/item/all')
        .then(response => {
            this.setState({
                items: response.data
            });
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    delete(){
        this.sweetalertfucntion();   
    }

    sweetalertfucntion(){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete('http://localhost:8080/api/item/delete/' + this.props.obj.item_id)
                    .then(response => { 
                        console.log("Item Deleted" + response.data);
                        this.props.history.push('/');
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
                
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

   
    render() {
        return (
            
                <div className="item col-xs-4 col-lg-4" id="item" onClick={this.product}>
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                        </div>

                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                                {this.props.obj.item_name}
                            </h4>
                            <p className="group inner list-group-item-text">
                                {this.props.obj.item_desc}
                            </p>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">LKR {this.props.obj.unit_price}</p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    {/*<button className="btn btn-danger btn-sm" onClick={this.delete}><i className="fas fa-trash-alt"></i></button>&nbsp;*/}
                                    {/*<Link className="btn btn-warning btn-sm" to={"/edit/" + this.props.obj.item_id}><i className="fas fa-edit"></i></Link>&nbsp;*/}
                                    <Link className="btn btn-success btn-sm" to={"/product/" + this.props.obj.item_id}><i class="fas fa-cart-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        )
    }
}

export default single_item;
