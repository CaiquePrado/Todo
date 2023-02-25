import { HeaderContainer } from "./styles";
import { Atom } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Atom size={32} />
        <h1>TodoList</h1>
      </div>
    </HeaderContainer>
  );
};
