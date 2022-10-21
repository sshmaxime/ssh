import React, { FC, useEffect, useState } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../_utils/components/stateless/clickable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Popover from "@mui/material/Popover";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenseaIcon from "../../_utils/assets/icons/opensea.svg";
import { useDispatch, useSelector } from "../store/hooks";
import { login } from "../store/services/web3";
import { shortenAddress } from "../utils";
import { useGetDripsQuery } from "../store/services";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import LogoIcon from "../../_utils/assets/images/logo-icon.svg";

export const NavbarComponent: FC = () => {
  const { auth, address, name } = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  const { data: drips, isLoading } = useGetDripsQuery({ address }, { skip: !auth });

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
                    <img alt="" src={LogoIcon} style={{ width: "75px" }} />
                  </Clickable>
                </Grid>
                <Grid item style={{ marginLeft: "25px" }}>
                  <Clickable onClick={() => {}}>
                    <Grid container alignItems="center" justifyContent="center">
                      <Grid item>
                        <ArrowRightAltIcon
                          style={{ fontSize: "2.5em", transform: "rotate(180deg)", color: "black" }}
                        />
                      </Grid>
                      <Grid item>
                        <Style.Title>BACK TO ALL DROP</Style.Title>
                      </Grid>
                    </Grid>
                  </Clickable>
                </Grid>
                <Grid item xs={1} />
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
                  <Clickable activated={auth} onClick={handlePopoverOpen}>
                    <AccountBalanceWalletIcon
                      style={{
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
                    transformOrigin={{ horizontal: "left", vertical: -10 }}
                    disableRestoreFocus
                    style={{ zIndex: 2000 }}
                    elevation={0}
                  >
                    <ClickAwayListener onClickAway={handlePopoverClose}>
                      <Style.WalletView>
                        {drips && drips.length ? (
                          <Grid container>
                            {drips.map((drip, index) => (
                              <Grid item key={index}>
                                <Grid container>
                                  <Grid item xs={2}>
                                    <img src={drip.img} style={{ width: "100%" }} alt="" />
                                  </Grid>
                                  <Grid
                                    item
                                    xs={10}
                                    style={{ padding: "1.5px", paddingLeft: "10px" }}
                                  >
                                    <Grid container justifyContent="space-between">
                                      <Grid item>
                                        <Style.WalletTypoCollectionDrop>
                                          {drip.collectionName}
                                        </Style.WalletTypoCollectionDrop>
                                      </Grid>
                                      <Grid item>
                                        <Grid container columnSpacing={1}>
                                          {drip.isMutable ? (
                                            <Grid item>
                                              <Style.WalletTypoCollection>
                                                MUTABLE
                                              </Style.WalletTypoCollection>
                                            </Grid>
                                          ) : (
                                            <></>
                                          )}
                                          <Grid item>
                                            <Style.WalletTypoDripId>
                                              #{drip.id}
                                            </Style.WalletTypoDripId>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Grid>

                                    <Grid
                                      container
                                      style={{ marginTop: "5px" }}
                                      justifyContent="space-between"
                                    >
                                      <Grid item>
                                        <Grid container style={{ marginTop: "5px" }}>
                                          <Grid item style={{ marginRight: "5px" }}>
                                            <Clickable
                                              hoverAnimation={false}
                                              external={false}
                                              address={`drop/${drip.dropId}/${drip.id}`}
                                              onClick2={() => handlePopoverClose()}
                                            >
                                              <Style.WalletTypoDripAction>
                                                View
                                              </Style.WalletTypoDripAction>
                                            </Clickable>
                                          </Grid>
                                        </Grid>
                                      </Grid>

                                      <Grid item>
                                        <Grid container>
                                          <Grid item>
                                            <img
                                              style={{ width: "20px" }}
                                              src={OpenseaIcon}
                                              alt=""
                                            />
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <div
                                  style={{
                                    height: "2px",
                                    marginTop: "2.5px",
                                    marginBottom: "5px",
                                    backgroundColor: "grey",
                                    opacity: "0.1",
                                  }}
                                ></div>
                              </Grid>
                            ))}
                          </Grid>
                        ) : (
                          <Grid
                            style={{ height: "100px" }}
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Style.WalletTypo1>You do not own any drips :'(</Style.WalletTypo1>
                          </Grid>
                        )}
                      </Style.WalletView>
                    </ClickAwayListener>
                  </Popover>
                </Grid>
                <Grid item>
                  {auth ? (
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
                            <Style.WalletENS>{name}</Style.WalletENS>
                          </Grid>
                          <Grid item xs={12}>
                            <Style.WalletAddy>{shortenAddress(address)}</Style.WalletAddy>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Style.Wallet>
                  ) : (
                    <Clickable onClick={() => dispatch(login())}>
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
