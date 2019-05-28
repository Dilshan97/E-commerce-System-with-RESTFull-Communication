
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import axio from "axios/index";


class table_row extends Component {

    constructor(props){
        super(props);

        this.delete = this.delete.bind(this);
        this.sweetalertfucntion = this.sweetalertfucntion.bind(this);

    }

    componentDidMount(){
        axio.get('http://localhost:8080/api/item/all')
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
                        })
                        .catch(error => {
                            console.log(error.response)
                        });
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",

                    });

                    this.forceUpdate();
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }


    render(){
        return (
            <tbody>
                <tr>
                    <td>{this.props.obj.item_id}</td>
                    <td>{this.props.obj.item_name}</td>
                    <td>{this.props.obj.model_name}</td>
                    <td>{this.props.obj.seller}</td>
                    <td>{this.props.obj.unit_price}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={this.delete}><i className="fas fa-trash-alt"></i></button>&nbsp;
                        <Link className="btn btn-warning btn-sm" to={"/edit/" + this.props.obj.item_id}><i className="fas fa-edit"></i></Link>&nbsp;</td>
                </tr>
            </tbody>
        )
    }
}

export default table_row;