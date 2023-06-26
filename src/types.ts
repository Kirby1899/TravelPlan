export type searchData = {
  location?: string
  duration?: string
}

export type resultData = day[]

export type day = activity[]

export type activity = {
  'Activity Name': string
  Duration: string
  Coordinates: string
}
