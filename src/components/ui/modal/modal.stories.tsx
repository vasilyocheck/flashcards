import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './modal.module.scss'

import image from './img/example-image.png'

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeck: Story = {
  render: () => (
    <Modal nameButton={'Add New Deck'} title={'Add New Deck'} width={'542px'}>
      <TextField label={'Name Pack'} name={'123'}></TextField>
      <Button className={'uploadButton'} fullWidth variant={'secondary'}>
        Upload Image
      </Button>
      <div className={s.checkbox}>
        <Checkbox label={'Private pack'} />
      </div>
      <div className={s.buttons}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button>Add New Pack</Button>
      </div>
    </Modal>
  ),
}

export const AddNewCard: Story = {
  render: () => (
    <Modal nameButton={'Add New Card'} title={'Add New Card'} width={'532px'}>
      <Typography className={s.textQuestion} variant={'body2'}>
        Question:
      </Typography>
      <TextField label={'Question?'} name={'123'}></TextField>
      <img src={image} />
      <Button className={'uploadButton'} variant={'secondary'}>
        Change Image
      </Button>
      <Typography className={s.textQuestion} variant={'body2'}>
        Answer:
      </Typography>
      <TextField label={'Answer'} name={'123'}></TextField>
      <img src={image} />
      <Button className={'uploadButton'} variant={'secondary'}>
        Change Image
      </Button>
      <div className={s.buttons}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button>Add New Card</Button>
      </div>
    </Modal>
  ),
}

export const DeleteCard: Story = {
  render: () => (
    <Modal nameButton={'Delete Card'} title={'Delete Card'} width={'542px'}>
      <Typography className={s.textDeleteCard} variant={'body1'}>
        Do you really want to remove Card Name? <br />
        All cards will be deleted.
      </Typography>
      <div className={s.buttons}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button>Delete Card</Button>
      </div>
    </Modal>
  ),
}
