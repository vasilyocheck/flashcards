import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { ArrowBackIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { IconButton } from '@/components/ui/iconButton'
import { RadioGroupComponent } from '@/components/ui/radio'
import { assessOptions } from '@/pages/card-page/assess-answer-options/assess-answer-options'

import s from './card-page.module.scss'

import sampleImg2 from './img/candy.jpg'
import sampleAnswer from './img/redux-cool.png'

export const CardPage = () => {
  const [isToMain, setIsToMain] = useState(false)
  const [imageQuest] = useState(sampleImg2)
  const [deckName] = useState('Deck Name')
  const [question] = useState('How this works in Javascript?')
  const [attempts] = useState(10)
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [answer] = useState('This is how this works in JS')
  const [imageAnswer] = useState(sampleAnswer)
  const answerOptions = assessOptions.map(o => o.value)
  const [answerValue, setAnswerValue] = useState<string>(answerOptions[0])
  const handleOnClickBack = () => {
    setIsToMain(true)
  }

  const handleOnClickShowAnswer = () => setIsAnswerShown(true)

  console.log(answerValue)

  return isToMain ? (
    <Navigate to={'/'} />
  ) : (
    <div className={s.wrapper}>
      <div className={s.backTo} onClick={handleOnClickBack}>
        <IconButton icon={<ArrowBackIcon />} size={1.1} />
        <div>Back to Decks List</div>
      </div>
      <div className={s.cardWrapper}>
        <Card>
          <div className={s.title}>Learn &#34;{deckName}&rdquo;</div>
          <div className={s.question}>
            <b>Question:</b> {question}
          </div>
          {imageQuest && (
            <div className={s.pic}>
              <img alt={'question image'} src={imageQuest} />
            </div>
          )}
          <div className={s.tries}>
            Quantity (attempts to answer the question): <b>{attempts}</b>
          </div>
          {!isAnswerShown ? (
            <Button onClick={handleOnClickShowAnswer}>Show Answer</Button>
          ) : (
            <div>
              <div className={s.answer}>
                <b>Answer:</b> {answer}
              </div>
              {imageAnswer && (
                <div className={s.pic}>
                  <img alt={'question image'} src={imageAnswer} />
                </div>
              )}
              <div className={s.radio}>
                <RadioGroupComponent
                  array={answerOptions}
                  defaultValue={answerValue}
                  onValueChange={setAnswerValue}
                />
              </div>
              <Button fullWidth>Next Quesion</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
