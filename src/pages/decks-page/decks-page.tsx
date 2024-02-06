import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { DeleteIcon } from '@/assets'
import { AddNewDeck } from '@/components/decks'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TableStory } from '@/components/ui/table'
import { Tabs } from '@/components/ui/tabs'
import { TabItem } from '@/components/ui/tabs/tabItem'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/hooks'
import { useMeQuery } from '@/services/services/app/auth.service'
import {
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxQuery,
} from '@/services/services/decks/decks.service'

import s from './decks-page.module.scss'

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DeckResponse = {
  items: Deck[]
  pagination: PaginationType
}

export interface Deck {
  author: DeckAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface DeckAuthor {
  id: string
  name: string
}

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

const defaultItemsPerPage = 7

export const DecksPage = () => {
  const { data: sliderRange, isLoading: isLoadingSliderRange } = useGetMinMaxQuery()

  const [currentPage, setCurrentPage] = useState(1)
  const [valuesMinMax, setValuesMinMax] = useState([0, 10])
  const [search, setSearch] = useState('')
  const [tabValue, setTabValue] = useState('All Cards')
  const [sort, setSort] = useState<Sort>(null)
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)
  const [userIdForTabs, setUserIdForTabs] = useState<string | undefined>(undefined)

  const sortedString = useMemo(() => {
    if (!sort) {
      return undefined
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const debouncedSearch = useDebounce<string>(search, 500)
  const debounceRangeMin = useDebounce<number>(valuesMinMax[0])
  const debounceRangeMax = useDebounce<number>(valuesMinMax[1])
  const { data } = useGetDecksQuery({
    authorId: userIdForTabs,
    currentPage,
    itemsPerPage,
    maxCardsCount: debounceRangeMax,
    minCardsCount: debounceRangeMin,
    name: debouncedSearch,
    orderBy: sortedString,
  })
  const { data: dataMe } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  const clearFilter = () => {
    setSearch('')
    setValuesMinMax([0, 61])
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value + '')
  }

  const onChangeCountItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
  }

  const onChangeTabsValue = (value: string) => {
    setTabValue(value)
  }

  const onChangeTabItemMyCards = () => {
    setUserIdForTabs(dataMe?.id)
  }

  const onChangeTabItemAllCards = () => {
    setUserIdForTabs(undefined)
  }

  const onChangePagination = (currentPageNum: number) => {
    setCurrentPage(currentPageNum)
  }

  const handleOnValueChange = (value: number[]) => {
    setValuesMinMax(value)
  }

  useEffect(() => {
    if (!isLoadingSliderRange) {
      setValuesMinMax([sliderRange.min, sliderRange.max])
    }
  }, [isLoadingSliderRange, sliderRange])

  if (!data) {
    return <div>...loading</div>
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant={'large'}>Decks list</Typography>
        <AddNewDeck />
      </div>
      <div className={s.options}>
        <TextField
          className={s.textField}
          onChange={onChangeInputValue}
          placeholder={'Input search'}
          type={'search'}
          value={search}
        />
        <Tabs
          className={s.tabs}
          label={'Show decks cards'}
          onValueChange={onChangeTabsValue}
          value={tabValue}
        >
          <TabItem onClick={onChangeTabItemMyCards} value={'My Cards'}>
            My cards
          </TabItem>
          <TabItem onClick={onChangeTabItemAllCards} value={'All Cards'}>
            All cards
          </TabItem>
        </Tabs>
        <Slider
          label={'Number of cards'}
          max={sliderRange?.max || 10}
          min={sliderRange?.min || 0}
          onValueChange={handleOnValueChange}
          step={1}
          value={valuesMinMax}
        />
        <Button className={'buttonDeleteTable'} onClick={clearFilter} variant={'secondary'}>
          <DeleteIcon size={1} />
          Clear Filter
        </Button>
      </div>
      <TableStory
        deleteDeck={deleteDeck}
        items={data.items}
        onSort={setSort}
        sort={sort}
        userId={dataMe?.id}
      />
      <div className={s.pagination}>
        <Pagination
          currentPage={currentPage}
          itemsCount={data.pagination.totalItems}
          itemsPerPage={defaultItemsPerPage}
          onItemsPerPageChange={onChangeCountItemsPerPage}
          onPageChange={onChangePagination}
        />
      </div>
    </div>
  )
}
