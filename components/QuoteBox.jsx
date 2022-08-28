import Quote from "../src/Quote";
import ButtonQuote from "./ButtonQuote";

export default function QuoteBox({ indexQuote, indexColor, changeIndex }) {
  return (
    <div className="QuoteBox" style={{ color: indexColor }}>
      <div className="quote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-blockquote"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={indexColor}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15h15" />
          <path d="M21 19h-15" />
          <path d="M15 11h6" />
          <path d="M21 7h-6" />
          <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
          <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
        </svg>
        <p className="Quote">{Quote[indexQuote].quote}</p>
      </div>
      <p className="Author">{Quote[indexQuote].author}</p>
      <ButtonQuote changeIndex={changeIndex} indexColor={indexColor} />
    </div>
  );
}
