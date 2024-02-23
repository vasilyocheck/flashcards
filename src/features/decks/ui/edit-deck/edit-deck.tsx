import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'
import { useUpdateDeckMutation } from '@/features/decks'
import { UploadImg } from '@/features/decks/ui/edit-deck/upload-img/upload-img'
import { DeckToEdit } from '@/pages/decks-page'

import sModal from '@/components/ui/modal/modal.module.scss'

type Props = {
  deckCover: string
  deckId: string
  deckName: string
  isDeckPrivate: boolean
  isOpen: boolean
  setDeckToEdit: (deckToEdit: DeckToEdit) => void
}

export const ModalEditDeck = ({
  deckCover,
  deckId,
  deckName,
  isDeckPrivate,
  isOpen,
  setDeckToEdit,
}: Props) => {
  const [name, setName] = useState(deckName)
  const [isPrivate, setIsPrivate] = useState(isDeckPrivate)
  const [cover, setCover] = useState<File | string>(deckCover)
  const [textfieldError, setTextFieldError] = useState('')
  const [updateDeck] = useUpdateDeckMutation()

  const handleOnTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (textfieldError && name.length > 3) {
      setTextFieldError('')
    }
    setName(e.currentTarget.value)
  }

  const handleIsPrivateChange = () => {
    setIsPrivate(!isPrivate)
  }

  const closeModal = () => {
    setDeckToEdit(null)
    setName('')
    setIsPrivate(true)
    setCover('')
  }

  const handleClose = () => {
    setDeckToEdit(null)
  }

  const handleAddNewPack = () => {
    if (name.length <= 5) {
      setTextFieldError('Your deck name shall be at least 5 characters')
    } else {
      const requestBody = new FormData()

      requestBody.append('cover', cover)
      requestBody.append('name', name)
      requestBody.append('isPrivate', isPrivate.toString())

      updateDeck({ deckId, requestBody })
      closeModal()
    }
  }

  return (
    <Modal
      isDialogueTriggerShown={false}
      nameButton={'Update Deck'}
      onOpenChange={handleClose}
      open={isOpen}
      title={'Update Deck'}
      width={'542px'}
    >
      <TextField
        errorMessage={textfieldError}
        label={'Name Pack'}
        onChange={handleOnTextFieldChange}
        value={name}
      />

      <UploadImg deckCover={deckCover || ''} onUpload={setCover} />
      <div className={sModal.checkbox}>
        <Checkbox callback={handleIsPrivateChange} checked={isPrivate} label={'Private pack'} />
      </div>
      <div className={sModal.buttons}>
        <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleAddNewPack}>Update Pack</Button>
      </div>
    </Modal>
  )
}
