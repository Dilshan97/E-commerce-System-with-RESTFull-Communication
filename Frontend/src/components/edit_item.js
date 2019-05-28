import React, { Component } from 'react';
import axio from 'axios';
import swal from 'sweetalert';
import './item.css';

class edit_item extends Component {

    constructor(props){
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeModelName = this.onChangeModelName.bind(this);
        this.onChangeDescrition = this.onChangeDescrition.bind(this);
        this.onChangeSeller = this.onChangeSeller.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.sweetalertfucntion = this.sweetalertfucntion.bind(this);

        this.state = {
            item_id: null,
            item_name: null,
            model_name: null,
            item_desc: null,
            seller: null,
            stock: null,
            unit_price: null,
            status: null
        };
    }

    componentDidMount(){
        axio.get('http://localhost:8080/api/item/find/' + this.props.match.params.item_id)
        .then(response => { 
            console.log(response.data)
            this.setState({
                item_name: response.data.item_name,
                model_name: response.data.model_name,
                item_desc: response.data.item_desc,
                seller: response.data.seller,
                stock: response.data.stock,
                unit_price: response.data.unit_price,
                status: response.data.status
            })
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    onChangeItemName(e){ this.setState({ item_name: e.target.value})}

    onChangeModelName(e){ this.setState({model_name: e.target.value})}

    onChangeDescrition(e){ this.setState({item_desc: e.target.value})}

    onChangeSeller(e){ this.setState({seller: e.target.value})}

    onChangeStock(e){ this.setState({stock: e.target.value})}

    onChangeUnitPrice(e){ this.setState({unit_price: e.target.value})}

    onChangeStatus(e){ this.setState({status: e.target.value})}

    onSubmit(e){
        e.preventDefault();
        e.target.className += " was-validated"

        if(e.target.className == "needs-validation was-validated was-validated"){

            const itemObj = {
                item_id :this.props.match.params.item_id,
                item_name: this.state.item_name,
                model_name: this.state.model_name,
                item_desc: this.state.item_desc,
                seller: this.state.seller,
                stock: this.state.stock,
                unit_price: this.state.unit_price,
                status: this.state.status
            };

            axio.put('http://localhost:8080/api/item/update/' + this.props.match.params.item_id, itemObj)
                .then(response => {
                    console.log(response.data)
                    this.sweetalertfucntion();

                    this.props.history.push('/');
                })
                .catch(error => {
                    console.log(error.response)
                });

        }
        else {

            console.log("error");
        }

    }
    
    sweetalertfucntion(){
        swal("Done!", "Item Updated", "success");
    }

    render(){
        return(
            <div className="card" id="card">
                    <div className="card-header">
                        <h5 className="card-title">Update Item</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Item Name</label>
                                <input type="text" className="form-control" name="item_name" value={this.state.item_name} onChange={this.onChangeItemName} placeholder="Item Name" required/>
                                <div className="invalid-feedback"> Please provide a valid Item Name.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Model Name</label>
                                <input type="text" className="form-control" name="model_name" value={this.state.model_name} onChange={this.onChangeModelName} placeholder="Model Name" required/>
                                <div className="invalid-feedback"> Please provide a valid Model Name.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Description</label>
                                <textarea type="text" className="form-control" name="item_desc" value={this.state.item_desc} onChange={this.onChangeDescrition} placeholder="Description" required></textarea>
                                <div className="invalid-feedback"> Please provide a valid Description.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Seller</label>
                                <input type="text" className="form-control" name="seller" value={this.state.seller} onChange={this.onChangeSeller} placeholder="Seller" required/>
                                <div className="invalid-feedback"> Please provide a valid Seller Name.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Stock</label>
                                <input type="number" className="form-control" name="stock" value={this.state.stock} onChange={this.onChangeStock} placeholder="Stock" required/>
                                <div className="invalid-feedback"> Please provide a valid Stock.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Unit price</label>
                                <input type="number" className="form-control" name="unit_price" value={this.state.unit_price} onChange={this.onChangeUnitPrice} placeholder="Unit Price" required/>
                                <div className="invalid-feedback"> Please provide a valid Unit Price.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Status</label>
                                <select className="form-control" name="status" value={this.state.status} onChange={this.onChangeStatus} placeholder="status" required>
                                    <option disabled selected value="">Select the Status</option>
                                    <option value="true">Available</option>
                                    <option value="false">Out of Stock</option>
                                </select>
                                <div className="invalid-feedback"> Please provide a valid Status.</div>
                                <div className="valid-feedback">Looks good!</div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-sm">Update Item</button>&nbsp;
                            
  
                        </form>
                    </div>
                </div>

        )
    }

}

export default edit_item;