import { Form, Formik } from 'formik'
import CustomButton from '../../UI/CustomButton/index.ts'
import CustomInput from '../../UI/CustomInput/index.ts'
import { SignInInputs, signInValidationSchemas } from './helper.ts'

export const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInValidationSchemas}
      onSubmit={() => {}}
    >
      {({ errors, touched }) => (
        <Form className='form' method='POST'>
          {SignInInputs.map(item => {
            return (
              <div className='mt-2 mb-10'>
                <CustomInput
                  name={item.name}
                  type={item.type}
                  id={item.id}
                  autoComplete={item.autoComplete}
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
          <CustomButton type='submit' text='Войти' />
        </Form>
      )}
    </Formik>
  )
}
