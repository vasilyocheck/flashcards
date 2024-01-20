import s from './page-button.module.scss'

type PageButtonProps = {
  currentPage?: number
  id?: number
  onClick?: (buttonId: number) => void
}

export const PageButton = (props: PageButtonProps) => {
  const { currentPage, id: id, onClick } = props
  const currentStyle =
    currentPage === id && id !== undefined ? s.bodyItem + ' ' + s.bodyItemActive : s.bodyItem
  const handleChoosePage = () => {
    if (onClick && id) {
      onClick(id)
    }
  }

  return (
    <button className={currentStyle} id={`${id}`} onClick={handleChoosePage}>
      {id || '...'}
    </button>
  )
}
