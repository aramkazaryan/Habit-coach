import { observer } from 'mobx-react-lite'
import habitStore from '../../store/habit-store'
import { HabitProgressItem } from '../../UI/HabitProgressItem/HabitProgressItem'

export const HabitsPage = observer(() => {
  const { habits } = habitStore
  return (
    <div className='bg-white'>
      <div className='min-h-screen py-20 px-10 '>
        <div className='grid grid-cols-1 gap-20 lg:grid-cols-2 w-fit m-auto max-sm:min-w-full'>
          {habits.length
            ? habits.map(habit => (
                <HabitProgressItem habit={habit} key={habit.id} />
              ))
            : ''}
        </div>
      </div>
    </div>
  )
})
