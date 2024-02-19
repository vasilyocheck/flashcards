import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { DeckToDelete } from '@/pages/decks-page'

import sModal from '@/components/ui/modal/modal.module.scss'

type Props = {
  isOpen: boolean
  item: DeckToDelete
  onOpenChange: (action: string) => void
}
export const ModalDeleteDeck = ({ isOpen, item, onOpenChange }: Props) => {
  const handleClose = () => {
    onOpenChange('cancel')
  }

  return (
    <Modal
      isDialogueTriggerShown={false}
      onOpenChange={handleClose}
      open={isOpen}
      title={'Delete Deck'}
      width={'542px'}
    >
      <div>Do you really want to remove {item?.name}?</div>
      <div className={sModal.buttons}>
        <Button onClick={() => onOpenChange('cancel')} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={() => onOpenChange('delete')}>Delete Deck</Button>
      </div>
    </Modal>
  )
}
