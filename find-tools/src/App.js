import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Pages/Blog/Blog";
import Home from "./component/Pages/Home/Home";
// import Navbar from './component/Pages/Navbar';
import SignIn from "./component/Pages/SignIn/SignIn";
import SignUp from "./component/Pages/SignUp/SignUp";
import AllProducts from "./component/Pages/AllProducts/AllProducts";
import ErrorPage from "./component/Pages/Errorpage/ErrorPage";
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import ManageAllOrders from "./component/Pages/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./component/Pages/ManageProducts/ManageProducts";
import Loading from "./component/Pages/Loading/Loading";
import RequireAuth from "./component/Pages/RequireAuth/RequireAuth";
import AddProduct from "./component/Pages/AddProduct/AddProduct";
import MakeAdmin from "./component/Pages/MakeAdmin/MakeAdmin";
import MyProfile from "./component/Pages/MyProfile/MyProfile";
import AddaReview from "./component/Pages/AddaReview/AddaReview";
import MyOrders from "./component/Pages/MyOrders/MyOrders";
import RequireAdmin from "./component/Pages/RequireAdmin/RequireAdmin";
import SingleProduct from "./component/Pages/AllProducts/SingleProduct";
import OrderRow from "./component/Pages/MyOrders/OrderRow";
import MyPortolio from "./component/Pages/MyPortfolio/MyPortolio";
import Footer from "./component/Pages/Home/Footer";
import Navbar from "./component/Pages/Navbar/Navbar";
import AllReviews from "./component/Pages/AllReviews/AllReviews";
import Payment from "./component/Pages/Payment/Payment";
import UpdateProduct from "./component/Pages/UpdateProduct.js/UpdateProduct";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/myportfolio" element={<MyPortolio></MyPortolio>}></Route>
        <Route
          path="/allproducts"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="/allreviews" element={<AllReviews></AllReviews>}></Route>
        <Route path="/payment/:orderId" element={<Payment></Payment>}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <SingleProduct></SingleProduct>
            </RequireAuth>
          }
        ></Route>
        {/* <Route path='/productUpdate/:productId' element={<SingleProduct></SingleProduct>}></Route>
        <Route path='/order/:id' element={<SingleProduct></SingleProduct>}></Route> */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addareview" element={<AddaReview></AddaReview>}></Route>
          <Route
            path="manageallorders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="update-product/:id"
            element={
              <RequireAdmin>
                <UpdateProduct />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
