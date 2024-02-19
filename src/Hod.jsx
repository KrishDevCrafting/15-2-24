import React from "react";

// Define the WelcomeMessage component
const WelcomeMessage = ({ name }) => {
  return <div>Welcome, {name}!</div>;
};

// Define the higher-order component (HOC)
const withUpperCase = (WrappedComponent) => {
  // This component takes the props passed to it, modifies them (in this case, converts the name to uppercase),
  // and then passes them down to the wrapped component.
  return (props) => {
    const uppercaseName = props.name.toUpperCase();
    return <WrappedComponent {...props} name={uppercaseName} />;
  };
};

// Enhance the WelcomeMessage component with the withUpperCase HOC
const EnhancedWelcomeMessage = withUpperCase(WelcomeMessage);

// Usage of the enhanced component
const App = () => {
  return <EnhancedWelcomeMessage name="Krish" />;
};

export default App;

//In React, a Higher Order Component (HOC) is a function that takes a component and returns a new component with additional functionality. Think of it like adding extra capabilities or behaviors to your existing components without modifying their original code.
