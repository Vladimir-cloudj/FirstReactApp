import { Component }from 'react';
import {v4 as uuidv4} from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js'
import EmploeersList from "../emploeers-list/emploeers-list.js";
import EmploeersAddForm from '../emploeers-add-form/emploeers-add-form.js'

import "./app.css"

class App extends Component {
  constructor(props){
    super (props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1 },
        { name: "Alex V.", salary: 3000, increase: true, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, id: 3 },
      ],
    };
  } 

  deleteItem= id=>{
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem=(name,salary)=>{
    const newItem = {
      name,
      salary,
      increase:false,
      id: uuidv4(),
    }
    this.setState(({data}) => {
      return {
        data:[...data,newItem]
      }
    })
  }

    render() {
      return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmploeersList 
          data={this.state.data}
          onDelete={this.deleteItem}/>
        <EmploeersAddForm 
          onAdd={this.addItem}/>
      </div>
    );
    }
}

export  default App