import { View, Text, ScrollView, StyleSheet } from 'react-native'
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
            <Text style={styles.header}>Countries: {countries.length}</Text>
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

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    }
})

export default Countries