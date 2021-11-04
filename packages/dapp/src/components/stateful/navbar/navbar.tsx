import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../store/reducers";

import { A_connect } from "../../../store/actions/app.actions";

import { Link } from "react-router-dom";

import { Toolbar, Typography } from "@mui/material";

import Style from "./style";

export const NavbarComponent: FC = () => {
  const store = useSelector((state: IAppState) => state);
  const dispath = useDispatch();

  const connect = () => {
    dispath(A_connect());
  };

  return (
    <Style.Root>
      <Style.AppBar position="static">
        <Toolbar style={{ padding: "0px" }}>
          <Style.Title>
            <Link to="/">SSH SOCIETY</Link>
          </Style.Title>
          <Style.Connect>connect</Style.Connect>
        </Toolbar>
      </Style.AppBar>
    </Style.Root>
  );
};

export default NavbarComponent;
