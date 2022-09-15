import { useState } from "react";
import "./CalcBox.css";

const Btn = (props) => {
  let extraClasses = "";
  switch (props.value) {
    case "=":
      extraClasses = "ans";
      break;
    case "Clear":
      extraClasses = "clear";
      break;
    case "\u2190":
      extraClasses = "back";
      break;
  }

  return (
    <div className={`btnSection ${extraClasses}`}>
      <button
        className={`btn`}
        onClick={() => {
          props.passValue(props.value);
        }}
      >
        {props.value}
      </button>
    </div>
  );
};

const CalcBox = (props) => {
  const calculateAnswer = () => {
    // let res=null;
    let arr = calcInput.split(/([*\/+-])/);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*" || arr[i] === "/") {
        let res;
        if (arr[i] === "*") {
          res = Number(arr[i - 1]) * Number(arr[i + 1]);
        } else {
          res = Number(arr[i - 1]) / Number(arr[i + 1]);
        }
        res = res.toString();
        arr.splice(i - 1, 3, res);
        i--;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+" || arr[i] === "-") {
        let res;
        if (arr[i] === "+") {
          res = Number(arr[i - 1]) + Number(arr[i + 1]);
        } else {
          res = Number(arr[i - 1]) - Number(arr[i + 1]);
        }
        res = res.toString();
        arr.splice(i - 1, 3, res);
        i--;
      }
    }

    return arr[0];
  };

  const passValue = (value) => {
    // const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operators = ["*", "+", "-", "/"];
    const lastValue = calcInput[calcInput.length - 1];
    if (value != "=" && value != "Clear" && value != "\u2190") {
      if (
        calcInput.length === 0 ||
        !(operators.includes(lastValue) && operators.includes(value))
      ) {
        setCalcInput(calcInput + value);
      }
    } else {
      if (value === "Clear") {
        setCalcInput("");
      } else if (value === "\u2190") {
        setCalcInput(calcInput.slice(0, calcInput.length - 1));
      } else if (value === "=" && !operators.includes(lastValue)) {
        setCalcInput(calculateAnswer());
      }
    }
  };

  const [calcInput, setCalcInput] = useState("");

  let calcData = ["Clear", "\u2190", "."];
  for (let i = 1; i <= 9; i++) {
    calcData.push(i.toString());
  }
  calcData = calcData.concat(["0", "*", "+", "-", "/", "="]);
  //   console.log(calcData);

  const calcBtns = calcData.map((data) => {
    return <Btn passValue={passValue} value={data} />;
  });

  return (
    <div className="calcBox">
      <div className="output">{calcInput}</div>
      {calcBtns}
    </div>
  );
};

export default CalcBox;
