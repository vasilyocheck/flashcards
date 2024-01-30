import { ChangeEvent, useState } from 'react'

import { ImageIcon } from '@/assets'
import { UploadImg } from '@/components/decks/upload-img/upload-img'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'
import { useAddDeckMutation } from '@/services/base-api'

import sModal from '@/components/ui/modal/modal.module.scss'

export const AddNewDeck = () => {
  const [addDeck] = useAddDeckMutation()
  const [name, setName] = useState('')
  const [isPrivate, setIsPrivate] = useState(true)
  const [cover, setCover] = useState(null)
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

  const handleAddNewPack = () => {
    if (name.length <= 5) {
      setTextFieldError('Your deck name shall be at least 5 characters')
    } else {
      addDeck({ cover, isPrivate, name })
    }
  }

  return (
    <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
      <TextField
        errorMessage={textfieldError}
        label={'Name Pack'}
        onChange={handleOnTextFieldChange}
        value={name}
      />
      {/*<Button className={'uploadButton'} fullWidth variant={'secondary'}>
        <ImageIcon size={1} />
        Upload Image
      </Button>*/}
      <UploadImg onUpload={setCover} />
      <div className={sModal.checkbox}>
        <Checkbox callback={handleIsPrivateChange} checked={isPrivate} label={'Private pack'} />
      </div>
      <div className={sModal.buttons}>
        <Button
          onClick={() => console.log('close window func')}
          type={'reset'}
          variant={'secondary'}
        >
          Cancel
        </Button>
        <Button onClick={handleAddNewPack}>Add New Pack</Button>
      </div>
    </Modal>
  )
}
