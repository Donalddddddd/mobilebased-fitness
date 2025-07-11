import{View, Text, LogBox} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function layout(){
    LogBox.ignoreLogs(["Warning: Failed prop type"]);
    return(
        <View>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />

            <Stack.Screen name="exercises" options={{
                presentation: 'fullScreenModal'
            }}/>

            <Stack.Screen name="exerciseDetails" options={{
                presentation: 'modal'
            }}/>
        </View>
    )
}