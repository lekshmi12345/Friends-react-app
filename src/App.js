import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addfriend from './components/Addfriend';
function App() {
  return (
    <>
    <Viewfriend/>
    <BrowserRouter>
    <Routes>
      <Route path='/'exact element={<Addfriend/>}/>
      
      <Route path='/view'exact element={<Viewf/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
