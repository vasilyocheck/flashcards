export type Grade = 1 | 2 | 3 | 4 | 5

export type AssessValue =
  | 'A lot of thought'
  | 'Confused'
  | 'Did not know'
  | 'Forgot'
  | 'Knew the answer'

export type AssessOption = {
  grade: Grade
  value: AssessValue
}

export const assessOptions: AssessOption[] = [
  { grade: 1, value: 'Did not know' },
  { grade: 2, value: 'Forgot' },
  { grade: 3, value: 'A lot of thought' },
  { grade: 4, value: 'Confused' },
  { grade: 5, value: 'Knew the answer' },
]
