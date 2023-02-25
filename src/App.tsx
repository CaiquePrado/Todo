import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { Tasks } from "./components/Tasks";

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <Scores />
      <Tasks />
      <GlobalStyle />
    </ThemeProvider>
  );
}
