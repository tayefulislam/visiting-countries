import { View, Text } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    const { name } = country
    return (
        <View>
            <Text>Country : {name.common}</Text>
        </View>
    )
}