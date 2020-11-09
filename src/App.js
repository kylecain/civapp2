import Container from "@material-ui/core/Container";
import Civilization from "./Components/Civilization";
import RollCiv from "./Components/RollCiv";
import PersistentDrawerLeft from "./Components/Drawer";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

var allCivs = require("./All-Civs.json");

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#BB86FC",
    }
  },
});

function App() {
  const [civs, setCivs] = useState([]);
  const [checkedCivs, setCheckedCivs] = useState([]);
  const [masterCivList, setMasterCivList] = useState([]);

  useEffect(() => {
    setCivs(allCivs);
    setMasterCivList(allCivs);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <PersistentDrawerLeft
        civs={civs}
        setCivs={setCivs}
        masterCivList={masterCivList}
      />
      <Container maxWidth="sm">
        <Civilization
          civs={civs}
          setCivs={setCivs}
          setCheckedCivs={setCheckedCivs}
        />
        <RollCiv checkedCivs={checkedCivs} />
      </Container>
    </ ThemeProvider>
  );
}

export default App;
