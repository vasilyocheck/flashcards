import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { SelectComponent } from '@/components/ui/select'

const arrayElements = ['Vitaliy', 'Kirill', 'Vasiliy']
const arrayNumbers = ['100', '50', '10']

import s from './components/ui/select/select.module.scss'

function App() {
  return (
    <div>
      <span>Hello, my name is Kirill</span>
      <div>hello</div>
      <Checkbox />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SelectComponent array={arrayElements} />
        <SelectComponent array={arrayNumbers} className={s.SelectNumbers} />
      </div>
    </div>
  )
}

export default App
