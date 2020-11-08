import Container from '@material-ui/core/Container';
import Civilization from './Components/Civilization';
import RollCiv from './Components/RollCiv';
import { useEffect, useState } from 'react';

var allCivs = require("./All-Civs.json");

function App() {
  const [civs, setCivs] = useState([]);
  const [filteredCivs, setFilteredCivs] = useState([]);

   useEffect(() =>{
     setCivs(allCivs);
   }, []);


  return (
    <Container maxWidth="sm">
      <header>
        <h1 style={{textAlign: "center", fontSize: "xxx-large"}}>Civ App 2</h1>
      </header>
      <Civilization civs={civs} setCivs={setCivs} setFilteredCivs={setFilteredCivs}/>
      <RollCiv civs={civs} filteredCivs={filteredCivs} setFilteredCivs={setFilteredCivs}/>
    </Container>
  );
}

export default App;
