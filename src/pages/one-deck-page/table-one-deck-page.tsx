import { ComponentPropsWithoutRef } from 'react'
import { NavLink } from 'react-router-dom'

import { DeleteIcon, EditIcon } from '@/assets'
import { IconButton } from '@/components/ui/iconButton'
import { Column } from '@/components/ui/table/table.stories'
import { Table, TableBody, TableDataCell, TableRow } from '@/components/ui/table/tableConstuctor'
import { TableHeader } from '@/components/ui/table/tableHeader/tableHeader'
import { Typography } from '@/components/ui/typography'

import s from './one-deck-page.module.scss'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type DeleteDeckType = {
  id: string
}

type ResponseItemType = {
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
  deleteDeck: ({ id }: DeleteDeckType) => void
  items: any
  onClickCallback?: (itemId: string) => void
  onSort?: (sort: Sort) => void
  sort?: Sort
  userId?: string
} & ComponentPropsWithoutRef<'table'>

export const TableOnePage = ({
  deleteDeck,
  items,
  // onClickCallback,
  onSort,
  sort, // userId,
}: TableType) => {
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
  // const handleOnClick = (itemId: string) => {
  //   if (itemId && onClickCallback) {
  //     onClickCallback(itemId)
  //   }
  // }

  return (
    <Table className={s.pagination}>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {items.map((t: ResponseItemType) => {
          return (
            <TableRow key={t.id}>
              <TableDataCell>
                <Typography as={NavLink} className={s.tableDataContent} to={`/decks/${t.id}`}>
                  {/*{t.cover && <img alt={'image'} className={s.tableImage} src={t.cover} />}*/}
                  {t.question}
                </Typography>
              </TableDataCell>
              <TableDataCell>{t.answer}</TableDataCell>
              <TableDataCell>{new Date(t.updated).toLocaleDateString('ru-RU')}</TableDataCell>
              <TableDataCell>{t.grade}</TableDataCell>
              <TableDataCell>
                <>
                  <IconButton icon={<EditIcon />} size={1.1}></IconButton>
                  <IconButton
                    icon={<DeleteIcon onClick={() => deleteDeck({ id: t.id })} />}
                    size={1.1}
                  ></IconButton>
                </>
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
