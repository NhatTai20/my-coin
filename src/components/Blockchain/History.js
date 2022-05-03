import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
function History(props) {
    const {from, to, coin, miner} = props;
    return (
        // <div className="card-body" style={{marginLeft: '20px', marginRight: '20px'}}>
        //     <div className="row card-history shadow-sm">
        //         <div className="col-5" style={{marginTop: 'auto', marginBottom: 'auto'}}>
        //             <p>From <span className="txthistory">{from}</span></p>
        //             <p>To <span className="txthistory">{to}</span></p>
        //         </div>
        //         <div className="col-3 card-small-history ">
        //             <p>Coin: <span className="historycoin">{coin}</span></p>
        //         </div>
        //         <div className="col-4 card-small-history">
        //             <p>Miner: <span className={miner==="Not available"?"txtMinerUn":"txtMiner"}>{miner}</span></p>
        //         </div>
        //     </div>
        // </div>
        <Card style={{width: '100%'}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  From {from} to {to}
                </Typography>
                
              </CardContent>
            </CardActionArea>
            <CardActions>
            <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem
                    disableGutters
                    secondaryAction={<ListItemText primary={coin} />}
                  >
                    <ListItemText primary={`Coin`} />
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={<ListItemText primary={miner} />}
                  >
                    <ListItemText primary={`Miner`} />
                  </ListItem>
                  {/* <ListItem
                    disableGutters
                    secondaryAction={<ListItemText primary={prevHash} />}
                  >
                    <ListItemText primary={`Previos hash`} />
                  </ListItem> */}
                </List>
            </CardActions>
          </Card>
    );
}

export default History;