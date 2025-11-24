import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )

}

// main.jsx에서 createBrowserRouter를 사용하므로
// App.jsx에서는 Layout 컴포넌트만 export하면 됩니다.
// 기존 App 컴포넌트는 더 이상 필요하지 않습니다.
export default Layout;
