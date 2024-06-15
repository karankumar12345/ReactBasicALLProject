import React, { useState } from 'react';

function Random() {
    const [typeColor, setTypeColor] = useState("hex");
    const [color, setColor] = useState("#232393");

    function randomColorUtlity(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtlity(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRGBColor() {
        const rgbColor = `rgb(${randomColorUtlity(256)}, ${randomColorUtlity(256)}, ${randomColorUtlity(256)})`;
        setColor(rgbColor);
    }

    function handleCopyColor() {
        navigator.clipboard.writeText(color);
        alert(`copy Color ${color}`)
    }

    return (
        <div className='container'>
            <button onClick={() => setTypeColor('hex')}>Create Hex color</button>
            <button onClick={() => setTypeColor("rgb")}>Create RGB color</button>
            <button onClick={typeColor === "hex" ? handleCreateHexColor : handleCreateRGBColor}>Generate Random Color</button>

            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: color, width: '100%', height: '100vh', marginTop: '20px', fontSize:'30px'  }}>{color}
            <h6    style={{
                    marginLeft: '5%', 
                    boxSizing: 'border-box', 
                    border: '1px solid red',
                    cursor: 'pointer', 
                    transition: 'background-color 0.3s ease-in-out',
                    padding: '5px',
                }}
                onClick={handleCopyColor}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#453423'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
            >Copy Color</h6>
            </div>
        </div>
    );
}

export default Random;
