
import { HomePage } from './pages/Home/home';
import { Signup } from './pages/About/signup';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [myName, setMyName] = useState("teet");
  return (
    <>
    <Routes>

        <Route path="/" element={<HomePage  myName={myName} setMyName={setMyName}  />} />
        <Route path="/about" element={<Signup myName={myName} setMyName={setMyName} />} />

      </Routes>
    </>
  );
}
export default App;