import { Control } from 'react-hook-form'

import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { Uploader } from '@/components/ui/uploader'
import { CardFormValuesType } from '@/services/services/cards/add-card/card-form/use-add-form'

import s from './card-form-field.module.scss'

type Props = {
  control: Control<CardFormValuesType>
  dataFieldFormat: string
  imageUrl: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadCover: (data: File) => void
  onLoadError: (error: string) => void
}

export const CardFormField = ({
  control,
  dataFieldFormat,
  imageUrl,
  label,
  name,
  onLoadCover,
  onLoadError,
}: Props) => {
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  return (
    <>
      {dataFieldFormat === 'text' && (
        <ControlledTextField
          autoFocus={false}
          className={s.fieldItem}
          control={control}
          label={label}
          name={name}
        />
      )}
      {dataFieldFormat === 'text' && (
        <>
          {imageUrl && (
            <div className={s.imageBlock}>
              <img alt={'Card cover'} src={imageUrl} />
            </div>
          )}

          <Uploader onLoadCover={onLoadCover} onLoadError={onLoadError}>
            <Button className={s.fieldItem} fullWidth type={'button'} variant={'secondary'}>
              <ImageIcon size={1.3} />
              <Typography as={'span'} variant={'subtitle2'}>
                {buttonUploadText}
              </Typography>
            </Button>
          </Uploader>
        </>
      )}
    </>
  )
}
