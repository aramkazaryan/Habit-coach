import { Form, Formik } from 'formik'
import CustomButton from '../../UI/CustomButton'
import CustomInput from '../../UI/CustomInput'
import { RegistrationInputs, loginValidationSchemas } from './helper.ts'
import habitStore from '../../store/habit-store.tsx'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'

export const RegistrationForm = observer(() => {
  const { register } = habitStore
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchemas}
      onSubmit={values => {
        register(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className='form'>
          {RegistrationInputs.map(item => {
            return (
              <div className='mt-2 mb-10'>
                <CustomInput
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  required={item.required}
                  error={
                    errors[item.name as keyof typeof errors] &&
                    touched[item.name as keyof typeof errors]
                      ? errors[item.name as keyof typeof errors]
                      : ''
                  }
                />
              </div>
            )
          })}

          <CustomButton type='submit' text='Зарегистрироваться' />
        </Form>
      )}
    </Formik>
  )
})
