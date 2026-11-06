import { Component }from 'react';


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js'
import EmploeersList from "../emploeers-list/emploeers-list.js";
import EmploeersAddForm from '../emploeers-add-form/emploeers-add-form.js'

import "./app.css"

class App extends Component {
  constructor(props){
    super (props);
    this.state ={
      data: [
        { name: "John C.", salary: 800, increase: false },
        { name: "Alex V.", salary: 3000, increase: true },
        { name: "Carl W.", salary: 5000, increase: false },
      ],
    }
  } 

  deleteItem= id=>{
    this.setState(({data}) => {
      // const index = data.findIndex(element => element.id === id);
      // const before = data.slice(0,index), 
      //       after=data.silce(index+1);
      // const newArr = [...before, ...after]; 
      return {
        data: data.filter(item => item.id !== id)
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
        <EmploeersAddForm />
      </div>
    );
    }
}

export  default App