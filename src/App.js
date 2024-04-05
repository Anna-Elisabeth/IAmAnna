// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import CV from './components/cv/CV';
import Workshop from './components/writing/Workshop';
import PenPortrait from './components/penPortrait/PenPortrait';
import WorkshopManager from './components/writing/WorkshopManager';
import myLogo from "./myLogo.jpg";




function App() {
  return (
    <body>
     


      <div>
    <BrowserRouter>
    
    {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-light gradient-custom">
    {/* <!-- Container wrapper --> */}
    <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
            class="navbar-toggler text-white"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
    <img src={myLogo} alt='Logo' height='50' width='50'/>
    
</a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/penportrait">Pen Portrait</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/cv">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/workshop">Time to write!</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/workshopmanager">Writing management!</a>
                </li>
                
            </ul>
            {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      
           

        {/* <!-- Right elements --> */}
    </div>
    {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}

  
    
     
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/penportrait' element={<PenPortrait />} />
      <Route path='/cv' element={<CV />} />
      <Route path='/workshop' element={<Workshop/>} />
      <Route path='/workshopmanager' element={<WorkshopManager/>} />
      
        </Routes>




    </BrowserRouter>



  </div>

</body>



  );
}

export default App;
