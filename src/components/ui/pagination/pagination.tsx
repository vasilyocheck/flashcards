import { Arrow } from '@/components/ui/pagination/arrows/arrow'
import { pageSizeVariants } from '@/components/ui/pagination/data/page-size-variants'
import { PageButton } from '@/components/ui/pagination/page-button/page-button'
import { createPagesPool } from '@/components/ui/pagination/utils/utils'
import { SelectComponent } from '@/components/ui/select'

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
  const minPageNum = 1
  const isPagesCountMinimum = pagesCount <= 7
  const contentToRender = []

  let pagesToShow

  if (isPagesCountMinimum) {
    for (let i = minPageNum; i <= pagesCount; i++) {
      contentToRender.push(i)
    }

    const pagesPool = createPagesPool(minPageNum, pagesCount)

    pagesToShow = pagesPool.map(p => {
      return <PageButton choosePage={onPageChange} currentPage={currentPage} id={p} key={p} />
    })
  }
  if (!isPagesCountMinimum && currentPage <= 5) {
    const pagesPool = createPagesPool(minPageNum, 5)
    const start = pagesPool.map(p => (
      <PageButton choosePage={onPageChange} currentPage={currentPage} id={p} key={p} />
    ))
    const middle = <PageButton key={pagesCount + 1} />
    const end = (
      <PageButton
        choosePage={onPageChange}
        currentPage={currentPage}
        id={pagesCount}
        key={pagesCount}
      />
    )

    pagesToShow = [start, middle, end]
  }
  if (!isPagesCountMinimum && currentPage > pagesCount - 5) {
    const pagesPool = createPagesPool(pagesCount - 4, pagesCount)

    const start = <PageButton choosePage={onPageChange} currentPage={currentPage} id={1} key={1} />
    const middle = <PageButton key={pagesCount + 2} />
    const end = pagesPool.map(p => (
      <PageButton choosePage={onPageChange} currentPage={currentPage} id={p} key={p} />
    ))

    pagesToShow = [start, middle, end]
  }
  if (!isPagesCountMinimum && currentPage > 5 && currentPage < pagesCount - 4) {
    const el1 = <PageButton choosePage={onPageChange} currentPage={currentPage} id={1} key={1} />
    const el2 = <PageButton key={pagesCount + 1} />
    const el3 = (
      <PageButton
        choosePage={onPageChange}
        currentPage={currentPage}
        id={currentPage - 1}
        key={currentPage - 1}
      />
    )
    const el4 = (
      <PageButton
        choosePage={onPageChange}
        currentPage={currentPage}
        id={currentPage}
        key={currentPage}
      />
    )
    const el5 = (
      <PageButton
        choosePage={onPageChange}
        currentPage={currentPage}
        id={currentPage + 1}
        key={currentPage + 1}
      />
    )
    const el6 = <PageButton key={pagesCount + 2} />
    const el7 = (
      <PageButton
        choosePage={onPageChange}
        currentPage={currentPage}
        id={pagesCount}
        key={pagesCount}
      />
    )

    pagesToShow = [el1, el2, el3, el4, el5, el6, el7]
  }

  return (
    <div className={s.wrapper}>
      <Arrow
        callback={() => changePage('prev')}
        direction={'prev'}
        disabled={isPagesCountMinimum || currentPage < 6}
        key={'prev'}
      />
      <div className={s.pagingBody}>{pagesToShow}</div>
      <Arrow
        callback={() => changePage('next')}
        direction={'next'}
        disabled={isPagesCountMinimum || currentPage > pagesCount - 5}
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
      </span>{' '}
    </div>
  )
}
