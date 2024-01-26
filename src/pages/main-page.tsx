import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DeleteIcon, ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Header } from '@/components/ui/header'
import { Modal } from '@/components/ui/modal'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { SliderWithHooks } from '@/components/ui/slider/slider.stories'
import { TableStory } from '@/components/ui/table'
import { Tabs } from '@/components/ui/tabs'
import { TabItem } from '@/components/ui/tabs/tabItem'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/hooks'
import { useGetDecksQuery } from '@/services/base-api'

import sModal from '../components/ui/modal/modal.module.scss'
import s from './main-page.module.scss'

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

export const MainPage = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  // const [min, setMin] = useState(0)
  // const [max, setMax] = useState(10)
  const [valuesMinMax, setValuesMinMax] = useState([0, 10])
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce<string>(search, 500)
  const { data } = useGetDecksQuery({ currentPage, name: debouncedSearch })

  const clearFilter = () => {
    setSearch('')
  }

  const handleOnValueChange = () => {}

  useEffect(() => {}, [currentPage])

  if (!data) {
    return <div>...loading</div>
  }

  console.log(valuesMinMax)

  return (
    <div className={s.wrapper}>
      <Header callabck={() => navigate('/login')} />
      <div className={s.title}>
        <Typography variant={'large'}>Decks list</Typography>
        <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
          <TextField label={'Name Pack'} name={'123'}></TextField>
          <Button className={'uploadButton'} fullWidth variant={'secondary'}>
            <ImageIcon style={{ height: '16px', width: '16px' }} />
            Upload Image
          </Button>
          <div className={sModal.checkbox}>
            <Checkbox label={'Private pack'} />
          </div>
          <div className={sModal.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button>Add New Pack</Button>
          </div>
        </Modal>
      </div>
      <div className={s.options}>
        <TextField
          onChange={(e: any) => setSearch(e.currentTarget.value + '')}
          placeholder={'Input search'}
          style={{ width: '300px' }}
          type={'search'}
          value={search}
        />
        {/*<ControlledTextField placeholder={'Input search'} style={{ width: '300px' }} type={'search'} />*/}
        <Tabs label={'Show decks cards'} style={{ width: '230px' }}>
          <TabItem value={'1'}>My cards</TabItem>
          <TabItem value={'2'}>All cards</TabItem>
        </Tabs>
        {/*<SliderWithHooks label={'Number of cards'} max={10} min={0} step={1} value={[min, max]} />*/}
        <Slider
          label={'Number of cards'}
          onValueChange={handleOnValueChange}
          value={valuesMinMax}
        />
        <Button className={'buttonDeleteTable'} onClick={clearFilter} variant={'secondary'}>
          <DeleteIcon style={{ height: '16px', width: '16px' }} />
          Clear Filter
        </Button>
      </div>
      <TableStory items={data.items} />
      <div className={s.pagination}>
        <Pagination
          currentPage={currentPage}
          itemsCount={data.pagination.totalItems}
          onItemsPerPageChange={() => {}}
          onPageChange={currentPageNum => {
            setCurrentPage(currentPageNum)
          }}
        />
      </div>
    </div>
  )
}
