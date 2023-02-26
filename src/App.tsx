import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { Todos } from "./components/Todos";

import { FormEvent, useState } from "react";
import { ITask } from "./@types/styled";

export function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState<ITask[]>([]);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      task: task,
      isCompleted: false,
    };

    setTodo([...todos, newTask]);
    setTask("");
  };

  const handleDeleteTask = (todoId: string) => {
    const newTodo = [...todos].filter((todo) => todo.id !== todoId);
    setTodo(newTodo);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <Scores />
      <Todos todos={todos} handleDeleteTask={handleDeleteTask} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
