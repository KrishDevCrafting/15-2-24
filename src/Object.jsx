import React, { useState } from "react";

const ObjectComponent = () => {
  // Define a predefined object
  const predefinedObject = {
    name: "Deepak",
    age: 19,
    city: "New York",
  };

  // State variable to hold the object
  const [objectData, setObjectData] = useState(predefinedObject);

  // Function to update a property of the object
  const updateObjectProperty = () => {
    // Update the age property
    setObjectData((prevData) => ({
      ...prevData,
      age: prevData.age + 1,
    }));
  };

  const DecreaseAge = ()=>{
    setObjectData((prevData)=>({
        ...prevData,
        age: prevData.age - 1,
    }))
  };

  return (
    <div className="col-3 mx-auto text-danger p-5">
      <h2>Object Data:</h2>
      <p>Name: {objectData.name}</p>
      <p>Age: {objectData.age}</p>
      <p>City: {objectData.city}</p>
      
      <button onClick={updateObjectProperty} className="btn bg-danger text-white">Increase Age</button>
      <button onClick={DecreaseAge} className="btn bg-info text-white">Increase Age</button>
    </div>
  );
};

export default ObjectComponent;

