import s from './page-button.module.scss'

type PageButtonProps = {
  choosePage?: (buttonId: number) => void
  currentPage?: number
  id?: number
}

export const PageButton = (props: PageButtonProps) => {
  const { choosePage, currentPage, id: id } = props
  const currentStyle =
    currentPage === id && id !== undefined ? s.bodyItem + ' ' + s.bodyItemActive : s.bodyItem
  const handleChoosePage = () => {
    if (choosePage && id) {
      choosePage(id)
    }
  }

  return (
    <button className={currentStyle} id={`${id}`} onClick={handleChoosePage}>
      {id || '...'}
    </button>
  )
}
