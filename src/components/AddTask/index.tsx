import { Form } from "./styles";

export const AddTask = () => {
  return (
    <Form>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Adicionar</button>
    </Form>
  );
};
