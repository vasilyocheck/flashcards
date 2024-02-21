import { ChangeEvent, useState } from 'react'

import { UploadImg } from '@/components/cards/edit-card/upload-img/upload-img'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textfield'
import { CardToEdit } from '@/pages/one-deck-page'
import { setCardToEdit } from '@/services/services/cards/cards-slice'
import { useAppDispatch } from '@/services/store'

import sModal from '@/components/ui/modal/modal.module.scss'

type Props = {
  cardToEdit: CardToEdit
  isOpen: boolean
}

export const ModalEditCard = ({ cardToEdit, isOpen }: Props) => {
  const dispatch = useAppDispatch()

  const [quest, setQuest] = useState(cardToEdit?.question)
  const [questImg, setQuestImg] = useState<File | string>(cardToEdit?.questionImg || '')
  const [questTextfieldError, setQuestTextFieldError] = useState('')
  const [answer, setAnswer] = useState(cardToEdit?.answer || '')
  const [answerImg, setAnswerImg] = useState<File | string>(cardToEdit?.answerImg || '')
  const [answerTextfieldError, setAnswerTextFieldError] = useState('')

  //const [updateCard] = useUpdateDeckMutation()
  const handleAnswerTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (answerTextfieldError && answer && answer.length > 3) {
      setAnswerTextFieldError('')
    }
    setAnswer(e.currentTarget.value)
  }
  const handleQuestTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (questTextfieldError && quest && quest.length > 3) {
      setQuestTextFieldError('')
    }
    setQuest(e.currentTarget.value)
  }

  const closeModal = () => {
    dispatch(setCardToEdit({ cardToEdit: null }))
    setQuest('')
    setQuestImg('')
    setAnswer('')
    setAnswerImg('')
  }

  const handleClose = () => {
    dispatch(setCardToEdit({ cardToEdit: null }))
  }

  const handleAddNewPack = () => {
    if (quest && quest.length <= 5) {
      setQuestTextFieldError('Your question shall be at least 5 characters')
    } else if (answer && answer.length <= 1) {
      setAnswerTextFieldError('Your answer shall be at least 1 character')
    } else {
      const requestBody = new FormData()

      requestBody.append('questionImg', questImg)
      requestBody.append('answerImg', answerImg)
      quest && requestBody.append('question', quest)
      answer && requestBody.append('answer', answer)

      console.log({ cardId: cardToEdit?.id, requestBody })

      closeModal()
    }
  }

  return (
    <Modal
      isDialogueTriggerShown={false}
      nameButton={'Update Card'}
      onOpenChange={handleClose}
      open={isOpen}
      title={'Update Card'}
      width={'542px'}
    >
      <div>Question:</div>
      <TextField
        errorMessage={questTextfieldError}
        key={'quest'}
        label={'Question?'}
        onChange={handleQuestTextFieldChange}
        value={quest}
      />

      <UploadImg cover={cardToEdit?.questionImg || ''} onUpload={setQuestImg} />

      <div>Answer:</div>
      <TextField
        errorMessage={answerTextfieldError}
        key={'answer'}
        label={'Answer?'}
        onChange={handleAnswerTextFieldChange}
        value={answer}
      />

      <UploadImg cover={cardToEdit?.answerImg || ''} onUpload={setAnswerImg} />

      <div className={sModal.buttons}>
        <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleAddNewPack}>Update Card</Button>
      </div>
    </Modal>
  )
}
