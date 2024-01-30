import { ChangeEvent, useRef, useState } from 'react'

import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'

type Props = {
  onUpload: (formData: any) => void
}

export const UploadImg = ({ onUpload }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }
  const [imgError, setImgError] = useState('')

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImgError('')
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 1000000) {
        setSelectedImage(e.target.files[0])
        onUpload(file)
      } else {
        alert('The uploaded file is too big. The allowed max size is 1 Mb.')
      }
    }
  }

  const errorHandler = () => {
    setImgError('Error occurred during file uploading')
  }

  return (
    <div>
      {selectedImage && (
        <img
          alt={'ava'}
          onError={errorHandler}
          src={URL.createObjectURL(selectedImage)}
          style={{ maxHeight: '200px' }}
        />
      )}
      {imgError && <div>{imgError}</div>}
      <label>
        <Button fullWidth onClick={selectFileHandler} variant={'secondary'}>
          <ImageIcon size={1} />
          Upload Image
        </Button>
        <input
          accept={'image/*'}
          onChange={uploadHandler}
          ref={inputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </label>
    </div>
  )
}
