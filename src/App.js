import React, {useState} from "react";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  
  const [total, setTotal] = useState("");

  // Handle speical buttons
  function specialHandler(sp) {
    if (sp === "C") {
      setTotal("");
    } else if (sp === "+/-") {
      setTotal(total*(-1));
    } else if (sp === "%") {
      setTotal(total/100);
    }
  }

// Handle numbers and operator buttons
  function updateCalc(num) {
    if (num === "=") {
      equals(total)
      return
    }
    if (num === "/" || num === "*" || num === "-" || num === "+") {
      num = ` ${num} `
    } 
    setTotal(`${total}${num}`);
  }

  function equals(strCalc) {
    if(strCalc.includes('/')) {
      divide(strCalc);
    } else if (strCalc.includes('*')) {
      multiply(strCalc);
    } else if (strCalc.includes('-')) {
      subtract(strCalc);
    } else if (strCalc.includes('+')) {
      add(strCalc);
    }
  }

  function divide(strCalc) { // "10t/t2"
    let calcArr = strCalc.split(' ');
    setTotal(Number(calcArr[0]) / Number(calcArr[2]));
  }

  function multiply(strCalc) {
    let calcArr = strCalc.split(' ');
    setTotal(Number(calcArr[0]) * Number(calcArr[2]));
  }

  function subtract(strCalc) {
    let calcArr = strCalc.split(' ');
    setTotal(Number(calcArr[0]) - Number(calcArr[2]));
  }

  function add(strCalc) {
    let calcArr = strCalc.split(' ');
    setTotal(Number(calcArr[0]) + Number(calcArr[2]));
  }
  

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        
        <Display displayMessage={total}/>

        <div className="Buttons">
          <Numbers updateCalc={updateCalc}/>
          <Operators updateCalc={updateCalc} />
          <Specials specialHandler={specialHandler}/>
        </div>

      </div>
    </div>
  );
}

export default App;
