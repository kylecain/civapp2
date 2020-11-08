import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RollCiv = ({ checkedCivs }) => {
  const [randomCiv, setRandomCiv] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const buttonHandler = () => {
    if (checkedCivs.length === 0) {
      alert("bad");
      return;
    }
    const randomElement =
      checkedCivs[Math.floor(Math.random() * checkedCivs.length)];
    setRandomCiv(randomElement);
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Button
        style={style}
        onClick={buttonHandler}
        variant="contained"
        color="primary"
      >
        Roll
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {randomCiv.Civilization}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Leader: {randomCiv.Leader}
            <br />
            <br />
            Civilization Ability: {randomCiv.CivilizationAbility}
            <br />
            <br />
            Ability Description: {randomCiv.CivilizationAbilityDescription}
            <br />
            <br />
            Unique Unit: {randomCiv.UniqueUnit}
            <br />
            <br />
            Unique Infrastructure: {randomCiv.UniqueInfrastructure}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RollCiv;
