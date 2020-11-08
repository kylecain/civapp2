import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Civilization = ({civs, setCivs, setCheckedCivs}) => {
  const classes = useStyles();
  
  const civCheckHandler = (i) => {
    let cArr = [...civs];
    cArr[i].Checked = !cArr[i].Checked;
    setCivs(cArr);
    setCheckedCivs(civs.filter(civ => civ.Checked === true));
  };

  return (
    <div className={classes.root}>

      {civs.map((civ, i) => (
              <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => {
                    event.stopPropagation();
                    civCheckHandler(i);
                  }}
                  onFocus={(event) => event.stopPropagation()}
                  checked={civ.Checked}
                  control={<Checkbox style ={{
                    color: "#3f51b5",
                  }}/>}
                  label={civ.Civilization}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                    Leader: {civ.Leader} 
                    <br/><br/>
                    Civilization Ability: {civ.CivilizationAbility}
                    <br/><br/>
                    Ability Description: {civ.CivilizationAbilityDescription}
                    <br/><br/>
                    Unique Unit: {civ.UniqueUnit}
                    <br/><br/>
                    Unique Infrastructure: {civ.UniqueInfrastructure}
                </Typography>
              </AccordionDetails>
            </Accordion>
      
      ))}
    </div>
  );
};

export default Civilization;
