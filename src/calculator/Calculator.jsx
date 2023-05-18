import "../Css/Calculator.css";
import { useState } from "react";
import Btx from "./Components/Btx";
import Clearbtn from "./Components/Clearbtn";
import Title from "../components/Title";
function Calculator() {
  const [Previous, setPrevious] = useState([]);
  const [Solution, setSolution] = useState();
  function calculate() {
    let result = "none"; // This is where final value is stored
    const values = []; //array of storing all the operands
    let temp = []; //array used to converts the single digits to proper number
    const op = []; // Array for all operators
    const operators = ["+", "-", "%", "x", ".", "#", "÷"]; // list of all operators used
    if (
      operators.includes(Previous[Previous.length - 1]) ||
      operators.includes(Previous[0])
    ) {
      result = "invalid"; //checks for invalid condition
    } else {
      //sorting
      for (let i = 0; i < Previous.length; i++) {
        if (!operators.includes(Previous[i])) {
          temp.push(Previous[i]);
        } else {
          op.push(Previous[i]);
          let sol = parseInt(temp.join(""));
          values.push(sol);
          temp = [];
          continue;
        }
      }
      //pushing the final digits in temp to value
      if (temp.length > 0) {
        let sol = parseInt(temp.join(""));
        values.push(sol);
        temp = [];
      }
      //Maths
      let a, b, task;
      while (values.length != 1) {
        a = values.shift();
        b = values.shift();
        task = op.shift();
        switch (task) {
          case "+":
            values.unshift(a + b);
            break;
          case "-":
            values.unshift(a - b);
            break;
          case "x":
            values.unshift(a * b);
            break;
          case "÷":
            values.unshift(a / b);
            break;
          case "%":
            values.unshift(a % b);
            break;
          case ".":
            values.unshift(parseFloat(`${a}.${b}`));
            break;
          case "#":
            values.unshift(a + b);
            break;
          default:
            break;
        }
      }
      result = values.pop();
    }
    setSolution(result);
  }
  return (
    //main html
    <div>
      <div className="calculatorFrame">
        <Title id='title'/>
        <div className="display">
          <div className="previousinput">{Previous}</div>
          <div className="newinput">{Solution}</div>
        </div>
        <div className="buttonsframe">
          <Clearbtn
            digit="Clear"
            setPrevious={setPrevious}
            setSolution={setSolution}
          />
          {["%","x","÷","9","8","7","6","+","5","4","3","2","-","1","0","#","."].map((str)=>(
            <Btx digit={str} setPrevious={setPrevious} Previous={Previous} />
          ))}
          <button
            onClick={() => {
              calculate();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
