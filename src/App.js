import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vr from './components/Vr';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/vr' element={<Vr/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
