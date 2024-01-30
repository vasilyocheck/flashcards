import { ChangeEvent, useRef, useState } from 'react'

import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'

type Props = {
  onUpload: (formData: any) => void
}

export const UploadImg = ({ onUpload }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }
  const [isAvaBroken, setIsAvaBroken] = useState(false)

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      console.log(file)

      if (file.size < 4000000) {
        setSelectedImage(e.target.files[0])
        postCover(file)
      } else {
        alert('The uploaded file is too big')
      }
    }
  }

  const postCover = (file: File) => {
    const formData = new FormData()

    formData.append('cover', file)
    onUpload(formData)
    /*axios.post('https://neko-back.herokuapp.com/file', formData)
            .then((res) => {
                console.log('response: ', res.data)
            })*/
  }

  const errorHandler = () => {
    setIsAvaBroken(true)
    //alert('Кривая картинка')
  }

  return (
    <div>
      {selectedImage && (
        <img
          alt={'ava'}
          onError={errorHandler}
          src={URL.createObjectURL(selectedImage)}
          style={{ width: '100%' }}
        />
      )}
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
