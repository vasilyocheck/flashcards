import { NavLink } from 'react-router-dom'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { IconButton } from '@/components/ui/iconButton'
import { Column } from '@/components/ui/table/table.stories'
import { Typography } from '@/components/ui/typography'
import { DeckToDelete } from '@/pages/decks-page'

import s from './tableConstuctor/table.module.scss'

import { Table, TableBody, TableDataCell, TableRow } from './tableConstuctor'
import { TableHeader } from './tableHeader/tableHeader'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type ResponseItemType = {
  author: { id: string; name: string }
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

type TableType = {
  deleteDeck: (item: DeckToDelete) => void
  items: any
  onClickCallback?: (itemId: string) => void
  onSort?: (sort: Sort) => void
  sort?: Sort
  userId?: string
}

export const TableStory = ({
  deleteDeck,
  items,
  onClickCallback,
  onSort,
  sort,
  userId,
}: TableType) => {
  const columns: Array<Column> = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'author.name',
      title: 'Created by',
    },
    {
      key: 'icons',
      title: '',
    },
  ]
  const handleOnClick = (itemId: string) => {
    if (itemId && onClickCallback) {
      onClickCallback(itemId)
    }
  }

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {items.map((t: ResponseItemType) => {
          return (
            <TableRow key={t.id}>
              <TableDataCell>
                <Typography as={NavLink} className={s.tableDataContent} to={`/decks/${t.id}`}>
                  {t.cover && <img alt={'image'} className={s.tableImage} src={t.cover} />}
                  {t.name}
                </Typography>
              </TableDataCell>
              <TableDataCell>{t.cardsCount}</TableDataCell>
              <TableDataCell>{new Date(t.updated).toLocaleDateString('ru-RU')}</TableDataCell>
              <TableDataCell>{t.author.name}</TableDataCell>
              <TableDataCell>
                {t.cardsCount !== 0 && (
                  <IconButton
                    icon={
                      <NavLink to={`/card/${t.id}`}>
                        <PlayCircleIcon color={'white'} size={1.1} />
                      </NavLink>
                    }
                    onClick={() => handleOnClick(t.id)}
                    size={1.1}
                  ></IconButton>
                )}
                {t.author.id === userId ? (
                  <>
                    <IconButton icon={<EditIcon />} size={1.1}></IconButton>
                    <IconButton
                      icon={<DeleteIcon onClick={() => deleteDeck({ id: t.id, name: t.name })} />}
                      size={1.1}
                    ></IconButton>
                  </>
                ) : null}
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
