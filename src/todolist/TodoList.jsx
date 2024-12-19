import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Belajar React",
      isComplited: true,
    },
    {
      id: 1,
      text: "Belajar Vue",
      isComplited: true,
    },
    {
      id: 2,
      text: "Belajar Angular",
      isComplited: false,
    },
    {
      id: 3,
      text: "Belajar Svelte",
      isComplited: true,
    },
  ];
  //   const todos = data.map((todo) => <Todo {...todo} key={todo.id} />);
  return (
    <ul>
      {data.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  );
}
