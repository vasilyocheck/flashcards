import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Column } from '@/components/ui/table/table.stories'
// import { PlayIcon } from '@radix-ui/react-icons'

import s from './tableConstuctor/table.module.scss'

import { Table, TableBody, TableDataCell, TableRow } from './tableConstuctor'
import { TableHeader } from './tableHeader/tableHeader'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type TableType = {
  items: any
  onSort?: (sort: Sort) => void
  sort?: Sort
}

export const TableStory = ({ items, onSort, sort }: TableType) => {
  //   const options = [
  //     {
  //       cardsCount: 10,
  //       createdBy: 'John Doe',
  //       title: 'A',
  //       updated: '2023-07-07',
  //     },
  //     {
  //       cardsCount: 5,
  //       createdBy: 'Jane Smith',
  //       title: 'B',
  //       updated: '2023-07-06',
  //     },
  //     {
  //       cardsCount: 8,
  //       createdBy: 'Alice Johnson',
  //       title: 'C',
  //       updated: '2023-07-05',
  //     },
  //     {
  //       cardsCount: 3,
  //       createdBy: 'Bob Anderson',
  //       title: 'D',
  //       updated: '2023-07-07',
  //     },
  //     {
  //       cardsCount: 12,
  //       createdBy: 'Emma Davis',
  //       title: 'E',
  //       updated: '2023-07-04',
  //     },
  //     {
  //       cardsCount: 1,
  //       createdBy: '01',
  //       title: 'Books',
  //       updated: '2023-01-31T12:45:00.000Z',
  //     },
  //   ]
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
      key: 'author.name', // ЗДЕСЬ поправь
      title: 'Created by',
    },
    {
      key: 'icons',
      title: '',
    },
  ]

  console.log(items)

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
                <EditIcon size={1} />
                <DeleteIcon size={1} />
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
