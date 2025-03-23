import {
  faBookBookmark,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBookOpenReader, faBookBookmark);

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Body>
        <h1>content</h1>
      </Body>
    </div>
  );
}

export default App;
