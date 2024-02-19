import React, { useEffect } from "react";
const Mycomponent = () => {
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    const main = async () => {
      try {
        const response = await fetch("http://localhost:7000/Empolyees");
        const add = await response.json();
        setdata(add);
      } catch (err) {
        console.error("Error", err);
      }
    };
    main();
  }, []);

  return (
    <>
      <h1>Hello-Json</h1>

      <div>
        <ul>
          {data.map((e, index) => (
            <li key={index}>
              {e.id}
              {e.department}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Mycomponent;

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
