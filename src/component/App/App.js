import Nav from "../Layout/nav";
import Menu from "../Layout/menu";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Control from '../Control/Control';
import Home from '../Home/Home';
import Manage from '../Manage/Manage';
import Setting from '../Setting/Setting';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/manage' element={<Manage />}></Route>
          <Route path='/control' element={<Control />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;