import EmploeersListItem from '../emploeers-list-item/emploeers-list-item.js'

import './emploeers-list.css'

const EmploeersList = ({data, onDelete}) => {

  const elements = data.map(item=> {
    const {id, ...itemsProps}= item
    return <EmploeersListItem 
      key={id} 
      {...itemsProps} 
      onDelete={()=>{onDelete(id)}}/>;
  })
    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    );
}

export default EmployeersList;