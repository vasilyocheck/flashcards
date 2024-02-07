import { AddCardModal } from '@/services/services/cards/add-card/add-card-modal'

export const AddCard = () => {
  return (
    <AddCardModal
      options={[
        { title: 'Text', value: 'text' },
        { title: 'Picture', value: 'picture' },
      ]}
      placeholder={'Data format type'}
    />
  )
}
