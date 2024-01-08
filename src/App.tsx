import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { DropdownMenuComponent } from '@/components/ui/dropdownmenu/dropdownmenu'

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
        <DropdownMenuComponent />
      </div>
    </div>
  )
}

export default App
