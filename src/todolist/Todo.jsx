export default function Todo({ text, isComplited, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>
      {text}{isComplited && "✅"}
    </li>;
  }
}
