import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Dashboard from "./Components/Dashboard/Dashboard";
import Memberships from "./Components/Memberships/Memberships";
import KYC from "./Components/KYC/KYC";
import Notifications from "./Components/Notifications/Notifications";
import Slideshow from "./Components/Slideshow/Slideshow";
import Referalls from "./Components/Referalls/Referalls";
import Complaints from "./Components/Complaints/Complaints";
import Annoucements from "./Components/Annoucements/Annoucements";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main-Menu">
          <Menu />
        </div>
        <div className="components">
          <Dashboard />
          <Memberships />
          <KYC />
          <Notifications />
          <Slideshow />
          <Referalls />
          <Complaints />
          <Annoucements />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
