import "./normalize.css";
import "./styles.css";
import QuoteBox from "../components/QuoteBox";
import { useState } from "react";
import Quote from "./Quote";

export default function App() {
  let indexRandom = Math.floor(Math.random() * Quote.length);

  const colors = [
    "#9C622D",
    "#2D9C39",
    "#2D8C9C",
    "#2D2F9C",
    "#9B2D9C",
    "#462D9C",
    "#9C2D7F",
    "#9C2D4B",
    "#9C2D2D",
    "#2D9C50"
  ];

  let indexRandomColor = Math.floor(Math.random() * colors.length);

  const [indexQuote, setIndexQuote] = useState(indexRandom);

  const [indexColor, setIndexColor] = useState(colors[indexRandomColor]);

  const changeIndex = () => {
    let indexRandom = Math.floor(Math.random() * Quote.length);
    let indexRandomColor = Math.floor(Math.random() * colors.length);
    setIndexQuote(indexRandom);
    setIndexColor(colors[indexRandomColor]);
  };

  return (
    <div className="App" style={{ background: indexColor }}>
      <QuoteBox
        indexQuote={indexQuote}
        changeIndex={changeIndex}
        indexColor={indexColor}
      />
    </div>
  );
}
