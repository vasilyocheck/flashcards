import { ChangeEvent, useState } from 'react'

import { useAppDispatch } from '@/common/hooks'
import { Button, Modal, TextField } from '@/components'
import { setCardToEdit, useUpdateCardMutation } from '@/features/cards'
import { UploadImg } from '@/features/cards/ui/edit-card/upload-img/upload-img'
import { CardToEdit } from '@/pages/one-deck-page'

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

  const [updateCard] = useUpdateCardMutation()
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

      if (typeof questImg !== 'string') {
        requestBody.append('questionImg', questImg)
      }
      if (typeof answerImg !== 'string') {
        requestBody.append('answerImg', answerImg)
      }

      quest && requestBody.append('question', quest)
      answer && requestBody.append('answer', answer)

      if (cardToEdit) {
        updateCard({ cardId: cardToEdit.id, requestBody })
      }

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
