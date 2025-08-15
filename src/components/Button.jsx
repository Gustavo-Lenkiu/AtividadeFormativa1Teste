import React from "react";
import "./Button.css";

export default function Button({ label, click, className }) {
  return (
    <button 
      onClick={() => click(label)} 
      className={className}
    >
      {label}
    </button>
  );
}