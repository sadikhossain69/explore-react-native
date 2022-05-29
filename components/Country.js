import { View, Text } from 'react-native'
import React from 'react'

const Country = ({country}) => {
  return (
      <Text>{country.name.common}</Text>
  )
}

export default Country