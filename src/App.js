import './App.css';


import { Navbar } from './containers/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers/Router';


function App() {
  return (
    <div className="app">
<BrowserRouter>
<Navbar />
<Router />
</BrowserRouter>
    </div>
  );
}

export default App;
