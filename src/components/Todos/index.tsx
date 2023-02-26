import { TasksContainer, TodoList } from "./styles";
import Vazio from "../../assets/Vazio.svg";
import { ITask } from "../../@types/styled";
import { Todo } from "./Todo";

interface TasksProps {
  todos: ITask[];
}

export const Todos = ({ todos }: TasksProps) => {
  return (
    <TasksContainer>
      {todos.length > 0 ? (
        <TodoList>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodoList>
      ) : (
        <img src={Vazio} alt="/" />
      )}
    </TasksContainer>
  );
};
