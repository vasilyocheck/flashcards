import { Arrow } from '@/components/ui/pagination/arrows/arrow'
import { pageSizeVariants } from '@/components/ui/pagination/data/page-size-variants'
import { PageButton } from '@/components/ui/pagination/page-button/page-button'
import { createPagesPool } from '@/components/ui/pagination/utils/utils'
import { SelectComponent } from '@/components/ui/select'

import s from './pagination.module.scss'

type PaginationProps = {
  choosePage: (currentPageNum: number) => void
  currentPage?: number
  itemsCount: number
  itemsPerPage?: number
  setItemsPerPage: (itemsPerPage: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const { choosePage, currentPage = 5, itemsCount, itemsPerPage = 10, setItemsPerPage } = props
  const handleChoosePage = (id: number) => {
    choosePage(id)
  }
  const handleChoosePageSize = (chosenPageSize: string) => {
    setItemsPerPage(Number(chosenPageSize))
  }
  const changePage = (direction: string) => {
    const newPageNum = direction === 'left' ? -1 : 1

    choosePage(newPageNum + currentPage)
  }
  const pagesCount = Math.ceil(itemsCount / itemsPerPage)
  const isPagesCountMinimum = pagesCount <= 7

  let pagesToShow

  if (isPagesCountMinimum) {
    const pagesPool = createPagesPool(1, pagesCount)

    pagesToShow = pagesPool.map(p => {
      return <PageButton choosePage={handleChoosePage} currentPage={currentPage} id={p} key={p} />
    })
  }
  if (!isPagesCountMinimum && currentPage <= 5) {
    const pagesPool = createPagesPool(1, 5)
    const start = pagesPool.map(p => (
      <PageButton choosePage={handleChoosePage} currentPage={currentPage} id={p} key={p} />
    ))
    const middle = <PageButton key={pagesCount + 1} />
    const end = (
      <PageButton
        choosePage={handleChoosePage}
        currentPage={currentPage}
        id={pagesCount}
        key={pagesCount}
      />
    )

    pagesToShow = [start, middle, end]
  }
  if (!isPagesCountMinimum && currentPage > pagesCount - 5) {
    const pagesPool = createPagesPool(pagesCount - 4, pagesCount)

    const start = (
      <PageButton choosePage={handleChoosePage} currentPage={currentPage} id={1} key={1} />
    )
    const middle = <PageButton key={pagesCount + 2} />
    const end = pagesPool.map(p => (
      <PageButton choosePage={handleChoosePage} currentPage={currentPage} id={p} key={p} />
    ))

    pagesToShow = [start, middle, end]
  }
  if (!isPagesCountMinimum && currentPage > 5 && currentPage < pagesCount - 4) {
    const el1 = (
      <PageButton choosePage={handleChoosePage} currentPage={currentPage} id={1} key={1} />
    )
    const el2 = <PageButton key={pagesCount + 1} />
    const el3 = (
      <PageButton
        choosePage={handleChoosePage}
        currentPage={currentPage}
        id={currentPage - 1}
        key={currentPage - 1}
      />
    )
    const el4 = (
      <PageButton
        choosePage={handleChoosePage}
        currentPage={currentPage}
        id={currentPage}
        key={currentPage}
      />
    )
    const el5 = (
      <PageButton
        choosePage={handleChoosePage}
        currentPage={currentPage}
        id={currentPage + 1}
        key={currentPage + 1}
      />
    )
    const el6 = <PageButton key={pagesCount + 2} />
    const el7 = (
      <PageButton
        choosePage={handleChoosePage}
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
        callback={() => changePage('left')}
        direction={'left'}
        disabled={isPagesCountMinimum || currentPage < 6}
        key={'left'}
      />
      <div className={s.pagingBody}>{pagesToShow}</div>
      <Arrow
        callback={() => changePage('right')}
        direction={'right'}
        disabled={isPagesCountMinimum || currentPage > pagesCount - 5}
        key={'right'}
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
