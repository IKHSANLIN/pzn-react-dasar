import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo text="Belajar React" isComplited={true} />
      <Todo text="Belajar Vue" isComplited={false} />
      <Todo text="Belajar Angular" isComplited={false} />
      <Todo text="Belajar Svelte" isComplited={true} />
      <Todo text="Belajar Preact" isComplited={true} />
    </ul>
  );
}
