export default function AlertButton({ text, message }) {
  function hacdleClick(e) {
    console.info(e.target);
    alert(message);
  }
  return <button onClick={hacdleClick}>{text}</button>;
}
