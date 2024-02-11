import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ResponseItemType } from '@/pages/one-deck-page/table-one-deck-page'
import { useDeleteCardMutation } from '@/services/services/cards/cards.service'

import sModal from '@/components/ui/modal/modal.module.scss'

type Props = {
  isOpen: boolean
  item: ResponseItemType
  onOpenChange: () => void
}
export const ModalDeleteCard = ({ isOpen, item, onOpenChange }: Props) => {
  const [deleteCard] = useDeleteCardMutation()

  function deleteCardHandler() {
    deleteCard({ id: item.id })
    onOpenChange()
  }

  return (
    <Modal
      isDialogueTriggerShown={false}
      onOpenChange={onOpenChange}
      open={isOpen}
      title={'Delete Card'}
      width={'542px'}
    >
      <div>Do you really want to remove {item.question}?</div>
      <div className={sModal.buttons}>
        <Button onClick={onOpenChange} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteCardHandler}>Delete Card</Button>
      </div>
    </Modal>
  )
}
