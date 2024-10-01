import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import Admindashboard from "./pages/admin-view/dashboard";
import Adminfeatures from "./pages/admin-view/features";
import Adminorders from "./pages/admin-view/orders";
import Adminproducts from "./pages/admin-view/products";
import Shoppinglayout from "./components/shopping-view/layout";
import Notfound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unsuth-pages";
import { useSelector } from "react-redux";

function App() {
  // const isAuthenticated = true;
  // const user = {
  //   role: "user"
  // }

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/unauth-page" element={<UnauthPage/>} />

        <Route
          path="auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Admindashboard />} />
          <Route path="features" element={<Adminfeatures />} />
          <Route path="orders" element={<Adminorders />} />
          <Route path="products" element={<Adminproducts />} />
        </Route>
        <Route
          path="shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Shoppinglayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
