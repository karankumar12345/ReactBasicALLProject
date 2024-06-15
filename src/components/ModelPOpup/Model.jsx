import React from 'react'

function Model({id,header,body,footer,onClose}) {
  return (
    <div id={id|| 'Model'} className='model'>
        <div style={{backgroundColor:'black', color:'white', borderRadius:'20px'  ,marginLeft:'10% ', marginRight:'10%', marginTop:'10%'}} className="content">
     <div className="header">
<span onClick={onClose} style={{fontSize:'40px'}} className='close-model-icon'>&times;</span>
<h2 style={{backgroundColor:'aqua', margin:' 5% 10% 5% 10%'}}>{header ? header:"header"}</h2>
     </div>
    
     <div style={{backgroundColor:'blue',borderRadius:'5px', height:'30px', borderRadius:'5px', margin:' 5% 10% 5% 10%'}} className="body">
{
    body? body:(<div> 
        <p>This Is Our Model</p>
        </div>
)}
     </div>
     <div style={{backgroundColor:'green', height:'30px',borderRadius:'5px', margin:' 5% 10% 5% 10%'}} className="footer">

     {
    footer? footer:(<div> 
        <p>This Is Our Footer</p>
        </div>
)}
     </div>
    </div>
    </div>
  )
}

export default Model
