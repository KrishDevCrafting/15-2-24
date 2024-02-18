import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7000/Empolyees');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from JSON</h1>
      <ul>
        {data.map((item, index) => (
          <table className='table-bordered'>
          <tr>
          <th>{item.name}{item.position}</th></tr></table>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;



// import react, {useState,Effect} from "react"
// const Mycomponent = ()=>{
// const [data,setdata] = useState([])
// useEffect(()=>{
//   const a = asyns () =>{
//   try{

// const response = await  fetch("")
//   const data = await response.json()
//   setdata(data)
// }catch(err){
//     consol.error("There is the Error..!")


    
// }
// };

// a()  ;
// },

// []);




  
//   return<>
 
  
//   <ul>
    
//     {data.map((e,index)=>(
// <li key={index}>
//   {e.name}
// </li>
      
//     ))</ul>)}
  
  
//   </>
// }

// export default Mycomponent