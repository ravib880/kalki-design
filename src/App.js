import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import route from './Routes/routes';
import Header from './Components/Header';
import './Assets/sass/style.scss';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
