import { ChangeEvent, useState } from 'react'

import { UploadImg } from '@/components/decks/upload-img/upload-img'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'
import { useAddDeckMutation } from '@/services/base-api'

import sModal from '@/components/ui/modal/modal.module.scss'

export const AddNewDeck = () => {
  const [addDeck] = useAddDeckMutation()
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [isPrivate, setIsPrivate] = useState(true)
  const [cover, setCover] = useState<File | string>('')
  const [textfieldError, setTextFieldError] = useState('')

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
    setIsOpen(false)
    setName('')
    setIsPrivate(true)
    setCover('')
  }

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  const handleAddNewPack = () => {
    if (name.length <= 5) {
      setTextFieldError('Your deck name shall be at least 5 characters')
    } else {
      const requestBody = new FormData()

      requestBody.append('cover', cover)
      requestBody.append('name', name)
      requestBody.append('isPrivate', isPrivate.toString())

      addDeck(requestBody)
      closeModal()
    }
  }

  return (
    <Modal
      nameButton={'Add New Deck'}
      onOpenChange={handleClose}
      open={isOpen}
      title={'Add New Deck'}
      width={'542px'}
    >
      <TextField
        errorMessage={textfieldError}
        label={'Name Pack'}
        onChange={handleOnTextFieldChange}
        value={name}
      />

      <UploadImg onUpload={setCover} />
      <div className={sModal.checkbox}>
        <Checkbox callback={handleIsPrivateChange} checked={isPrivate} label={'Private pack'} />
      </div>
      <div className={sModal.buttons}>
        <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleAddNewPack}>Add New Pack</Button>
      </div>
    </Modal>
  )
}
