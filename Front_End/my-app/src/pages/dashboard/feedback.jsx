import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import FeedbackForm from "../../components/Dashboard/Feedback/feedback.js"

const  FeedPage= () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <FeedbackForm />
          
        </div>
      </DashboardLayout>
    )
}

export default FeedPage
