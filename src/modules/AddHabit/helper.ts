import { date, object, ref, string } from 'yup'

export const addHabitValidationSchemas = object({
  title: string().required('Введите наименование привычки'),
  startDate: date().required(' '),
  endDate: date()
    .required(' ')
    .min(ref('startDate'), 'Поле должно быть позже даты начала'),
})
