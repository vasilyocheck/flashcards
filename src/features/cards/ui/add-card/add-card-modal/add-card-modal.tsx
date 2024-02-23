import { ReactNode, useState } from 'react'
import { useParams } from 'react-router-dom'

import { mutationNotificationHandler } from '@/common'
import { Modal } from '@/components/ui/modal'
import { CardForm, useCreateCardMutation } from '@/features/cards'

export type OptionType = {
  title: string
  value: string
}

type Props = {
  options?: OptionType[]
  placeholder?: ReactNode
}
export const AddCardModal = ({ options, placeholder }: Props) => {
  const { deckId = '' } = useParams<{ deckId: string }>()
  const [isOpen, setIsOpen] = useState(false)
  const [createCard, { error }] = useCreateCardMutation()

  const onSubmit = (body: FormData) => {
    mutationNotificationHandler(createCard({ body, deckId }), true).then(data => {
      if (data?.status === 'success') {
        closeModal()
      }
    })
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      nameButton={'Add New Card'}
      onOpenChange={setIsOpen}
      open={isOpen}
      title={'Add New Card'}
      width={'500px'}
    >
      <CardForm
        buttonTitle={'Add New Card'}
        closeModal={closeModal}
        error={error}
        onSubmit={onSubmit}
        options={options}
        placeholder={placeholder}
      />
    </Modal>
  )
}
