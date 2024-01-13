import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import Eye from '@/components/ui/textfield/icons/eye'
import EyeOff from '@/components/ui/textfield/icons/eyeOff'
import Search from '@/components/ui/textfield/icons/search'
import { clsx } from 'clsx'

import s from './textfield.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ className, errorMessage, label, onChange, placeholder, type = 'text', ...restProps }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const isShowPasswordButton = type === 'password'
    const isSearch = type === 'search'
    const setShowPasswordHandler = () => setShowPassword(prevValue => !prevValue)
    const getCurrentInputType = (type: TextFieldProps['type'], showPassword: boolean) => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      return type
    }

    const currentInputType = getCurrentInputType(type, showPassword)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    const classNames = {
      field: clsx(s.field, !!errorMessage && s.error, isSearch && s.hasSearchIcon, className),
      label: clsx(s.label, restProps.disabled && s.disabled, className),
      passwordButton: clsx(s.passwordButton, restProps.disabled && s.disabled),
      rootBlock: clsx(s.rootBlock),
      searchIcon: clsx(
        s.searchIcon,
        restProps.disabled && s.disabled,
        !restProps.disabled && s.searchIconActive
      ),
    }

    return (
      <div>
        {label && <label className={classNames.label}>{label}</label>}
        <div className={classNames.rootBlock}>
          {isSearch && <Search className={classNames.searchIcon} />}
          <input
            autoFocus
            className={classNames.field}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={currentInputType}
            {...restProps}
          />
          {isShowPasswordButton && (
            <button
              className={classNames.passwordButton}
              disabled={restProps.disabled}
              onClick={setShowPasswordHandler}
              type={'button'}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
        {errorMessage && <label className={s.labelError}>{errorMessage}</label>}
      </div>
    )
  }
)
