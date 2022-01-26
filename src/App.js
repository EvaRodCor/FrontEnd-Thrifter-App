// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style/App.css';

// PAGES
import Edit from "./Pages/Edit";
import Reload from "./Pages/Reload";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<Reload />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
