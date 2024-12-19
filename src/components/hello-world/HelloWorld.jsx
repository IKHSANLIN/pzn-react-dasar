export function HeaderHelloWorld({ text = "Lupa kasih text" }) {
  return <h1 style={{ color: "green" }}>{text.toUpperCase()}</h1>;
}

export function ParagraphHelloWorld() {
  const text = "Belajar React JS Dasar PZN";
  return (
    <p
      style={{
        color: "red",
        backgroundColor: "aqua",
        width: 200,
        padding: 20,
        margin: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {text.toLowerCase()}
    </p>
  );
}

export default function HelloWorld() {
  const props ={
    text: "Hello World pzn"
  }
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}
