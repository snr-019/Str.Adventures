import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import Header from '../../components/Dashboard/Header/header.js'

const HeaderBar = () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <Header />
          
        </div>
      </DashboardLayout>
    )
}

export default HeaderBar