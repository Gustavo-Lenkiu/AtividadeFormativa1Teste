import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    // Limpar tudo
    if (value === "AC") {
      setDisplayValue("0");
      setExpression("");
      return;
    }
    
    // Ignorar botões vazios
    if (value === ""){
      setDisplayValue(displayValue + value);
      return;
    }

    // Calcular (exemplo simples)
    if (value === "=") {
      try {
        const result = eval(expression || "0"); // atenção: eval tem riscos
        setDisplayValue(String(result));
        setExpression(String(result)); // permite continuar calculando com o resultado
      } catch {
        setDisplayValue("Erro");
        setExpression("");
      }
      return;
    }

    // Caso normal (número, operador, ponto)
    const newExpr = expression + value;
    setExpression(newExpr);
    setDisplayValue(newExpr);
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      

      <div className="buttons">
        {/* Grid de botões: use a mesma ordem que você deixou no layout */}
        <Button label="AC" click={handleClick} className="button-ac"/>
        <Button label="" click={handleClick}/>
        <Button label="" click={handleClick}/>
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

        <Button label=":)" click={handleClick}/> 
        <Button label="0" click={handleClick} wide />
        <Button label="." click={handleClick} />
        <Button label="=" click={handleClick} className="button-equal" />
      </div>
    </div>
  );
}