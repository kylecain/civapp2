import Container from "@material-ui/core/Container";
import Civilization from "./Components/Civilization";
import RollCiv from "./Components/RollCiv";
import SearchAppBar from "./Components/AppBar";
import { useEffect, useState } from "react";

var allCivs = require("./All-Civs.json");

function App() {
  const [civs, setCivs] = useState([]);
  const [checkedCivs, setCheckedCivs] = useState([]);
  const[masterCivList, setMasterCivList] = useState([]);

  useEffect(() => {
    setCivs(allCivs);
    setMasterCivList(allCivs)
  }, []);

  return (
    <>
      <SearchAppBar civs={civs} setCivs={setCivs} masterCivList={masterCivList} />
      <Container maxWidth="sm">
        <Civilization
          civs={civs}
          setCivs={setCivs}
          setCheckedCivs={setCheckedCivs}
        />
        <RollCiv
          checkedCivs={checkedCivs}
        />
      </Container>
    </>
  );
}

export default App;
