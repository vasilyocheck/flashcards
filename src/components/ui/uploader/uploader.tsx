import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, useRef } from 'react'

import { Typography } from '@/components/ui/typography'
import cn from 'classnames'
import { ZodError } from 'zod'

import s from './uploader.module.scss'

import { UploaderPayload, uploaderSchema } from './uploaderSchema'

type Props = {
  children: ReactNode
  onLoadCover: (file: UploaderPayload) => void
  onLoadError: (error: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Uploader = ({
  children,
  className,
  onLoadCover,
  onLoadError,
  ...restProps
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
  }
  const uploaderClassName = cn(s.uploader, className)

  return (
    <Typography
      as={'label'}
      className={uploaderClassName}
      onClick={() => ref.current?.click()}
      variant={'subtitle2'}
    >
      {children}
      <input
        className={s.fileInput}
        onChange={onChangeHandler}
        ref={ref}
        type={'file'}
        {...restProps}
      />
    </Typography>
  )
}
