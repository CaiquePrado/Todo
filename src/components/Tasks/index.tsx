import { TasksContainer } from "./styles";
import Vazio from "../../assets/Vazio.svg";
import { ITask } from "../../@types/styled";

interface TasksProps {
  todos: ITask[];
}

export const Tasks = ({ todos }: TasksProps) => {
  return (
    <TasksContainer>
      {todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <ul key={todo.id}>
              <li>{todo.task}</li>
            </ul>
          ))}
        </div>
      ) : (
        <img src={Vazio} alt="/" />
      )}
    </TasksContainer>
  );
};
