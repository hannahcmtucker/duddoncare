export type Person = 'Emma' | 'Susie' | 'Heather'

type PhoneNumbers = { [person in Person]: number }

export const phoneNumbers: PhoneNumbers = {
  Emma: 7547575370,
  Susie: 7967367217,
  Heather: 7539548341,
}

export const people = Object.keys(phoneNumbers) as Array<
  keyof typeof phoneNumbers
>
