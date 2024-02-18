import { ComponentPropsWithoutRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { DeleteIcon, EditIcon, RatingEmptyIcon, RatingFilledIcon } from '@/assets'
import { IconButton } from '@/components/ui/iconButton'
import { Column } from '@/components/ui/table/table.stories'
import { Table, TableBody, TableDataCell, TableRow } from '@/components/ui/table/tableConstuctor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import { Typography } from '@/components/ui/typography'
import { ModalDeleteCard } from '@/pages/one-deck-page/modal-delete-card/modal-delete-card'

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
  sort?: Sort
  userId?: string
} & ComponentPropsWithoutRef<'table'>

export const TableOnePage = ({ items, onSort, oppositeId, sort }: TableType) => {
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
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen)
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
                      src={t.answerImg}
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
                  <IconButton icon={<EditIcon />} size={1.1}></IconButton>
                  <IconButton
                    icon={<DeleteIcon onClick={handleSetIsOpen} />}
                    size={1.1}
                  ></IconButton>
                </TableDataCell>
              )}
              <ModalDeleteCard isOpen={isOpen} item={t} onOpenChange={handleSetIsOpen} />
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
