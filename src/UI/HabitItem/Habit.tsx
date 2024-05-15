import { observer } from 'mobx-react-lite'
import habitStore, { HabitI } from '../../store/habit-store'

interface HabitProps {
  habit: HabitI
  day: string
}

export const Habit: React.FC<HabitProps> = observer(({ habit, day }) => {
  const { doneHabit } = habitStore
  const isChecked = habit.doneDays.includes(day) ? true : false
  return (
    <div className='flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700'>
      <input
        checked={isChecked}
        onChange={() => doneHabit(habit.id, day, !isChecked)}
        id='bordered-checkbox-2'
        type='checkbox'
        value=''
        name='bordered-checkbox'
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {habit.title}
      </label>
    </div>
  )
})
