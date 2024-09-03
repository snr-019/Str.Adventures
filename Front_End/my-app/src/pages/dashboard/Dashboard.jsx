import DashboardLayout from "../../components/common/DashboardLayout.jsx"
import Trips from '../../components/Dashboard/Trips/'

const Dashboard = () => {
  const TripDetails = [
    { id: 1, total: 2, text: 'Current Trip ', color: 'orange' },
    { id: 2, total: 5, text: 'Completed Trip', color: 'green' },
    { id: 3, total: 10, text: "Remaining Trip", color: 'blue' }
  ]
  return (
    <DashboardLayout>
      <div className='d-flex gap-5 mt-4 justify-content-center align-items-center h-100 '>
        {TripDetails.map(each => (
          <Trips key={each.id} each={each} />
        ))}
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
