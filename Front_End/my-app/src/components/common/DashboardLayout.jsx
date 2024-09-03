import VerticalNavbar from "../Dashboard/Vertical-Navbar/VerticalNavbar.js"
import Header from "../Dashboard/Header/header.js"
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <VerticalNavbar />
        <div className="px-5 pb-0 pt-5 w-100">
          { children }
        </div>
      </div>
      </div>
  )
}

export default DashboardLayout
