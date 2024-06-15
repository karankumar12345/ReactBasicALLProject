import React, { useState } from 'react'
import Menulist from './Menulist'
import { FaMinus, FaPlus } from 'react-icons/fa';

function MenuItem({item}) {
const [displaycurrentobject ,setDisplaycurrecntobject]=useState({})
   
function handleToggleChildren(getcurrentlabel){
  setDisplaycurrecntobject({
    ...displaycurrentobject,[getcurrentlabel]:!displaycurrentobject[getcurrentlabel]
  })

}
  return (
<li >

   <div style={{display:'flex', gap:'20px'}} className='menu-item'>
   <p>{item.label}</p>
   {
    item && item.children && item.children.length? <span onClick={()=>handleToggleChildren(item.label)}>

      {
        displaycurrentobject[item.label] ? <FaMinus/>:<FaPlus/>
      }
    </span> :null
   }
   </div>
   
    {
        item&&item.children &&item.children.length>0 && displaycurrentobject[item.label]?
        
        <Menulist list={item.children}></Menulist>
        :null
    }
</li>
  )
}

export default MenuItem

