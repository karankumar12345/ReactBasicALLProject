import React from 'react'
import MenuItem from './MenuItem'
import "./style.css"
function Menulist({list=[]}) {

    
  return (
    <ul className='menu-list-container'>
        {
            list && list.length ?
            list.map(lisItem=><MenuItem item={lisItem}/>)
            :null
        }
      
    </ul>
  )
}

export default Menulist

