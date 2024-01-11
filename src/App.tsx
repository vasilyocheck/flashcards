import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { SelectComponent } from '@/components/ui/select'

const arrayElements = ['Vitaliy', 'Kirill', 'Vasiliy']
const arrayNumbers = ['100', '50', '10']

import React from 'react'

import s from './components/ui/select/select.module.scss'

function App() {
  const [value, setValue] = React.useState(arrayNumbers[0])

  return (
    <div>
      <span>Hello, my name is {value}</span>
      <Checkbox />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SelectComponent array={arrayElements} callback={setValue} value={value} />
        <SelectComponent
          array={arrayNumbers}
          callback={setValue}
          className={s.SelectNumbers}
          value={value}
        />
      </div>
    </div>
  )
}

export default App
