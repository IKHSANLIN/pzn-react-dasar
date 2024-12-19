let count = 0;
export default function Row({ text }) {
  count++;
  return (
    <tr>
      <td>{count}</td>
      <td>{text}</td>
    </tr>
  );
}
