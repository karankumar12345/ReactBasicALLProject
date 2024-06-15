import React, { useState } from 'react'
import QrCode from 'react-qr-code'
function Qrcode() {


    const  [qrCode,setQrCode]=useState('')
    const [input,setInput]=useState('')


    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }
  return (
    <>
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} name='qr-code' placeholder='enter your Value here' />
        <button disabled={input &&input.trim()!==''?false :true} onClick={handleGenerateQrCode}>Generator</button>
      </div>
    </div>
    <QrCode id ="qr-code-value" value={qrCode} size={400} bgColor='#fff' />
    </>
  )
}

export default Qrcode
