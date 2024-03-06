// import React, { useState } from 'react';

// function Acc() {
//   const [rotation, setRotation] = useState(0);

//   const handleButtonClick1 = () => {
//     setRotation(45); // Set the rotation to 45 degrees
//   };

//   const handleButtonClick2 = () => {
//     setRotation(90); // Set the rotation to 90 degrees
//   };

//   return (
//     <div>
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           borderRadius: '50%',
//           backgroundColor: 'blue',
//           transform: `rotate(${rotation}deg)`,
//           display:'flex',
//           alignItems:'center',
//           justifyContent:'center'
//         }}
//       >hii</div>
//       <button onClick={handleButtonClick1}>Rotate to 45 degrees</button>
//       <button onClick={handleButtonClick2}>Rotate to 90 degrees</button>
//     </div>
//   );
// }


import React, { useState } from 'react';

function Acc() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const array = ['item1', 'item2', 'item3'];

  return (
    <div>
      {array.map((item, index) => (
        <div 
          key={index} 
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </div>
      ))}
      {selectedIndex !== null && <div>Selected index is: {selectedIndex}</div>}
    </div>
  );
}


export default Acc