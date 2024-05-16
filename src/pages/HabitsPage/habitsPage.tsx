import { observer } from 'mobx-react-lite'
import habitStore from '../../store/habit-store'
import { HabitProgressItem } from '../../UI/HabitProgressItem/HabitProgressItem'
import { useEffect } from 'react'

export const HabitsPage = observer(() => {
  const { habits } = habitStore

  useEffect(() => {
    fetch('http://localhost:3000/user/:mail/habits', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  })
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
