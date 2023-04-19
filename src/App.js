
import {  Routes, Route } from 'react-router-dom';
import Upload from './Pages/Upload/Upload';
import Home from '../src/Pages/Home/Home';
import Header from './components/Header/Header';



function App() {

  return (
    
      <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path="/video/:videoId" element={<Home />} />
        </Routes>
    </>  
  

  );
}

export default App;




