import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import image from '@/components/ui/dropdownmenu/img/anonim.jpeg'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import styleBtn from './../../ui/button/button.module.scss'
import s from './personal-information.module.scss'

type Props = {
  img?: string
  mail: string
  name: string
}

export const PersonalInformation = ({ img, mail, name }: Props) => {
  const { handleSubmit, register } = useForm()
  const [editMode, setEditMode] = useState(false)
  const onSubmit = (data: any) => {
    setEditMode(false)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.imgBlock}>
          <img alt={'Avatar'} className={s.img} src={img ? img : image} />
          {editMode ? null : (
            // <Button className={'imgBtn'} variant={'secondary'}>
            <button className={`${styleBtn.imgBtn} ${styleBtn.secondary}`}>
              <svg
                fill={'none'}
                height={`16`}
                viewBox={`0 0 16 16`}
                width={'16'}
                xmlns={'http://www.w3.org/2000/svg'}
              >
                <path
                  d={
                    'M12.6666 13.3334H3.33329C3.15648 13.3334 2.98691 13.4036 2.86189 13.5286C2.73686 13.6537 2.66663 13.8232 2.66663 14C2.66663 14.1769 2.73686 14.3464 2.86189 14.4714C2.98691 14.5965 3.15648 14.6667 3.33329 14.6667H12.6666C12.8434 14.6667 13.013 14.5965 13.138 14.4714C13.2631 14.3464 13.3333 14.1769 13.3333 14C13.3333 13.8232 13.2631 13.6537 13.138 13.5286C13.013 13.4036 12.8434 13.3334 12.6666 13.3334Z'
                  }
                  fill={'white'}
                />
                <path
                  d={
                    'M3.33329 12H3.39329L6.17329 11.7467C6.47782 11.7163 6.76264 11.5821 6.97995 11.3667L12.98 5.36665C13.2128 5.12063 13.3387 4.79233 13.3299 4.45368C13.3212 4.11503 13.1786 3.79366 12.9333 3.55999L11.1066 1.73332C10.8682 1.50938 10.5558 1.38089 10.2288 1.37229C9.90187 1.36368 9.58314 1.47557 9.33329 1.68665L3.33329 7.68665C3.1178 7.90396 2.98362 8.18879 2.95329 8.49332L2.66662 11.2733C2.65764 11.371 2.67031 11.4694 2.70373 11.5616C2.73715 11.6538 2.79049 11.7374 2.85995 11.8067C2.92225 11.8684 2.99612 11.9173 3.07735 11.9505C3.15857 11.9837 3.24555 12.0005 3.33329 12ZM10.18 2.66665L12 4.48665L10.6666 5.78665L8.87995 3.99999L10.18 2.66665ZM4.24662 8.60665L7.99995 4.87999L9.79995 6.67999L6.06662 10.4133L4.06662 10.6L4.24662 8.60665Z'
                  }
                  fill={'white'}
                />
              </svg>
            </button>
            // </Button>
          )}
        </div>

        {editMode ? (
          <div className={s.editBlockTrue}>
            <TextField defaultValue={name} {...register('newName')} label={'Nickname'}></TextField>
            <Button className={'btnEditMode'} fullWidth type={'submit'}>
              Save Changes
            </Button>
          </div>
        ) : (
          <div className={s.editBlock}>
            <div className={s.nameBlock}>
              <Typography className={s.textName} variant={'h1'}>
                {name}
              </Typography>
              <button className={s.nameBtn} onClick={() => setEditMode(true)}>
                <svg
                  fill={'none'}
                  height={'16'}
                  viewBox={'0 0 16 16'}
                  width={'16'}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <path
                    d={
                      'M12.6666 13.3334H3.33329C3.15648 13.3334 2.98691 13.4036 2.86189 13.5286C2.73686 13.6537 2.66663 13.8232 2.66663 14C2.66663 14.1769 2.73686 14.3464 2.86189 14.4714C2.98691 14.5965 3.15648 14.6667 3.33329 14.6667H12.6666C12.8434 14.6667 13.013 14.5965 13.138 14.4714C13.2631 14.3464 13.3333 14.1769 13.3333 14C13.3333 13.8232 13.2631 13.6537 13.138 13.5286C13.013 13.4036 12.8434 13.3334 12.6666 13.3334Z'
                    }
                    fill={'white'}
                  />
                  <path
                    d={
                      'M3.33329 12H3.39329L6.17329 11.7467C6.47782 11.7163 6.76264 11.5821 6.97995 11.3667L12.98 5.36665C13.2128 5.12063 13.3387 4.79233 13.3299 4.45368C13.3212 4.11503 13.1786 3.79366 12.9333 3.55999L11.1066 1.73332C10.8682 1.50938 10.5558 1.38089 10.2288 1.37229C9.90187 1.36368 9.58314 1.47557 9.33329 1.68665L3.33329 7.68665C3.1178 7.90396 2.98362 8.18879 2.95329 8.49332L2.66662 11.2733C2.65764 11.371 2.67031 11.4694 2.70373 11.5616C2.73715 11.6538 2.79049 11.7374 2.85995 11.8067C2.92225 11.8684 2.99612 11.9173 3.07735 11.9505C3.15857 11.9837 3.24555 12.0005 3.33329 12ZM10.18 2.66665L12 4.48665L10.6666 5.78665L8.87995 3.99999L10.18 2.66665ZM4.24662 8.60665L7.99995 4.87999L9.79995 6.67999L6.06662 10.4133L4.06662 10.6L4.24662 8.60665Z'
                    }
                    fill={'white'}
                  />
                </svg>
              </button>
            </div>
            <Typography className={s.text} variant={'body2'}>
              {mail}
            </Typography>
            <Button
              className={'with-icon'}
              style={{ marginBottom: '5px' }}
              type={'submit'}
              variant={'secondary'}
            >
              Logout
            </Button>
          </div>
        )}

        {/*<Typography className={s.text} variant={'body2'}>*/}
        {/*  {mail}*/}
        {/*</Typography>*/}
        {/*<Button*/}
        {/*  className={'with-icon'}*/}
        {/*  style={{ marginBottom: '5px' }}*/}
        {/*  type={'submit'}*/}
        {/*  variant={'secondary'}*/}
        {/*>*/}
        {/*  Logout*/}
        {/*</Button>*/}
      </Card>
    </form>
  )
}
