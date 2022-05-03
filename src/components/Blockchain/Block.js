import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
function Block(props) {
  const { data, hash, prevHash, name } = props;
  return (
    // <div className="card block-content shadow-sm mb-2">
    //     <div className="card-body">
    //         <div className="blockdata">
    //             <span className="blockdata-name">DATA</span>
    //             <span className="blockdata-content"><b>{data}</b></span>
    //         </div>
    //         <div className="block mt-1">
    //             <span>HASH</span>
    //             <span className="hash hashborder">
    //                 {hash}
    //             </span>
    //         </div>
    //         <div className="block">
    //             <span>PREVIOUS HASH</span>
    //             <span className="hash">{prevHash}</span>
    //         </div>
    //         <p className="blockname">{name}</p>
    //     </div>
    // </div>
    <Card style={{width: '100%'}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
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
                    secondaryAction={<ListItemText primary={data} />}
                  >
                    <ListItemText primary={`Message`} />
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={<ListItemText primary={hash} />}
                  >
                    <ListItemText primary={`Hash`} />
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={<ListItemText primary={prevHash} />}
                  >
                    <ListItemText primary={`Previos hash`} />
                  </ListItem>
                </List>
            </CardActions>
          </Card>
  );
}

export default Block;
