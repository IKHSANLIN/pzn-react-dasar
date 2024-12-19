export default function AlertButton({ text, message }) {
  function hacdleClick() {
    alert(message);
  }
  return <button onClick={hacdleClick}>{text}</button>;
}
