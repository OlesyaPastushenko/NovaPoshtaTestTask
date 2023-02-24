import './App.css';
import {Route, Routes} from "react-router-dom"
import CheckTTN from './pages/CheckTTN/CheckTTN';
import List from './pages/List/List';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<CheckTTN/>}/>
    <Route path="/list" element={<List/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
