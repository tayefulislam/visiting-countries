import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Country from './Country'



export default function Countries() {

    const [countries, setCountries] = useState([])
    const url = `https://restcountries.com/v3.1/all
    `
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })

    return (
        <View>
            <Text>Countries {countries.length}</Text>
            <ScrollView>

                {
                    countries.map(country => <Country
                        country={country}></Country>)
                }

            </ScrollView>
        </View>
    )
}

