import React, { Component } from 'react';
import axio from 'axios';

import SingleItem from './single_item';

class content extends Component  {

    constructor(props){
        super(props);
        
        this.state = {
            items: []
        }
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

    

    single_item() {
        return this.state.items.map(function(object, i){
            return <SingleItem obj={object} key={i}/>
        });
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-3">
                            <div className="pull-right">
                                
                            </div>
                        </div>
                    </div> 

                    <div id="products" className="row view-group">
                
                
                        { this.single_item()}
                        
           
                    </div>
                </div>
            </div>
        );
    }
}

export default content;