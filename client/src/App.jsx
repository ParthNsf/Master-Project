import { Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import Admindashboard from "./pages/admin-view/dashboard"
import Adminfeatures from "./pages/admin-view/features"
import Adminorders from "./pages/admin-view/orders"
import Adminproducts from "./pages/admin-view/products"
import Shoppinglayout from "./components/shopping-view/layout"
import Notfound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>

      <Routes>
      <Route path='*' element={<Notfound/>}/>
        <Route path='auth' element={<AuthLayout/>}>
          <Route path='login' element={<AuthLogin/>} />
          <Route path='register' element={<AuthRegister/>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
        <Route path='dashboard' element={<Admindashboard/>} />
        <Route path='features' element={<Adminfeatures/>}/>
        <Route path='orders' element={<Adminorders/>} />
        <Route path='products' element={<Adminproducts/>}/>
        </Route>
        <Route path='shop' element={<Shoppinglayout/>}>
          <Route path='home' element={<ShoppingHome/>} />
          <Route path='listing' element={<ShoppingListing/>}/>
          <Route path='checkout' element={<ShoppingCheckout/>} />
          <Route path='account' element={<ShoppingAccount/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
