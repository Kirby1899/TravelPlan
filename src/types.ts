export type searchData = {
  location?: string
  duration?: string
}

export type resultData = day[]

export type day = activity[]

export type activity = {
  'activity name': string
  duration: string
  address: string
}

export type ExactLocationProps = {
  address: string
}
