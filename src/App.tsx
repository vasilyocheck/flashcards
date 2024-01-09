import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { DropdownMenuAvatar } from '@/components/ui/dropdownmenu/drop-down-menu'

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
        <DropdownMenuAvatar />
      </div>
    </div>
  )
}

export default App
