export default function PortfolioButton({ children }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleClick()}>{children}</button>
        </li>
      </ul>
    </div>
  );
}
