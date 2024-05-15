import RegistrationForm from '../../modules/RegistrationForm'
import Logo from '../../assets/Logo.jpeg'
import { Link } from 'react-router-dom'

export const RegistrationPage = () => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm '>
        <img
          className='mx-auto h-36 w-auto rounded-full'
          src={Logo}
          alt='Your Company'
        />
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <RegistrationForm />
        <div className='mt-10 text-center text-sm text-gray-500'>
          <Link
            to='/login'
            className='font-semibold leading-6 text-teal-500 hover:text-teal-400'
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}
