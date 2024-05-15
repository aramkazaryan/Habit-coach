import { object, string } from 'yup'

export const loginValidationSchemas = object({
  firstName: string().required('Введите имя'),
  lastName: string().required('Введите фамилию'),
  email: string()
    .email('Введите корректный email-адрес')
    .required('Введите email-адрес'),
})

export const RegistrationInputs = [
  {
    name: 'firstName',
    type: 'firstName',
    placeholder: 'Имя',
    required: true,
  },
  {
    name: 'lastName',
    type: 'lastName',
    placeholder: 'Фамилия',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Адрес электронной почты',
    required: true,
  },
]
