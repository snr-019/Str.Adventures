import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import UserProfiles from '../../components/Dashboard/Customer Profiles/customerprofiles.js'

const  UserPage= () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <UserProfiles />
          
        </div>
      </DashboardLayout>
    )
}

export default UserPage
