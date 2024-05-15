import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import SignInPage from './pages/SignInPage'
import CalendarPage from './pages/CalendarPage'
import Navbar from './components/Navbar'
import HabitsPage from './pages/HabitsPage'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/login' element={<SignInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}
const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path='calendar' element={<CalendarPage />} />
        <Route path='habits' element={<HabitsPage />} />
      </Routes>
    </div>
  )
}
