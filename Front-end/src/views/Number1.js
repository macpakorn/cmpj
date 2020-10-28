import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getB2s } from "../fun/axios";

const useStyles = makeStyles((theme) => ({

  colorButton: {
    backgroundColor: ' #f9c5d1 ',
    backgroundImage:  'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)',
    // color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: 'Mali, cursive',
    
  },
  colorButton2: {
    backgroundColor: ' #f9c5d1 ',
    backgroundImage:  'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: theme.spacing(5),
  },

  state: {
    backgroundColor: ' #7f53ac ',
    backgroundImage:  'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },


  card: {
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
    marginTop: theme.spacing(20),
    backgroundImage: 'linear-gradient(to right, #ffffff 0%, #e7dfe2 100%)',

  },
}));

export default function Page1() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState(11011);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/");
  };
  return (
      <div>
      {/* <Navbar /> */}
      <Typography align="center">
        <Card className={classes.card}>
          <CardHeader
            title="บทที่ 1"
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.state}
          />
          <CardContent>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="outlined-basic"
                  value={bit2string}
                  label="กรอกเลขฐานสอง"
                  variant="outlined"
                  onChange={(e) => setBit2string(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                  <InputBase style={{marginBottom:"10px",width:"400px"}}
                    value={"Answer = "+result}
                    InputProps={{readOnly: true,}}
                  />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container  alignItems="flex-end">
              <Grid item xs={12} >
                <Button style={{float:"right",marginTop:"40px"}}
                  onClick={generate}
                  variant="contained"
                  className={classes.colorButton}
                >
                  คำนวน
                </Button>
                <Button style={{float:"left"}}
                  onClick={back}
                  variant="contained"
                  className={classes.colorButton2}
                >
                  กลับ
                </Button>
              </Grid>

            </Grid>

          </CardActions>
        </Card>
      </Typography>
    </div>
  );
}