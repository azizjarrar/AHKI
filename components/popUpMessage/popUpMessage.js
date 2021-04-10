import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Styles from './popUpMessage.module.scss'
const popUpMessage = (props) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        props.fnclose()
        };
    return (
        <div className={Styles.container}>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Nozzla"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <span className={Styles.errorText}>
                {props.openPopUp.text}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary" autoFocus>
            <span className={Styles.errorBtns}>Agree</span>
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default popUpMessage
