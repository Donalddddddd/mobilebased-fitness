import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderImage from '../components/SliderImage';
import BodyParts from '../components/BodyParts';





export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex" edges={['top']}>
        <StatusBar style="dark" />
        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text style={{fontSize: hp(4.5)}} 
                className="font-bold tradcking-wider text-neutral-700">READY TO</Text>
                <Text style={{fontSize: hp(4.5)}} 
                className="font-bold tradcking-wider text-rose-700">WORKOUT</Text>
            </View>
            <View className="flex justify-center items-center space-y-2">
                <Image source={require('../assets/images/p25.jpg')}
                style={{height: hp(6), width: hp(6)}}
                className="rounded-full"
                 />

                 <View 
                 className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                 style={{height: hp(5.5), width: hp(5.5)}}
                 >
                    <Ionicons name="notifications" size={hp(3)} color="gray"/>
                 </View>
            </View>
        </View>

        <View>
            <SliderImage/>
        </View>

        <View className="flex-1">
            <BodyParts/>
        </View>

    </SafeAreaView>
  )
}