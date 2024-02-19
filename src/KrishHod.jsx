import React from "react";

// Define a higher-order component
const withDynamicValue = (WrappedComponent, initialValue) => {
  // Return a new component
  return (props) => {
    // Set up state to manage dynamic value
    const [data, setData] = React.useState(initialValue);

    // Render the WrappedComponent with the dynamic value
    return <WrappedComponent {...props} data={data} setData={setData} />;
  };
};

// Define a simple component
const MyComponent = ({ data, setData }) => {
  // Update the data state when the component mounts
  React.useEffect(() => {
    setData("Updated value");
  }, [setData]);

  // Render the dynamic value
  return <h1>This is the Dynamic Value: {data}</h1>;
};

// Enhance MyComponent with the higher-order component
const Complex = withDynamicValue(MyComponent, "Initial value");

// Export the enhanced component
export default Complex;
