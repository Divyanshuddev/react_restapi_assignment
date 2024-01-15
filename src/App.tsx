
// import './App.css'
import { Route,Routes } from "react-router-dom";
import Register from './component/Register';
import Profiles from "./component/Profiles";
import Update from "./component/Update";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </>
  )
}

export default App
