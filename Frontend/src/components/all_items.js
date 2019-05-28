
import React, { Component } from 'react';
import axio from 'axios';
import ItemRow from './table_row'
import './table.css';

class all_items extends Component  {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    table_row(){
        return this.state.items.map(function (object, i) {
            return <ItemRow obj={object} key={i}/>
        })
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

    render(){
        return(
            <div className="card" id="card1">

                <div className="card-header">
                    <h6 className="card-title">All Items</h6>
                </div>

                <div className="card-body">
                    <table className="table" id="table">
                        <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th>Model</th>
                                <th>Seller Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        { this.table_row() }

                    </table>
                </div>
            </div>
        )
    }
}

export default all_items;