import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { CardToDelete } from '@/pages/one-deck-page'

import sModal from '@/components/ui/modal/modal.module.scss'

type Props = {
  isOpen: boolean
  item: CardToDelete
  onOpenChange: (action: string) => void
}
export const ModalDeleteCard = ({ isOpen, item, onOpenChange }: Props) => {
  const handleClose = () => {
    onOpenChange('cancel')
  }

  return (
    <Modal
      isDialogueTriggerShown={false}
      onOpenChange={handleClose}
      open={isOpen}
      title={'Delete Card'}
      width={'542px'}
    >
      <div>Do you really want to remove {item?.cardName}?</div>
      <div className={sModal.buttons}>
        <Button onClick={() => onOpenChange('cancel')} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={() => onOpenChange('delete')}>Delete Card</Button>
      </div>
    </Modal>
  )
}
