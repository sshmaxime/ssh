import React, { FC, useState } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../_utils/components/stateless/clickable";
import ArrowLeftAltIcon from "@mui/icons-material/West";
import Logo from "../../_utils/assets/images/logo.svg";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export const NavbarComponent: FC = () => {
  const [connected, setConnected] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Style.Root>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Grid item flexGrow={1} style={{ display: "flex", alignItems: "center" }}>
              <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
                <Grid item>
                  <Clickable address="/">
                    <img alt="" src={Logo} style={{ width: "40px" }} />
                  </Clickable>
                </Grid>
                <Grid item xs={1} />
                <Grid item>
                  <Style.LinkButton active to="/app">
                    LIVE
                  </Style.LinkButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
              <Grid
                container
                columnSpacing={2}
                rowSpacing={0}
                flexDirection="row-reverse"
                alignItems="center"
              >
                <Grid item>
                  <Clickable onClick={handlePopoverOpen}>
                    <AccountBalanceWalletIcon
                      style={{
                        opacity: connected ? "" : "25%",
                        fontSize: "40px",
                        color: "black",
                      }}
                    />
                  </Clickable>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{ horizontal: "left", vertical: -7.5 }}
                    disableRestoreFocus
                    style={{
                      borderRadius: "25px",
                      zIndex: 2000,
                    }}
                  >
                    <ClickAwayListener onClickAway={handlePopoverClose}>
                      <div
                        style={{
                          padding: "15px",
                          width: "300px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        hello
                      </div>
                    </ClickAwayListener>
                  </Popover>
                </Grid>
                <Grid item>
                  {connected ? (
                    <Clickable onClick={() => setConnected(false)}>
                      <Style.Wallet container>
                        <Grid
                          item
                          xs={1}
                          style={{ display: "flex", justifyContent: "center", marginRight: "5px" }}
                        >
                          <img
                            src="https://avatars.githubusercontent.com/u/96990732"
                            alt=""
                            style={{ width: "40px", borderRadius: "20px" }}
                          />
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={7}>
                          <Grid container>
                            <Grid item xs={12}>
                              <Style.WalletENS>bonjour.eth</Style.WalletENS>
                            </Grid>
                            <Grid item xs={12}>
                              <Style.WalletAddy>0x1234...5678</Style.WalletAddy>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Style.Wallet>
                    </Clickable>
                  ) : (
                    <Clickable onClick={() => setConnected(true)}>
                      <Style.GoToAppButton>Connect Wallet</Style.GoToAppButton>
                    </Clickable>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Style.AppBar>
    </Style.Root>
  );
};

export default NavbarComponent;
