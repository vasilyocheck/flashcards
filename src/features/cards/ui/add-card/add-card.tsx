import { AddCardModal } from '@/features/cards'

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
