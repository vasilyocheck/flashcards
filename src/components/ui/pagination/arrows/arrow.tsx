import s from './arrow.module.scss'

type ArrowProps = {
  callback: () => void
  direction: 'next' | 'prev'
  disabled: boolean
}
export const Arrow = ({ callback, direction, disabled }: ArrowProps) => {
  const arrowColor = disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'
  const arrowStyle = direction === 'prev' ? s.arrow : s.arrow + ' ' + s.rightArrow
  const handleCallback = () => {
    callback()
  }

  return (
    <button className={arrowStyle} disabled={disabled}>
      <svg
        fill={'none'}
        height={'16'}
        onClick={handleCallback}
        viewBox={'0 0 16 16'}
        width={'16'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#clip0_5928_3026)'} id={'keyboard_arrow_prev'}>
          <path
            d={
              'M10.2733 11.06L7.21998 8L10.2733 4.94L9.33331 4L5.33331 8L9.33331 12L10.2733 11.06Z'
            }
            fill={arrowColor}
            id={'Vector'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_5928_3026'}>
            <rect fill={'white'} height={'16'} width={'16'} />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
