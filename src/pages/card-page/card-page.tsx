import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { ArrowBackIcon } from '@/assets'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { Button, Card, IconButton, RadioGroupComponent } from '@/components'
import {
  setAnswerValue,
  setIsAnswerShown,
  useGetRandomCardQuery,
  useSaveCardMutation,
} from '@/features/cards'
import { ArgsGrade } from '@/features/cards/types'
import { useGetDeckByIdQuery } from '@/features/decks'
import {
  AssessValue,
  assessOptions,
} from '@/pages/card-page/assess-answer-options/assess-answer-options'

import s from './card-page.module.scss'

export const CardPage = () => {
  const dispatch = useAppDispatch()
  const isAnswerShown = useAppSelector(state => state.cards.isAnswerShown)
  const answerValue = useAppSelector(state => state.cards.answerValue)
  const handleSetAnswerValue = (answerValue: AssessValue) => {
    dispatch(setAnswerValue({ answerValue: answerValue }))
  }

  const params = useParams()

  const { data, refetch } = useGetRandomCardQuery({
    cardId: params.cardId || 'no-card-found',
  })
  const { data: deckData } = useGetDeckByIdQuery({ deckId: params.cardId || 'no-deck-found' })
  const [saveCard] = useSaveCardMutation()

  const [isToMain, setIsToMain] = useState(false)
  const answerOptions = assessOptions.map(o => o.value)
  const handleOnClickBack = () => {
    setIsToMain(true)
  }

  const handleOnClickShowAnswer = () => {
    dispatch(setIsAnswerShown({ isAnswerShown: true }))
  }

  const handleOnNextQuestionClick = () => {
    const assessment = assessOptions.filter(g => g.value === answerValue)[0]

    if (!data) {
      return
    }
    const body: ArgsGrade = { cardId: data.id, grade: assessment.grade }

    saveCard(body)
      .then(() => refetch())
      .then(() => {
        dispatch(setIsAnswerShown({ isAnswerShown: false }))
        dispatch(setAnswerValue({ answerValue: 'Did not know' }))
      })
  }

  return isToMain ? (
    <Navigate to={'/'} />
  ) : (
    <div className={s.wrapper}>
      <div className={s.backTo} onClick={handleOnClickBack}>
        <IconButton icon={<ArrowBackIcon />} size={1.1} />
        <div>Back to Decks List</div>
      </div>
      <div className={s.cardWrapper}>
        {data && deckData ? (
          <Card>
            <div className={s.title}>Learn &#34;{deckData.name}&rdquo;</div>
            <div className={s.question}>
              <b>Question:</b> {data.question}
            </div>
            {data.questionImg && (
              <div className={s.pic}>
                <img alt={'question image'} src={data.questionImg} />
              </div>
            )}
            <div className={s.tries}>
              Quantity (attempts to answer the question): <b>{data.shots}</b>
            </div>
            {!isAnswerShown ? (
              <Button onClick={handleOnClickShowAnswer}>Show Answer</Button>
            ) : (
              <div>
                <div className={s.answer}>
                  <b>Answer:</b> {data.answer}
                </div>
                {data.answerImg && (
                  <div className={s.pic}>
                    <img alt={'question image'} src={data.answerImg} />
                  </div>
                )}
                <div className={s.radio}>
                  <RadioGroupComponent
                    array={answerOptions}
                    defaultValue={answerValue}
                    onValueChange={handleSetAnswerValue}
                  />
                </div>
                <Button fullWidth onClick={handleOnNextQuestionClick}>
                  Next Quesion
                </Button>
              </div>
            )}
          </Card>
        ) : (
          <div>...loading</div>
        )}
      </div>
    </div>
  )
}
