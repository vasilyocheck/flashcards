export type MeResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type RecoverPassArgs = {
  email: string
  html: string
  subject: string
}
