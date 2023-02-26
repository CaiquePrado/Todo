import { Trash } from "phosphor-react";
import { ITask } from "../../../@types/styled";
import { ButtonCheck, TodoItem } from "./styles";

interface TodoProps {
  todo: ITask;
}

export const Todo = ({ todo }: TodoProps) => {
  return (
    <TodoItem>
      <ButtonCheck>
        <div />
      </ButtonCheck>
      <span>{todo.task}</span>
      <Trash size={24} />
    </TodoItem>
  );
};
