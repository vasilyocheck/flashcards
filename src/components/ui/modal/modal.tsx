import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  buttonClose?: boolean
  children?: any
  nameButton?: string
}

export const Modal = ({ buttonClose = true, children, nameButton = 'click' }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={s.Button}>{nameButton}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          {children}
          {buttonClose && (
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={s.IconButton}>
                <svg
                  fill={'none'}
                  height={'24'}
                  viewBox={'0 0 24 24'}
                  width={'24'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <g clipPath={'url(#clip0_5928_8175)'}>
                    <path
                      d={
                        'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
                      }
                      fill={'white'}
                    />
                  </g>
                  <defs>
                    <clipPath id={'clip0_5928_8175'}>
                      <rect fill={'white'} height={'24'} width={'24'} />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
