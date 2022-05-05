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
                </List>
            </CardActions>
          </Card>
    );
}

export default History;