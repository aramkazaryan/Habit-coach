import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  isWithinInterval,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'
import { colStartClasses } from './helper'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import habitStore from '../../store/habit-store'
import { observer } from 'mobx-react-lite'
import { Habit } from '../../UI/HabitItem/Habit'
import { ru } from 'date-fns/locale'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export const HabitsCalendar = observer(() => {
  const { habits } = habitStore
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const selectedDayhabits = habits.filter(habit =>
    isWithinInterval(selectedDay, {
      start: parseISO(habit.startDate),
      end: parseISO(habit.endDate),
    }),
  )

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
          <div className='md:pr-14'>
            <div className='flex items-center'>
              <h2 className='flex-auto font-semibold text-gray-900'>
                {format(firstDayCurrentMonth, 'LLLL yyyy', { locale: ru })}
              </h2>
              <button
                type='button'
                onClick={previousMonth}
                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Previous month</span>
                <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
              </button>
              <button
                onClick={nextMonth}
                type='button'
                className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Next month</span>
                <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
              </button>
            </div>
            <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className='grid grid-cols-7 mt-2 text-sm'>
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5',
                  )}
                >
                  <button
                    type='button'
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className='w-1 h-1 mx-auto mt-1'>
                    {habits.some(habit =>
                      isWithinInterval(day, {
                        start: parseISO(habit.startDate),
                        end: parseISO(habit.endDate),
                      }),
                    ) && (
                      <div className='w-1 h-1 rounded-full bg-sky-500'></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-gray-900'>
              Привычки на
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, ' dd MMM, yyy', { locale: ru })}
              </time>
            </h2>
            <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500 overflow-auto h-96'>
              {selectedDayhabits.length > 0 ? (
                selectedDayhabits.map(habit => (
                  <Habit
                    habit={habit}
                    key={habit.id}
                    day={format(selectedDay, 'yyyy-MM-dd')}
                  />
                ))
              ) : (
                <p>No habits for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
})
