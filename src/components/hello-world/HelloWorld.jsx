import "./HelloWorld.css";
export function HeaderHelloWorld({ text = "Lupa kasih text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

export function ParagraphHelloWorld() {
  const text = "Belajar React JS Dasar PZN";
  return <p className="content">{text.toLowerCase()}</p>;
}

export default function HelloWorld() {
  const props = {
    text: "Hello World pzn",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}
