import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import Profile from '../../components/Dashboard/Profile/Profile.jsx'

const ProfilePage = () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <Profile />
          
        </div>
      </DashboardLayout>
    )
}

export default ProfilePage
