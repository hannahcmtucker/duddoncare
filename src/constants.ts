export type Person = 'Emma' | 'Susie'

type PhoneNumbers = { [person in Person]: number }

export const phoneNumbers: PhoneNumbers = {
  Emma: 7547575370,
  Susie: 7967367217,
}

export const people = Object.keys(phoneNumbers) as Array<
  keyof typeof phoneNumbers
>
