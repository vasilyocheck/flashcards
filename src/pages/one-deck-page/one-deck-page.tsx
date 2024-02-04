import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { ArrowBackIcon } from '@/assets'
import { IconWrapper } from '@/assets/icons/IconWrapper'
import { Typography } from '@/components/ui/typography'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/services/decks/decks.service'

type Card = {
  answer: string
  answerImg: any
  answerVideo: any
  created: Date
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: any
  questionVideo: any
  shots: number
  updated: string
  userId: string
}

export type DeckWithId = {
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

import s from './one-deck-page.module.scss'

export const OneDeckPage = () => {
  const { deckId } = useParams()
  const { data, isLoading } = useGetCardsQuery({ id: deckId })
  const { data: dataDeck, isLoading: isLoadingDeck } = useGetDeckQuery({ id: deckId })
  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState<DeckWithId>({} as DeckWithId)

  useEffect(() => {
    if (!isLoading) {
      setCards(data.items)
    }
    if (!isLoadingDeck) {
      if (dataDeck) {
        setDeck(dataDeck)
      }
    }
  }, [isLoading, isLoadingDeck])

  return (
    <div className={s.wrapper}>
      <NavLink className={s.backBtn} to={'/'}>
        <IconWrapper icon={<ArrowBackIcon color={'white'} size={1} />} size={1} />
        <Typography className={s.backToDeck} variant={'body1'}>
          Back to Decks List
        </Typography>
      </NavLink>
      <Typography className={s.deckName} variant={'large'}>
        {deck.name}
      </Typography>
      {deck.cardsCount === 0 ? (
        <div>нет карточек</div>
      ) : (
        <div>
          <ul>
            {cards.map((card: Card) => (
              <li key={card.id}>{card.answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
