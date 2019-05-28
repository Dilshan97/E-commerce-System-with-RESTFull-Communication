import React, { Component } from 'react';
import axio from 'axios';

class product extends Component {

    constructor(props){
        super(props);

        this.state = {
            item_id: null,
            item_name: null,
            model_name: null,
            item_desc: null,
            seller: null,
            stock: null,
            unit_price: null,
            status: null
        }
    }

    componentDidMount(){
        axio.get('http://localhost:8080/api/item/find/' + this.props.match.params.item_id)
            .then(response => {
                console.log(response.data);

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

    render(){
        return(
            <div class="card" style={{margin:25}}>
                <div class="container">
                    <div class="wrapper row">
                        <div class="details col-md-6">
                            <h3 class="product-title">{this.state.item_name}</h3>
                            <p class="product-description">{this.state.item_desc}</p>
                            <h4 class="price">current price: <span>LKR {this.state.unit_price}</span></h4>
                            <div class="action">
                                <button class="add-to-cart btn btn-success btn-sm" type="button">add to cart</button>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default product;