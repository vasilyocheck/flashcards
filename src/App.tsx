import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { SelectComponent } from '@/components/ui/select'

const arrayElements = ['Vitaliy', 'Kirill', 'Vasiliy']

function App() {
  return (
    <div>
      <span>Hello, my name is Kirill</span>
      <div>hello</div>
      <Checkbox />
      <div
        style={{
          alignSelf: 'top',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SelectComponent array={arrayElements} />
      </div>
    </div>
  )
}

export default App
