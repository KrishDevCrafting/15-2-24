// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Generate random data
const generateRandomData = () => {
    const data = [];
  
    for (let i = 0; i < 10; i++) {
      const randomObject = {
        id: i + 1,
        name: `Item ${i + 1}`,
        description: `Description for Item ${i + 1}`,
        price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
      };
  
      data.push(randomObject);
    }
  
    return data;
  };
  
  // Example usage
  const randomData = generateRandomData();
  console.log(randomData);
  