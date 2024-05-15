import { object, string } from 'yup'

export const signInValidationSchemas = object({
  email: string()
    .email('Введите корректный email-адрес')
    .required('Введите email-адрес'),
  password: string().required('Введите пароль'),
})

export const SignInInputs = [
  {
    name: 'email',
    type: 'email',
    id: 'email',
    autoComplete: 'email',
    placeholder: 'Адрес электронной почты',
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    id: 'password',
    autoComplete: 'current-password',
    placeholder: 'Пароль',
    required: true,
  },
]
