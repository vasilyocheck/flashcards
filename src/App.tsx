import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { DropdownMenuMain } from '@/components/ui/dropdownmenu/drop-down-menu'
import { DropdownMenuAvatar } from '@/components/ui/dropdownmenu/drop-down-menu-main'

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
        <DropdownMenuMain />
      </div>
    </div>
  )
}

export default App
