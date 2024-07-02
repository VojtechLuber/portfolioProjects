import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

   function handleChange(inputIdentifier, newValue) {
     setUserInput((prevUserInput) => {
       return {
         ...prevUserInput,
         [inputIdentifier]: +newValue,
       };
     });
   }

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </div>
  );
}

export default App;
