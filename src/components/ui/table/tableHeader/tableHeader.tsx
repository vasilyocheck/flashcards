import { ComponentPropsWithoutRef, FC } from 'react'

import { ArrowDownIcon } from '@/assets/icons/components/ArrowDownIcon'
import { IconButton } from '@/components/ui/iconButton'
import { Column, Sort } from '@/components/ui/table/table.stories'
import { TableHead, TableHeadCell, TableRow } from '@/components/ui/table/tableConstuctor'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '../tableConstuctor/table.module.scss'

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort?: Sort
    },
    'children'
  >
> = ({ columns, onSort, sort, ...rest }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }
  const classNames = {
    arrow: clsx(s.arrow, sort?.direction === 'asc' && s.arrowUp),
  }

  return (
    <TableHead {...rest}>
      <TableRow>
        {columns.map(({ key, sortable = true, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            <Typography className={s.tableHeadTitle} variant={'subtitle2'}>
              {title}{' '}
              {sort && sort.key === key && (
                <IconButton className={classNames.arrow} icon={<ArrowDownIcon />} size={1.1} />
              )}
            </Typography>
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
