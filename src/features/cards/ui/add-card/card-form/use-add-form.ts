import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const addCardSchema = z.object({
  answer: z.string().min(3, 'Field is required!').trim(),
  answerFormat: z.string().trim(),
  question: z.string().min(3, 'Field is required!').trim(),
  questionFormat: z.string().trim(),
})

export type CardFormValuesType = z.infer<typeof addCardSchema>
type DefaultCardValueType = Omit<CardFormValuesType, 'answerFormat' | 'questionFormat'>
export const useCardForm = (defaultValues: DefaultCardValueType) =>
  useForm<CardFormValuesType>({
    defaultValues: {
      answer: defaultValues.answer,
      answerFormat: 'text',
      question: defaultValues.question,
      questionFormat: 'text',
    },
    resolver: zodResolver(addCardSchema),
  })
