
import RightSideBar from './RightSideBarFolder/RightSideBar';
import LeftSideBar from "./LeftSideBarFolder/LeftSideBar";
import NavbarFile from "./navbar";
import HomeContent from "./HomeContent";
function App() {
  return (
    <div className="App">
      <div className="leftBardiv">
        <LeftSideBar />

      </div>
      <div className="main-content">
        <NavbarFile />
<HomeContent />
      </div>
      <div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
