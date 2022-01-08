import React from 'react'
import Link from './Link'
import { phoneNumbers, Person } from '../constants'

interface PhoneNumberProps {
  person: Person
  inverse?: boolean
  className?: string
}

export default function PhoneNumber({
  person,
  inverse,
  className,
}: PhoneNumberProps) {
  const number = phoneNumbers[person]
  return (
    <Link
      href={`tel:+44${number}`}
      inverse={inverse || false}
      className={className}
    >{`0${number}`}</Link>
  )
}
