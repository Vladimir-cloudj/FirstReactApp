import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js'
import EmploeersList from "../emploeers-list/emploeers-list.js";
import EmploeersAddForm from '../emploeers-add-form/emploeers-add-form.js'

import "./app.css"

function App() {

  const data = [
    { name: "John C.", salary: 800, increase: false },
    { name: "Alex V.", salary: 3000, increase: true },
    { name: "Carl W.", salary: 5000, increase: false },
  ];

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmploeersList data={data}/>
        <EmploeersAddForm />
      </div>
    );
}

export  default App