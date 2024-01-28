import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'

import sModal from '@/components/ui/modal/modal.module.scss'

export const AddNewDeck = () => {
  return (
    <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
      <TextField label={'Name Pack'} name={'123'}></TextField>
      <Button className={'uploadButton'} fullWidth variant={'secondary'}>
        <ImageIcon size={1} />
        Upload Image
      </Button>
      <div className={sModal.checkbox}>
        <Checkbox label={'Private pack'} />
      </div>
      <div className={sModal.buttons}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button>Add New Pack</Button>
      </div>
    </Modal>
  )
}
