import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    }, [] )

    return (
        <View>
            <Text>Countries: {countries.length}</Text>
            <ScrollView>
                {
                    countries.map(country => <Country
                        key={country.name.common}
                        country={country}
                    />)
                }
            </ScrollView>
        </View>
    )
}

export default Countries