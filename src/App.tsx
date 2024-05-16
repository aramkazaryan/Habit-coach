import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import SignInPage from './pages/SignInPage'
import CalendarPage from './pages/CalendarPage'
import Navbar from './components/Navbar'
import HabitsPage from './pages/HabitsPage'
import { observer } from 'mobx-react-lite'
import habitStore from './store/habit-store'

const App = observer(() => {
  const { isLogin } = habitStore
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </div>
  )
})
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='calendar' element={<CalendarPage />} />
        <Route path='habits' element={<HabitsPage />} />
      </Routes>
    </div>
  )
}

export default App
