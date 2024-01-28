import { Arrow } from '@/components/ui/pagination/arrows/arrow'
import { pageSizeVariants } from '@/components/ui/pagination/data/page-size-variants'
import { PageButton } from '@/components/ui/pagination/page-button/page-button'
import { createPagesPool } from '@/components/ui/pagination/utils/utils'
import { SelectComponent } from '@/components/ui/select'
import { v1 } from 'uuid'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage?: number
  itemsCount: number
  itemsPerPage?: number
  onItemsPerPageChange: (itemsPerPage: number) => void
  onPageChange: (currentPageNum: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const {
    currentPage = 1,
    itemsCount,
    itemsPerPage = 10,
    onItemsPerPageChange,
    onPageChange,
  } = props

  const handleChoosePageSize = (chosenPageSize: string) => {
    onItemsPerPageChange(Number(chosenPageSize))
  }
  const changePage = (direction: string) => {
    const newPageNum = direction === 'prev' ? -1 : 1

    onPageChange(newPageNum + currentPage)
  }
  const pagesCount = Math.ceil(itemsCount / itemsPerPage)
  const outOfRange = -1
  const minPageNum = 1
  const maxPageNum = 5
  const minPageCount = 7
  const numToSwitchView = 4
  const lastFivePagesStart = pagesCount - 4
  const isPagesCountMinimum = pagesCount <= minPageCount
  const contentToRender = []

  if (isPagesCountMinimum) {
    createPagesPool(minPageNum, pagesCount).map(p => contentToRender.push(p))
  }
  if (!isPagesCountMinimum && currentPage <= maxPageNum) {
    createPagesPool(minPageNum, maxPageNum).map(p => contentToRender.push(p))
    contentToRender.push(outOfRange)
    contentToRender.push(pagesCount)
  }
  if (!isPagesCountMinimum && currentPage > numToSwitchView && currentPage <= lastFivePagesStart) {
    contentToRender[0] = minPageNum
    contentToRender[1] = outOfRange
    contentToRender[2] = currentPage - 1
    contentToRender[3] = currentPage
    contentToRender[4] = currentPage + 1
    contentToRender[5] = outOfRange
    contentToRender[6] = pagesCount
  }
  if (!isPagesCountMinimum && currentPage > maxPageNum && currentPage > lastFivePagesStart) {
    contentToRender[0] = minPageNum
    contentToRender[1] = outOfRange
    createPagesPool(lastFivePagesStart, pagesCount).map(p => contentToRender.push(p))
  }

  const pagesToShow = contentToRender.map(item => {
    const uniqueId = v1()

    return item > 0 ? (
      <PageButton currentPage={currentPage} id={item} key={uniqueId} onClick={onPageChange} />
    ) : (
      <PageButton key={uniqueId} />
    )
  })

  return (
    <div className={s.wrapper}>
      <Arrow
        callback={() => changePage('prev')}
        direction={'prev'}
        disabled={currentPage === minPageNum}
        key={'prev'}
      />
      <div className={s.pagingBody}>{pagesToShow}</div>
      <Arrow
        callback={() => changePage('next')}
        direction={'next'}
        disabled={currentPage === pagesCount}
        key={'next'}
      />
      <span className={s.showPageSize}>
        Показать{' '}
        <SelectComponent
          array={pageSizeVariants}
          callback={handleChoosePageSize}
          className={s.selectOption}
          value={`${itemsPerPage}`}
        />{' '}
        на странице
      </span>
    </div>
  )
}
