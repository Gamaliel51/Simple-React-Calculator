import React, { useState } from 'react';
import Button from './components/Buttons';
import {evaluate} from 'mathjs';

export default function App() {
  let [screenVal, setVal] = useState("")
  let last = ""
  
  const display = (e) => {
    if(e === "="){
      let str = screenVal
      str = str.replaceAll("×", "*")
      str = str.replaceAll("÷", "/")
      str = str.replaceAll("ln(", "log(")
      str = str.replaceAll("√(", "sqrt(")
      str = evaluate(str)
      last = "="
      setVal(str)
    }
    else if(e === "CE"){
      setVal("")
    }
    else{
      setVal(screenVal + e)
    }
  }

  const clearScreen = () => {
    if(last === "="){
      last = ""
      setVal("")
    }
    else{
      let a = screenVal.length - 1
      setVal(screenVal.slice(0,a))
    }
  }

  
  return (
    <div className='App'>
        <table className="calculator" >
      <tr>
        <td colSpan="4"> <input className="display-box" type="text" id="result" value={screenVal}/></td>
    
      </tr>
      <Button vals={["ln", "", "C", "CE"]} func={display} funct={clearScreen}/>
      <Button vals={["√", "^", "(", ")"]} func={display}/>
      <Button vals={["1", "2", "3", "+"]} func={display}/>
      <Button vals={["4", "5", "6", "-"]} func={display}/>
      <Button vals={["7", "8", "9", "÷"]} func={display}/>
      <Button vals={[".", "0", "×", "="]} func={display}/>
    </table>
</div>
  );
}

