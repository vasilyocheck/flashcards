import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Column } from '@/components/ui/table/table.stories'

import s from './tableConstuctor/table.module.scss'

import { Table, TableBody, TableDataCell, TableRow } from './tableConstuctor'
import { TableHeader } from './tableHeader/tableHeader'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type DeleteDeckType = {
  id: string
}

type TableType = {
  deleteDeck: ({ id }: DeleteDeckType) => void
  items: any
  onSort?: (sort: Sort) => void
  sort?: Sort
  userId?: string
}

export const TableStory = ({ deleteDeck, items, onSort, sort, userId }: TableType) => {
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

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {items.map((t: any) => {
          return (
            <TableRow key={t.id}>
              <TableDataCell>
                <span className={s.tableDataContent}>
                  {t.cover && <img alt={'image'} className={s.tableImage} src={t.cover} />}
                  {t.name}
                </span>
              </TableDataCell>
              <TableDataCell>{t.cardsCount}</TableDataCell>
              <TableDataCell>{new Date(t.updated).toLocaleDateString('ru-RU')}</TableDataCell>
              <TableDataCell>{t.author.name}</TableDataCell>
              <TableDataCell>
                <PlayCircleIcon size={1} />
                {t.author.id === userId ? (
                  <>
                    <EditIcon size={1} />
                    <DeleteIcon onClick={() => deleteDeck({ id: t.id })} size={1} />
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
