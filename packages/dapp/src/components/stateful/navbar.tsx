import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../store/reducers";

import { A_connect } from "../../store/actions/app.actions";

import { Button } from "../stateless/button";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: black;
  color: white;
  width: 100wh;
`;

const Navbar: FC = () => {
  const store = useSelector((state: IAppState) => state);
  const dispath = useDispatch();

  const connect = () => {
    dispath(A_connect());
  };

  return (
    <StyledNavbar>
      hello
      <Button text="Connect" />
      {store.appState.connected ? store.appState.address : ""}
    </StyledNavbar>
  );
};

export default Navbar;
