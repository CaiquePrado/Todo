import { Trash } from "phosphor-react";
import { ITask } from "../../../@types/styled";
import { ButtonCheck, DeleteButton, TodoItem } from "./styles";

interface TodoProps {
  todo: ITask;
  handleDeleteTask: (todoId: string) => void;
}

export const Todo = ({ todo, handleDeleteTask }: TodoProps) => {
  return (
    <TodoItem>
      <ButtonCheck>
        <div />
      </ButtonCheck>
      <span>{todo.task}</span>
      <DeleteButton onClick={() => handleDeleteTask(todo.id)}>
        <Trash size={24} />
      </DeleteButton>
    </TodoItem>
  );
};
