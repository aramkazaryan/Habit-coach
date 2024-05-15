import { Form, Formik } from 'formik'
import CustomButton from '../../UI/CustomButton'
import CustomInput from '../../UI/CustomInput'
import { RegistrationInputs, loginValidationSchemas } from './helper.ts'

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchemas}
      onSubmit={() => {}}
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
}
