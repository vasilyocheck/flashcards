import { DeleteIcon, EditIcon } from '@/assets'
import defaultAvatar from '@/assets/images/defaultAvatar/defaultAvatar.png'
import { useHandleSort } from '@/components/ui/table/utils/useHandleSort'
import { PlayIcon } from '@radix-ui/react-icons'

import s from './tableConstuctor/table.module.scss'

import { Table, TableBody, TableDataCell, TableRow } from './tableConstuctor'
import { TableHeader } from './tableHeader/tableHeader'

export const TableStory = () => {
  const options = [
    {
      cardsCount: 10,
      createdBy: 'John Doe',
      title: 'A',
      updated: '2023-07-07',
    },
    {
      cardsCount: 5,
      createdBy: 'Jane Smith',
      title: 'B',
      updated: '2023-07-06',
    },
    {
      cardsCount: 8,
      createdBy: 'Alice Johnson',
      title: 'C',
      updated: '2023-07-05',
    },
    {
      cardsCount: 3,
      createdBy: 'Bob Anderson',
      title: 'D',
      updated: '2023-07-07',
    },
    {
      cardsCount: 12,
      createdBy: 'Emma Davis',
      title: 'E',
      updated: '2023-07-04',
    },
    {
      cardsCount: 1,
      createdBy: '01',
      image: defaultAvatar,
      title: 'Books',
      updated: '2023-01-31T12:45:00.000Z',
    },
  ]

  const { columns, setSort, sort, sortHandler } = useHandleSort(options)

  return (
    <Table>
      <TableHeader columns={columns} onClick={sortHandler} onSort={setSort} sort={sort} />
      <TableBody>
        {sortHandler().map(t => {
          return (
            <TableRow key={t.title}>
              <TableDataCell>
                <span className={s.tableDataContent}>
                  {t.image && <img alt={'image'} className={s.tableImage} src={t.image} />}
                  {t.title}
                </span>
              </TableDataCell>
              <TableDataCell>{t.cardsCount}</TableDataCell>
              <TableDataCell>{t.updated}</TableDataCell>
              <TableDataCell>{t.createdBy}</TableDataCell>
              <TableDataCell>
                <PlayIcon />
                <EditIcon />
                <DeleteIcon />
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
