import OverviewPage from "./pages/OverviewPage.jsx";
import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {

  return (
    <div className={"flex h-screen bg-gray-100 text-gray-900 overflow-hidden"}>

      <Sidebar/>
      <Routes>
        <Route path={"/"} element={<OverviewPage />}/>
        <Route path={"/products"} element={<ProductsPage />}/>
        <Route path={"/products"} element={<ProductsPage />}/>
      </Routes>

    </div>
  )
}

export default App
