import { Form, Formik } from 'formik'
import CustomInput from '../../UI/CustomInput'
import Modal from '../../components/Modal'
import { addHabitValidationSchemas } from './helper'
import { observer } from 'mobx-react-lite'
import habitStore from '../../store/habit-store'
import { format, startOfToday } from 'date-fns'
interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AddHabit: React.FC<Props> = observer(({ setOpen }) => {
  const { addHabit, habits } = habitStore
  console.log(habits)
  return (
    <Modal
      children={
        <Formik
          initialValues={{
            title: '',
            startDate: format(startOfToday(), 'yyyy-mm-dd'),
            endDate: format(startOfToday(), 'yyyy-mm-dd'),
          }}
          validationSchema={addHabitValidationSchemas}
          onSubmit={values => {
            addHabit({
              id: habits[habits.length - 1].id + 1,
              title: values.title,
              startDate: values.startDate,
              endDate: values.endDate,
              doneDays: [],
            })
            setOpen(false)
          }}
        >
          {({ errors, touched, values }) => (
            <Form className='form'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <CustomInput
                    className='relative w-full  h-10 mb-5'
                    name={'title'}
                    type={'text'}
                    placeholder={'Наименование привычки'}
                    value={values.title}
                    required={true}
                    error={
                      errors['title'] && touched['title'] ? errors['title'] : ''
                    }
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3'>
                <div className='w-1/2 px-3 mb-6'>
                  <CustomInput
                    name={'startDate'}
                    type={'date'}
                    placeholder={'От'}
                    value={values.startDate}
                    required={true}
                    error={
                      errors['startDate'] && touched['startDate']
                        ? errors['startDate']
                        : ''
                    }
                  />
                </div>
                <div className='w-1/2 px-3'>
                  <CustomInput
                    name={'endDate'}
                    type={'date'}
                    placeholder={'До'}
                    value={values.endDate}
                    required={true}
                    error={
                      errors['endDate'] && touched['endDate']
                        ? errors['endDate']
                        : ''
                    }
                  />
                </div>
              </div>
              <div className='flex flex-wrap items-center justify-end  shrink-0 text-blue-gray-500 mt-6'>
                <button
                  data-ripple-dark='true'
                  data-dialog-close='true'
                  className='px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  onClick={() => setOpen(false)}
                >
                  Отменить
                </button>
                <button
                  type='submit'
                  data-ripple-light='true'
                  data-dialog-close='true'
                  className='middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                >
                  Добавить
                </button>
              </div>
            </Form>
          )}
        </Formik>
      }
    />
  )
})
