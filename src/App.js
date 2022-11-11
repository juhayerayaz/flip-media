import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element>
          <Route path=":id" element />
        </Route>
        <Route path="/about" element />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
