export default function ButtonQuote({ indexColor, changeIndex }) {
  return (
    <svg
      onClick={changeIndex}
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chevrons-right"
      width="52"
      height="52"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={indexColor}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="7 7 12 12 7 17" />
      <polyline points="13 7 18 12 13 17" />
    </svg>
  );
}
