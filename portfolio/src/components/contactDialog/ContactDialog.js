import React, { useState } from 'react';
import "./ContactDialog.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {VscChromeClose} from "react-icons/vsc";
import {BiMailSend} from "react-icons/bi";


  const useStyles = makeStyles(theme => ({
    textField: {
      width: 350,
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

    const [viesti, setViesti] = useState("");
    const [viestiErrorMsg, setViestiErrorMsg] = useState("");

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

         if (viesti.length === 0 || viesti === "") {
          setViestiErrorMsg("Viestikenttä tyhjä");
          error = true;
      }
      else{
          setViestiErrorMsg("");
       }

        if (error == false){
            //do something
        }

      }
    
    return (
        <Dialog open={dialogOpen} onClose={handleClose}  aria-labelledby="form-dialog-title">
         <div id="border_outline">
        <h1 id="dialog_title">Jätä viesti</h1>
        <DialogContent>
        <div id="border_form">
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

         <TextField  className={classes.textField} variant="outlined" required id="viesti" label="Viesti" multiline minRows={10}
          error={viestiErrorMsg != ""} helperText={viestiErrorMsg} 
          onChange={(e) => {setViesti(e.target.value);
         (e.target.value.length === 0) ? setViestiErrorMsg("Viestikenttä Tyhjä") : setViestiErrorMsg("")
         }}
          />

        </form>
        </div>
        </DialogContent>

                <DialogActions>
                <div id="buttonDivLeft">
                <button id="button_close" onClick={() => handleClose()}><VscChromeClose id="icon_close"/>Sulje</button>
                </div>
                <div id="buttonDivRight">
                <button id ="button_send" onClick={() => handleSend()}><BiMailSend id="icon_send"/>Lähetä</button>
                </div>
                </DialogActions>
                </div>
            </Dialog>
    );
}