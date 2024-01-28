import { useForm } from 'react-hook-form'

import { ImageIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Modal } from '@/components/ui/modal'
import { useAddDeckMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import sModal from '@/components/ui/modal/modal.module.scss'

const addDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string(),
})

type FormValues = z.infer<typeof addDeckSchema>

export const AddNewDeck = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(addDeckSchema) })
  const [addDeck] = useAddDeckMutation()
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.name?.message}
          label={'Name Pack'}
          name={'name'}
        />
        <Button className={'uploadButton'} fullWidth variant={'secondary'}>
          <ImageIcon size={1} />
          Upload Image
        </Button>
        <div className={sModal.checkbox}>
          <Checkbox {...register('isPrivate')} />
          {/*<Checkbox label={'Private pack'} />*/}
        </div>
        <div className={sModal.buttons}>
          <Button
            onClick={() => console.log('close window func')}
            type={'reset'}
            variant={'secondary'}
          >
            Cancel
          </Button>
          <Button type={'submit'}>Add New Pack</Button>
        </div>
      </form>
    </Modal>
  )
}
