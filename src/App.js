import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import route from './Routes/routes';
import Header from './Components/Header';
import './Assets/sass/style.scss';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {
            route.map((item, index) => {
              return (
                <Route key={index} path={item.path} element={item.element} />
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
