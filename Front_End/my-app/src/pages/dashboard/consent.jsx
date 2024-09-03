import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import BookingForm from "../../components/Dashboard/Consent/consent.js"

const  ConsentPage= () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <BookingForm />
          
        </div>
      </DashboardLayout>
    )
}

export default ConsentPage
