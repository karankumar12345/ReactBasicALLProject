import React from 'react'
import Menulist from './Menulist'
import menus from './data'

function TreeView() {
  return (
    <div className='tree-list-container'>
        <Menulist list={menus}/>
      
    </div>
  )
}

export default TreeView



// import React from 'react';

// function TreeView({ list = [] }) {
//   return (
//     <div className='tree-view-container'>
//       <ul className='menu-list-container'>
//         {list.map(item => (
//           <MenuItem key={item.id} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function MenuItem({ item }) {
//   return (
//     <li>
//       <p>{item.label}</p>
//       {item.children && item.children.length > 0 && (
//         <TreeView list={item.children} />
//       )}
//     </li>
//   );
// }

// export default TreeView;
