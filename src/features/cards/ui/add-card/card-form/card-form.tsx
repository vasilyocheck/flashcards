import { ReactNode, useState } from 'react'

import { formatMutationError } from '@/common'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { OptionType } from '@/features/cards'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import s from './card-form.module.scss'

import { CardFormField } from './card-form-field'
import { CardFormValuesType, useCardForm } from './use-add-form'
export type CardValues = {
  answer: string
  answerImg: null | string
  question: string
  questionImg: null | string
}

type Props = {
  buttonTitle?: string
  cardValues?: CardValues
  closeModal?: () => void
  error?: FetchBaseQueryError | SerializedError | undefined
  onSubmit: (data: FormData) => void
  options?: OptionType[]
  placeholder?: ReactNode
}

export const CardForm = ({
  buttonTitle,
  cardValues,
  closeModal,
  error,
  onSubmit,
} // options,
// placeholder,
: Props) => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  // use toast component for error
  const [questionCoverError, setQuestionCoverError] = useState<null | string>(null)
  const [answerCoverError, setAnswerCoverError] = useState<null | string>(null)

  console.log(questionCoverError, answerCoverError)

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
    watch,
  } = useCardForm({ answer: cardValues?.answer || '', question: cardValues?.question || '' })

  const questionFormat = watch('questionFormat')
  const questionError = errors.question?.message
  const answerFormat = watch('answerFormat')
  const answerError = errors.answer?.message

  if (questionError && questionFormat === 'picture') {
    setValue('questionFormat', 'text')
  }
  if (answerError && answerFormat === 'picture') {
    setValue('answerFormat', 'text')
  }

  const formatError = formatMutationError(error)

  if (formatError) {
    formatError.forEach(error => {
      const errorField = error.field as keyof CardFormValuesType

      !errors[errorField] &&
        setError(errorField, {
          message: error.message || undefined,
          type: 'custom',
        })
    })
  }

  const questionImageUrl = questionCover
    ? URL.createObjectURL(questionCover)
    : cardValues?.questionImg
  const answerImageUrl = answerCover ? URL.createObjectURL(answerCover) : cardValues?.questionImg

  const onSubmitHandler = (data: CardFormValuesType) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionCover && formData.append('questionImg', questionCover)
    answerCover && formData.append('answerImg', answerCover)
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const onLoadQuestionCover = (data: File) => {
    setQuestionCover(data)
    setQuestionCoverError(null)
  }
  const onLoadQuestionCoverError = (error: string) => {
    setQuestionCoverError(error)
  }
  const onLoadAnswerCover = (data: File) => {
    setAnswerCover(data)
    setAnswerCoverError(null)
  }

  const onLoadAnswerCoverError = (error: string) => {
    setAnswerCoverError(error)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.formContent}>
        <div className={s.contentBlock}>
          <Typography className={s.title} variant={'h3'}>
            Question:
          </Typography>
          <CardFormField
            control={control}
            dataFieldFormat={questionFormat}
            imageUrl={questionImageUrl}
            label={'Question'}
            name={'question'}
            onLoadCover={onLoadQuestionCover}
            onLoadError={onLoadQuestionCoverError}
          />
        </div>
        <div className={s.contentBlock}>
          <Typography className={s.title} variant={'h3'}>
            Answer:
          </Typography>
          <CardFormField
            control={control}
            dataFieldFormat={answerFormat}
            imageUrl={answerImageUrl}
            label={'Answer'}
            name={'answer'}
            onLoadCover={onLoadAnswerCover}
            onLoadError={onLoadAnswerCoverError}
          />
        </div>
      </div>

      <div className={s.actionBlock}>
        <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
          <Typography variant={'subtitle1'}>Cancel</Typography>
        </Button>
        <Button type={'submit'}>
          <Typography variant={'subtitle1'}>{buttonTitle}</Typography>
        </Button>
      </div>
    </form>
  )
}
