import { HeaderContainer } from "./styles";
import { Atom } from "phosphor-react";
import { AddTask } from "../AddTask";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface HeaderProps {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  handleAddTask: (e: FormEvent) => void;
}

export const Header = ({ task, setTask, handleAddTask }: HeaderProps) => {
  return (
    <HeaderContainer>
      <div>
        <Atom size={32} />
        <h1>TodoList</h1>
      </div>
      <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </HeaderContainer>
  );
};
