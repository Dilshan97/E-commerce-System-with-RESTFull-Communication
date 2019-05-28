import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Main from './components/content';
import Add_item from './components/add_item';
import Edit_item from './components/edit_item';
import Product from './components/product';
import AllItems from './components/all_items';

function App() {
  return (
      <Router>
          <div className="mdl-layout mdl-js-layout">
              <Navbar/>
              
              <Route exact path="/" component={Main}/>
              <Route exact path="/add-item" component={Add_item}/>
              <Route path='/edit/:item_id' component={Edit_item}/>
              <Route path='/product/:item_id' component={Product}/>
              <Route path='/all-items' component={AllItems}/>

          </div>
         
      </Router>
    
  );
}

export default App;
