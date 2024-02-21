import { ComponentPropsWithoutRef } from 'react'
import { NavLink } from 'react-router-dom'

import { DeleteIcon, EditIcon, RatingEmptyIcon, RatingFilledIcon } from '@/assets'
import { IconButton } from '@/components/ui/iconButton'
import { Column } from '@/components/ui/table/table.stories'
import { Table, TableBody, TableDataCell, TableRow } from '@/components/ui/table/tableConstuctor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import { Typography } from '@/components/ui/typography'
import { CardToDelete, CardToEdit } from '@/pages/one-deck-page/one-deck-page'
import { setCardToEdit } from '@/services/services/cards/cards-slice'
import { useAppDispatch } from '@/services/store'

import s from './one-deck-page.module.scss'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type ResponseItemType = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: 0
  updated: string
  userId: string
}

type TableType = {
  items: any
  onClickCallback?: (itemId: string) => void
  onSort?: (sort: Sort) => void
  oppositeId: boolean
  setCardToDelete?: (cardToDelete: CardToDelete) => void
  sort?: Sort
  userId?: string
} & ComponentPropsWithoutRef<'table'>

export const TableOnePage = ({ items, onSort, oppositeId, setCardToDelete, sort }: TableType) => {
  const dispatch = useAppDispatch()
  const columns: Array<Column> = [
    {
      key: 'question',
      title: 'Question',
    },
    {
      key: 'answer',
      title: 'Answer',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'grade',
      title: 'Grade',
    },
    {
      key: 'icons',
      title: '',
    },
  ]

  const handleSetCardToDelete = (card: CardToDelete) => {
    if (setCardToDelete) {
      setCardToDelete(card)
    }
  }
  const handleSetCardToEdit = (card: CardToEdit) => {
    dispatch(setCardToEdit({ cardToEdit: card }))
  }

  return (
    <Table className={s.pagination}>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {items?.map((t: ResponseItemType) => {
          const grades = []

          for (let i = 0; i < t.grade; i++) {
            grades.push(<RatingFilledIcon className={s.grade} color={'#e5ac39'} size={1} />)
          }

          const emptyGrades = 5 - t.grade

          for (let j = 0; j < emptyGrades; j++) {
            grades.push(<RatingEmptyIcon className={s.grade} color={'#e5ac39'} size={1} />)
          }

          return (
            <TableRow key={t.id}>
              <TableDataCell>
                <Typography as={NavLink} className={s.tableDataContent} to={`/decks/${t.id}`}>
                  {t.questionImg && (
                    <img
                      alt={'image'}
                      className={s.tableImage}
                      height={50}
                      src={t.questionImg}
                      width={50}
                    />
                  )}
                  <span>{t.question}</span>
                </Typography>
              </TableDataCell>
              <TableDataCell>
                <div className={s.tableDataContent}>
                  {t.answerImg && (
                    <img
                      alt={'image'}
                      className={s.tableImage}
                      height={50}
                      src={t.answerImg}
                      width={50}
                    />
                  )}
                  <span>{t.answer}</span>
                </div>
              </TableDataCell>
              <TableDataCell>{new Date(t.updated).toLocaleDateString('ru-RU')}</TableDataCell>
              <TableDataCell>{grades}</TableDataCell>
              {oppositeId && (
                <TableDataCell className={s.allButtons}>
                  <IconButton
                    icon={
                      <EditIcon
                        onClick={() =>
                          handleSetCardToEdit({
                            answer: t.answer,
                            answerImg: t.answerImg,
                            id: t.id,
                            question: t.question,
                            questionImg: t.questionImg,
                          })
                        }
                      />
                    }
                    size={1.1}
                  ></IconButton>
                  <IconButton
                    icon={
                      <DeleteIcon
                        onClick={() => handleSetCardToDelete({ cardName: t.question, id: t.id })}
                      />
                    }
                    size={1.1}
                  ></IconButton>
                </TableDataCell>
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
