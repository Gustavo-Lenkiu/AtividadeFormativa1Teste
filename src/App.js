import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");
  const [lastWasEqual, setLastWasEqual] = useState(false); 

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplayValue("0");
      setExpression("");
      setLastWasEqual(false);
      return;
    }


    if (value === "") {
      return; 
    }


    if (value === "=") {
      try {
        const result = eval(expression || "0"); 
        setDisplayValue(String(result));
        setExpression(String(result));
        setLastWasEqual(true);
      } catch {
        setDisplayValue("Erro");
        setExpression("");
      }
      return;
    }

   
    if (lastWasEqual && /[0-9.]/.test(value)) {
 
      setExpression(value);
      setDisplayValue(value);
    } else {

      const newExpr = expression + value;
      setExpression(newExpr);
      setDisplayValue(newExpr);
    }

    setLastWasEqual(false); 
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />

      <div className="buttons">
        <Button label="AC" click={handleClick} className="button-ac" />
        <Button label="" click={handleClick} />
        <Button label="" click={handleClick} />
        <Button label="/" click={handleClick} className="button-operator" />

        <Button label="7" click={handleClick} />
        <Button label="8" click={handleClick} />
        <Button label="9" click={handleClick} />
        <Button label="*" click={handleClick} className="button-operator" />

        <Button label="4" click={handleClick} />
        <Button label="5" click={handleClick} />
        <Button label="6" click={handleClick} />
        <Button label="-" click={handleClick} className="button-operator" />

        <Button label="1" click={handleClick} />
        <Button label="2" click={handleClick} />
        <Button label="3" click={handleClick} />
        <Button label="+" click={handleClick} className="button-operator" />

        <Button label=":)" click={handleClick} />
        <Button label="0" click={handleClick} wide />
        <Button label="." click={handleClick} />
        <Button label="=" click={handleClick} className="button-equal" />
      </div>
    </div>
  );
}
