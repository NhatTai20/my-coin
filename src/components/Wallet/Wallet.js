import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Wallet.scss";
function Wallet(props) {
  const {
    myWallet,
    wallets,
    formCreate,
    iWalletActive,
    getIdChangeWallet,
    sendCoin,
  } = props;
  const [valueForm, setValueForm] = useState("");
  const [sendCoinForm, setSendCointForm] = useState(0);
  const [idReciever, setIdReciever] = useState(0);

  function handleFormCreateChange(e) {
    setValueForm(e.target.value);
  }

  function handleFormCreateSubmit(e) {
    e.preventDefault();
    if (valueForm === "") {
      return;
    }
    const formValue = {
      name: valueForm,
    };
    setValueForm("");
    formCreate(formValue);
  }

  function handleClickChangeWallet(id) {
    const value = {
      newId: id,
    };
    getIdChangeWallet(value);
  }

  function handleChangeSendCoin(e) {
    setSendCointForm(e.target.value);
  }

  function handleChangeIdRecieverCoin(e) {
    setIdReciever(e.target.value);
  }

  function handleFormSendCoinSubmit(e) {
    e.preventDefault();
    const formValue = {
      id: Math.floor(idReciever),
      coin: Math.floor(sendCoinForm),
    };
    sendCoin(formValue);
    setSendCointForm(0);
    setIdReciever(0);
  }

  return (
    <>
      <div className="walletsection">
        {/*WALLET*/}
        <div className="col-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  My Wallet
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem
                  disableGutters
                  secondaryAction={<ListItemText primary={myWallet.name} />}
                >
                  <ListItemText primary={`Name`} />
                </ListItem>
                <ListItem
                  disableGutters
                  secondaryAction={<ListItemText primary={myWallet.coin} />}
                >
                  <ListItemText primary={`Balance`} />
                </ListItem>
              </List>
            </CardActions>
          </Card>
        </div>

        {/*CREATE WALLET*/}
        <div className="col-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Create a new wallet
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <form onSubmit={handleFormCreateSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Name wallet..."
                    onChange={handleFormCreateChange}
                  />
                </div>
                <button className="btn btn-success btnformcreatewallet">
                  Create
                </button>
              </form>
            </CardActions>
          </Card>
        </div>

        {/*WALLET LIST*/}

        <div className="col-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Wallet list
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className={
                    iWalletActive === wallet.id
                      ? "active changewallet mb-2"
                      : "changewallet mb-2"
                  }
                  onClick={() => handleClickChangeWallet(wallet.id)}
                >
                  <span>{wallet.name}</span>
                </div>
              ))}
            </CardActions>
          </Card>
        </div>
      </div>
      {/*TRANSFER*/}
      <div className="transfersection">
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Send coin
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <p className={wallets.length === 1 ? "txtNoti" : "andi"}>
                Add more wallet to transfer
              </p>
              <form
                className={wallets.length === 1 ? "andi" : ""}
                onSubmit={handleFormSendCoinSubmit}
                id="formsendcoin"
              >
                <div className="form-group">
                  <label htmlFor="sendcoin">Amount: </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="sendcoin"
                    onChange={handleChangeSendCoin}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wallet">To: </label>
                  <select
                    className="form-control form-control-sm"
                    id="wallet"
                    onChange={handleChangeIdRecieverCoin}
                  >
                    {wallets.map((wallet) => (
                      <option
                        key={wallet.id}
                        value={wallet.id}
                        className={wallet.id === iWalletActive ? "andi" : ""}
                      >
                        {wallet.name}
                      </option>
                    ))}
                  </select>
                </div>
                <label className="txtinvalid">Input invalid</label>
                <button className="btn btn-block btn-success">Send</button>
              </form>
            </CardActions>
          </Card>
        </div>

        {/*STATISTICS*/}
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Statistics
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem
                  disableGutters
                  secondaryAction={<ListItemText primary={myWallet.recieved} />}
                >
                  <ListItemText primary={`Received: `} />
                </ListItem>
                <ListItem
                  disableGutters
                  secondaryAction={<ListItemText primary={myWallet.transfer} />}
                >
                  <ListItemText primary={`Sent: `} />
                </ListItem>
              </List>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Wallet;
