import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { ArrowBackIcon, ImageIcon } from '@/assets'
import { IconWrapper } from '@/assets/icons/IconWrapper'
import { Typography } from '@/components/ui/typography'

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

import { Button } from '@/components/ui/button'
// import { useAppSelector } from '@/services/store'

import { Modal } from '@/components/ui/modal'
import image from '@/components/ui/modal/img/example-image.png'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/textfield'
import { TableOnePage } from '@/pages/one-deck-page/table-one-deck-page'
import { useMeQuery } from '@/services/services/auth/auth.service'
import { useGetCardsQuery } from '@/services/services/cards/cards.service'
import { useGetDeckQuery } from '@/services/services/decks/decks.service'

import s from './one-deck-page.module.scss'

const defaultItemsPerPage = 7

export const OneDeckPage = () => {
  const { deckId } = useParams()
  const { data: userId, isLoading: isLoadingMe } = useMeQuery()
  const { data, isLoading } = useGetCardsQuery({ id: deckId })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)
  // const userId = useAppSelector(state => state.app.userId)
  const { data: dataDeck, isLoading: isLoadingDeck } = useGetDeckQuery({ id: deckId })
  const [cards, setCards] = useState([])
  const [myId, setMyId] = useState('1')
  const [deck, setDeck] = useState<DeckWithId>({} as DeckWithId)

  console.log(itemsPerPage)

  const onChangeCountItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
  }

  const onChangePagination = (currentPageNum: number) => {
    setCurrentPage(currentPageNum)
  }

  useEffect(() => {
    if (!isLoading) {
      setCards(data.items)
    }
    if (!isLoadingMe) {
      setMyId(userId.id)
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
      {deck.cardsCount === 0 ? (
        <div>
          <Typography className={s.deckName} variant={'large'}>
            {deck.name}
          </Typography>
          <Typography className={s.text} variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          {deck.userId === myId ? (
            <div className={s.button}>
              {/*Кнопка Add New Card*/}
              <Modal nameButton={'Add New Card'} title={'Add New Card'} width={'532px'}>
                <Typography className={s.textQuestion} variant={'body2'}>
                  Question:
                </Typography>
                <TextField label={'Question?'} name={'123'}></TextField>
                <img alt={'picture'} src={image} />
                <Button className={'uploadButton'} variant={'secondary'}>
                  <ImageIcon style={{ height: '16px', width: '16px' }} />
                  Change Image
                </Button>
                <Typography className={s.textQuestion} variant={'body2'}>
                  Answer:
                </Typography>
                <TextField label={'Answer'} name={'123'}></TextField>
                <img alt={'picture'} src={image} />
                <Button className={'uploadButton'} variant={'secondary'}>
                  <ImageIcon style={{ height: '16px', width: '16px' }} />
                  Change Image
                </Button>
                <div className={s.buttons}>
                  <Button variant={'secondary'}>Cancel</Button>
                  <Button>Add New Card</Button>
                </div>
              </Modal>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <div className={s.title}>
            <Typography className={s.deckName} variant={'large'}>
              {deck.name}
            </Typography>
            {deck.userId === myId ? (
              <Modal nameButton={'Add New Card'} title={'Add New Card'} width={'532px'}>
                <Typography className={s.textQuestion} variant={'body2'}>
                  Question:
                </Typography>
                <TextField label={'Question?'} name={'123'}></TextField>
                <img alt={'picture'} src={image} />
                <Button className={'uploadButton'} variant={'secondary'}>
                  <ImageIcon style={{ height: '16px', width: '16px' }} />
                  Change Image
                </Button>
                <Typography className={s.textQuestion} variant={'body2'}>
                  Answer:
                </Typography>
                <TextField label={'Answer'} name={'123'}></TextField>
                <img alt={'picture'} src={image} />
                <Button className={'uploadButton'} variant={'secondary'}>
                  <ImageIcon style={{ height: '16px', width: '16px' }} />
                  Change Image
                </Button>
                <div className={s.buttons}>
                  <Button variant={'secondary'}>Cancel</Button>
                  <Button>Add New Card</Button>
                </div>
              </Modal>
            ) : (
              <Button>Learn to Pack</Button>
            )}
          </div>
          <div>
            <TextField className={s.textField} placeholder={'Input search'} type={'search'} />
            <TableOnePage deleteDeck={() => {}} items={cards} />
            <Pagination
              currentPage={currentPage}
              // itemsCount={data.pagination.totalItems}
              itemsCount={10} // хард код
              itemsPerPage={defaultItemsPerPage}
              onItemsPerPageChange={onChangeCountItemsPerPage}
              onPageChange={onChangePagination}
            />
          </div>
        </div>
      )}
    </div>
  )
}
