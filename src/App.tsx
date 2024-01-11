import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { Modal } from '@/components/ui/modal'

function App() {
  return (
    <div>
      <Modal nameButton={'click'}>
        <div>123</div>
        <div>Привет чел</div>
        <Button>click</Button>
      </Modal>
      <span>Hello</span>
      <Checkbox />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      ></div>
    </div>
  )
}

export default App
