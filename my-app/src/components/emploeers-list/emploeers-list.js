import EmploeersListItem from '../emploeers-list-item/emploeers-list-item.js'

import './emploeers-list.css'

const EmploeersList = ({data}) => {

  const elements = data.map(item=> {
    return <EmploeersListItem {...item} />;
  })
    return (
      <ul className="app-list list-group">
        {elements}
      </ul>
    );
}

export default EmployeersList;