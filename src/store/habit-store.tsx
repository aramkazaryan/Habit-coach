import { makeAutoObservable } from 'mobx'

export interface HabitI {
  id: number
  title: string
  startDate: string
  endDate: string
  doneDays: string[]
}

class HabitStore {
  constructor() {
    makeAutoObservable(this)
  }
  habits: HabitI[] = [
    {
      id: 1,
      title: 'habit sadasdadnfb ndsfm, m,sd fm, sdmfnsdl fnl,msd 1',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 2,
      title: 'habit 2',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 3,
      title: 'habit 3',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 4,
      title: 'habit 4',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 5,
      title: 'habit 5',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 6,
      title: 'habit 6',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 7,
      title: 'habit 7',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 8,
      title: 'habit 8',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 9,
      title: 'habit 9',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
  ]

  addHabit = (newHabit: HabitI) => {
    this.habits = [...this.habits, newHabit]
  }

  deleteHabit = (habitID: number) => {
    this.habits = this.habits.filter(i => i.id !== habitID)
  }

  doneHabit = (id: number, day: string, checked: boolean) => {
    if (checked) {
      this.habits = this.habits.map(i =>
        i.id === id ? { ...i, doneDays: [...i.doneDays, day] } : i,
      )
    } else {
      this.habits = this.habits.map(i =>
        i.id === id ? { ...i, doneDays: i.doneDays.filter(i => i !== day) } : i,
      )
    }
  }
}

export default new HabitStore()
