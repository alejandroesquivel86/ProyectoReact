import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';

function App() {
  const styleApp = {padding: '10px 20px', marginTop: '10'}
  return (
    <div className="container" style={styleApp}>
        <NavBar/>
          <div className='main-container'>
              <h1>Servicios a Contratar</h1>         
                  <ItemContainer />              
          </div>
    </div>
  );
}

export default App;
