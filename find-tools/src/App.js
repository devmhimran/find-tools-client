import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Pages/Blog/Blog';
import Home from './component/Pages/Home.js/Home';
import Navbar from './component/Pages/Home.js/Navbar';
import SignIn from './component/Pages/SignIn/SignIn';
import SignUp from './component/Pages/SignUp/SignUp';
import AllProducts from './component/Pages/AllProducts/AllProducts';
import ErrorPage from './component/Pages/Errorpage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
