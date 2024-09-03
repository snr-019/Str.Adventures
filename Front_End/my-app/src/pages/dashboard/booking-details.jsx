import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import Booking_Main from '../../components/Dashboard/Booking-Details/Booking_Main.jsx'

const BookingPage = () => {
    return  (
      <DashboardLayout>
        <div className="w-100 justify-content-center d-flex">
          <Booking_Main />
          
        </div>
      </DashboardLayout>
    )
}

export default BookingPage
