import { ChangeEvent, EventHandler, useState } from 'react'

import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'
import { useAddDeckMutation } from '@/services/base-api'

import sModal from '@/components/ui/modal/modal.module.scss'

export const AddNewDeck = () => {
  const [addDeck] = useAddDeckMutation()
  const [name, setName] = useState('')
  const [textfieldError, setTextFieldError] = useState('')

  const handleOnTextfieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (textfieldError && name.length > 4) {
      setTextFieldError('')
    }
    setName(e.currentTarget.value)
  }

  const handleAddNewPack = () => {
    if (name.length < 5) {
      setTextFieldError('Your deck name shall be at least 5 characters')
    } else {
      console.log({ name })
    }
  }

  return (
    <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
      <TextField
        errorMessage={textfieldError}
        label={'Name Pack'}
        onChange={handleOnTextfieldChange}
        value={name}
      />
      <Button className={'uploadButton'} fullWidth variant={'secondary'}>
        <ImageIcon size={1} />
        Upload Image
      </Button>
      <div className={sModal.checkbox}>
        <Checkbox label={'Private pack'} />
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
