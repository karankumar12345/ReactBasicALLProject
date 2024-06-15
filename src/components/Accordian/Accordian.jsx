import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selection, setSelection] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    if (id === selection) {
      setSelection(null);
    } else {
      setSelection(id);
    }
  };

  const handleMultiSelection = (id) => {
    const updatedMultiple = [...multiple];
    const index = updatedMultiple.indexOf(id);
    if (index === -1) {
      updatedMultiple.push(id);
    } else {
      updatedMultiple.splice(index, 1);
    }
    setMultiple(updatedMultiple);
  };

  const toggleEnable = () => {
    setEnable((prevEnable) => !prevEnable); // Toggle enable state
    setSelection(null); // Reset selection when toggling enable
    setMultiple([]); // Reset multiple selection when toggling enable
  };

  return (
    <div>
      <div className="wrapper">
        <button onClick={toggleEnable}>
          {enable ? " Enable" : "Disable"} Multi Selection{" "}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={enable ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {(enable && multiple.indexOf(dataItem.id) !== -1) || (!enable && selection === dataItem.id) ? (
                  <div className="answer">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordian;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./style.css";

// function Accordian() {
//   const [data, setData] = useState([]);
//   const [selection, setSelection] = useState(null);
//   const [enable, setEnable] = useState(false);
//   const [multiple, setMultiple] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://example.com/api/questions");
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   const handleSingleSelection = (id) => {
//     if (id === selection) {
//       setSelection(null);
//     } else {
//       setSelection(id);
//     }
//   };

//   const handleMultiSelection = (id) => {
//     const updatedMultiple = [...multiple];
//     const index = updatedMultiple.indexOf(id);
//     if (index === -1) {
//       updatedMultiple.push(id);
//     } else {
//       updatedMultiple.splice(index, 1);
//     }
//     setMultiple(updatedMultiple);
//   };

//   const toggleEnable = () => {
//     setEnable((prevEnable) => !prevEnable);
//     setSelection(null);
//     setMultiple([]);
//   };

//   return (
//     <div>
//       <div className="wrapper">
//         <button onClick={toggleEnable}>
//           {enable ? "Disable" : "Enable"} Multi Selection{" "}
//         </button>
//         <div className="accordian">
//           {loading ? (
//             <div>Loading...</div>
//           ) : data && data.length > 0 ? (
//             data.map((dataItem) => (
//               <div className="item" key={dataItem.id}>
//                 <div
//                   onClick={enable ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
//                   className="title"
//                 >
//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {(enable && multiple.indexOf(dataItem.id) !== -1) || (!enable && selection === dataItem.id) ? (
//                   <div className="answer">{dataItem.answer}</div>
//                 ) : null}
//               </div>
//             ))
//           ) : (
//             <div>No data found</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Accordian;
