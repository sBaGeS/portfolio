import React, { useState } from 'react';
import "./ContactDialog.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@mui/material/styles';

  const useStyles = makeStyles(theme => ({
    textField: {
        '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiOutlinedInput-root': {
            margin: "10px",
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
          },
    },
}));

export default function ContactDialog(props) {

    const [dialogOpen, setDialogOpen] = useState(true);

    const [etunimi, setEtunimi] = useState("");
    const [etunimiErrorMsg, setEtunimiErrorMsg] = useState("");

    const [sukunimi, setSukunimi] = useState("");
    const [sukunimiErrorMsg, setSukunimiErrorMsg] = useState("");

    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");

    const classes = useStyles();

    const handleClose = () => {
        setDialogOpen(false);
        props.open(false);
      };

      const handleSend = () => {
        let error = false;
        if (etunimi.length === 0 || etunimi === "") {
            setEtunimiErrorMsg("Syötä etunimi");
            error = true;
        }
        else{
           setEtunimiErrorMsg("");
        }

        if (sukunimi.length === 0 || sukunimi === "") {
            setSukunimiErrorMsg("Syötä sukunimi");
            error = true;
        }
        else{
            setSukunimiErrorMsg("");
         }

         if (email.length === 0 || email === "") {
            setEmailErrorMsg("Syötä sähköpostiosoite");
            error = true;
        }
        else{
            setEmailErrorMsg("");
         }

        if (error == false){
            //do something
        }

      }
    
    return (
        <Dialog open={dialogOpen} onClose={handleClose}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ota yhteyttä</DialogTitle>
        <DialogContent>
        <form noValidate autoComplete="off">
        
        <TextField className={classes.textField} variant="outlined" error={etunimiErrorMsg != ""} helperText={etunimiErrorMsg} required id="Etunimi" label="Etunimi" value={etunimi}
        onChange={(e) => {
         setEtunimi(e.target.value);
         (e.target.value.length === 0) ? setEtunimiErrorMsg("Syötä etunimi") : setEtunimiErrorMsg("")
         }} />

        <br />

         <TextField className={classes.textField} variant="outlined" error={sukunimiErrorMsg != ""} helperText={sukunimiErrorMsg} required id="Sukunimi" label="Sukunimi" value={sukunimi}
        onChange={(e) => {
         setSukunimi(e.target.value);
         (e.target.value.length === 0) ? setSukunimiErrorMsg("Syötä sukunimi") : setSukunimiErrorMsg("")
         }} />

        <br />

        <TextField className={classes.textField} variant="outlined" error={emailErrorMsg != ""} helperText={emailErrorMsg} required id="Email" label="Sähköpostiosoite" value={email}
        onChange={(e) => {
         setEmail(e.target.value);
         (e.target.value.length === 0) ? setEmailErrorMsg("Syötä sähköpostiosoite") : setEmailErrorMsg("")
         }} />

         <br />

         <TextField  className={classes.textField} variant="outlined" required id="viesti" label="Viesti" multiline rows={10}/>

        </form>
        </DialogContent>

                <DialogActions>
                <button onClick={() => handleClose()}>Sulje</button>
                <button onClick={() => handleSend()}>Lähetä</button>
                </DialogActions>
            </Dialog>
    );
}