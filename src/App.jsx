// import Buttons from './components/Button/Buttons.jsx';

import Canva from './components/Canva/Canva.jsx';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CadastroPage from './pages/CadastroPage.jsx';
import image from './assets/nupacImg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 

  return (
    <>
    <header className='header'>
          <div className='title'>
          <h1>NUPAC <img style={{width: "30px", height: "30px", borderRadius: "50px"}} src={image} alt="logo" /></h1>
          </div>
        <div className='canva'>
            <Canva />
          </div>
          {/* <div className='logo'>
            <img style={{width: "55px", height: "55px", borderRadius: "50px"}} src={image} alt="logo" />
          </div> */}
    </header>

    
      
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/cadastro' element={<CadastroPage />}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App;

