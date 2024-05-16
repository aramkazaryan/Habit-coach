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
  isLogin = false
  habits: HabitI[] = [
    {
      id: 1,
      title: 'Читать 30 минут',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 2,
      title: 'Решать задачки',
      startDate: '2024-05-20',
      endDate: '2024-05-24',
      doneDays: [],
    },
    {
      id: 3,
      title: 'Прогулка по парку',
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

  register = user => {
    fetch('http://localhost:3000/register', {
      method: 'PUT',
      body: JSON.stringify({
        email: user.email,
        name: user.firstName,
        surname: user.lastName,
        password: user.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  login = (values: { email: string; password: string }) => {
    if (
      values.email === 'aramkazaryan11@gmail.com' &&
      values.password === 'aram2003@'
    ) {
      this.isLogin = true
      window.open('/habits', '_self')
    } else {
      alert('Неверный логин или пароль')
    }
  }
}

export default new HabitStore()
