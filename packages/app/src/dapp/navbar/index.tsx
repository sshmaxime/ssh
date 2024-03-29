import React, { FC, useEffect, useRef, useState } from "react";

import { Toolbar, Grid } from "@mui/material";

import Style from "./style";
import Clickable from "../../_utils/components/clickable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Popover from "@mui/material/Popover";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenseaIcon from "../../_utils/assets/icons/opensea.svg";
import EtherscanIcon from "../../_utils/assets/icons/etherscan.svg";
import { useDispatch, useSelector } from "../store/hooks";
import { login } from "../store/services/web3";
import { shortenAddress } from "../utils";
import { useGetDripsQuery } from "../store/services";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import LogoIcon from "../../_utils/assets/images/logo-typo.svg";
import { DripStatus } from "@premier/typings";
import CenterItem from "@/_utils/components/grid/centerItem";
import { useLocation } from "react-router-dom";

import { Link, useParams } from "react-router-dom";

const NavBarButton: FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <Clickable hoverAnimation={false} address={to}>
      <Style.LinkBarText>{text}</Style.LinkBarText>
    </Clickable>
  );
};

export const NavbarComponent: FC = () => {
  const { auth, authError, address, name } = useSelector((state) => state.web3);
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

  const location = useLocation();

  const f = useRef();
  const [dropId, setDropId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const path = location.pathname;
    const regex = /app\/drop\/\d+(?![\w\d])/;
    const regex2 = /^[^\d]*(\d+)/;

    const isRouteMatching = regex.test(path);
    if (isRouteMatching) {
      const dropId = (regex2.exec(path) as any)[1];
      setDropId(dropId);
    } else {
      setDropId(undefined);
    }
  }, [location]);

  return (
    <Style.Root>
      <div
        style={{
          position: "absolute",
          right: "1.5vw",
          top: "100px",
          backgroundColor: "red",
          width: "-2.5px",
          height: "-2.5px",
        }}
        ref={f as any}
      ></div>
      <Style.AppBar position="absolute">
        <Toolbar style={{ padding: "0px" }}>
          <Grid container columnSpacing={0} rowSpacing={0}>
            <Grid item xs={2.25} style={{ display: "flex", alignItems: "center" }}>
              <Grid container columnSpacing={0} rowSpacing={0} alignItems="center">
                <Grid item>
                  <Clickable address="/">
                    <img alt="" src={LogoIcon} style={{ width: "200px" }} />
                  </Clickable>
                </Grid>

                {dropId ? (
                  <>
                    <Grid item style={{ marginLeft: "15px" }}>
                      <Style.Title3>{`>`}</Style.Title3>
                    </Grid>
                    <Grid item style={{ marginLeft: "7.5px" }}>
                      <Style.Title>{`DROP`}</Style.Title>
                    </Grid>
                    <Grid item style={{ marginLeft: "7.5px" }}>
                      <Style.Title3>{`>`}</Style.Title3>
                    </Grid>
                    <Grid item style={{ marginLeft: "7.5px" }}>
                      <Style.Title2>{dropId}</Style.Title2>
                    </Grid>
                  </>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={0.5}>
              <Grid
                container
                justifyContent={"center"}
                alignItems="center"
                columnSpacing={4}
                style={{ height: "100%", color: "black", fontSize: "2em" }}
              >
                <Grid item>|</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent={"center"}
                alignItems="center"
                columnSpacing={2}
                style={{ height: "100%" }}
              >
                {/* <Style.LinkNavbar item>
                  <NavBarButton text="HOME" to="/app/" />
                </Style.LinkNavbar>
                <Grid item style={{ color: "black" }}>
                  |
                </Grid> */}
                <Style.LinkNavbar item>
                  <NavBarButton text="DROP" to="/app/drop" />
                </Style.LinkNavbar>
                <Grid item style={{ color: "black" }}>
                  |
                </Grid>
                <Style.LinkNavbar item>
                  <NavBarButton text="DOCS" to="/app/docs" />
                </Style.LinkNavbar>
              </Grid>
            </Grid>
            <Grid item flexGrow={1} style={{ display: "flex", alignItems: "center" }}>
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
                    anchorEl={f.current}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    disableRestoreFocus
                    style={{
                      zIndex: 2000,
                      boxShadow: "2.5px 2.5px 5px #afafb4, -2.5px -2.5px 5px #ffffff",
                    }}
                    elevation={10}
                  >
                    <ClickAwayListener onClickAway={handlePopoverClose}>
                      <Style.WalletView>
                        {drips && drips.length ? (
                          <Grid container>
                            {drips.map((drip, index) => (
                              <Grid item key={index} xs={12}>
                                <Grid container>
                                  <Grid item xs={2}>
                                    <img
                                      src={drip.img || drip.nft?.img || "/placeholder.png"}
                                      style={{ width: "100%" }}
                                      alt=""
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    xs={10}
                                    style={{ padding: "1.5px", paddingLeft: "10px" }}
                                  >
                                    <Grid
                                      container
                                      direction="column"
                                      justifyContent="space-between"
                                      style={{ height: "100%", padding: "2.5px" }}
                                    >
                                      <Grid item>
                                        <Grid container justifyContent="space-between">
                                          <Grid item>
                                            <Grid container columnSpacing={1}>
                                              <CenterItem item>
                                                <Style.WalletTypoCollectionDrop
                                                  style={{
                                                    borderBottom: `5px solid black`,
                                                    borderImage: `linear-gradient(to right, ${
                                                      drip.drop.metadata.versions[drip.version]
                                                        .color
                                                    } 50%, transparent 50%) 100% 1`,
                                                  }}
                                                >
                                                  {drip.drop.symbol}
                                                </Style.WalletTypoCollectionDrop>
                                              </CenterItem>
                                              <Grid item>
                                                <Style.WalletTypoDripId>
                                                  #{drip.id}
                                                </Style.WalletTypoDripId>
                                              </Grid>
                                            </Grid>
                                          </Grid>

                                          <Grid item>
                                            <Grid container columnSpacing={0.5}>
                                              <CenterItem
                                                item
                                                style={{ display: "flex", alignContent: "center" }}
                                              >
                                                <img
                                                  style={{ width: "15px" }}
                                                  src={OpenseaIcon}
                                                  alt=""
                                                />
                                              </CenterItem>
                                              <CenterItem
                                                item
                                                style={{ display: "flex", alignContent: "center" }}
                                              >
                                                <img
                                                  style={{ width: "15px" }}
                                                  src={EtherscanIcon}
                                                  alt=""
                                                />
                                              </CenterItem>
                                            </Grid>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                      <Grid item>
                                        <Grid container justifyContent="space-between">
                                          <CenterItem item>
                                            <Grid container>
                                              <Grid item>
                                                <Clickable
                                                  hoverAnimation={false}
                                                  address={`/app/drop/${drip.drop.id}/${drip.id}`}
                                                  onClick2={() => handlePopoverClose()}
                                                >
                                                  <Style.WalletTypoDripAction>
                                                    View
                                                  </Style.WalletTypoDripAction>
                                                </Clickable>
                                              </Grid>
                                            </Grid>
                                          </CenterItem>
                                          {drip.status === DripStatus.MUTATED ? (
                                            <Grid item>
                                              <Style.WalletTypoDripNft>
                                                {drip.nft?.symbol} #{drip.nft?.id}
                                              </Style.WalletTypoDripNft>
                                            </Grid>
                                          ) : (
                                            <Grid item>
                                              <Style.WalletTypoCollection>
                                                MUTABLE
                                              </Style.WalletTypoCollection>
                                            </Grid>
                                          )}
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
                            {isLoading ? (
                              <Style.WalletTypo1>Loading ...</Style.WalletTypo1>
                            ) : (
                              <Style.WalletTypo1>You do not own any drips :'(</Style.WalletTypo1>
                            )}
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
                <Grid item style={{ color: "black" }}>
                  <Style.NetworkSupported>
                    {!auth && authError && (
                      <>
                        Network unsupported. Please switch to: <b>[Goerli]</b>
                      </>
                    )}
                  </Style.NetworkSupported>
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
