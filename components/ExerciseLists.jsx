import { View, Text, FlatList} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import { demoExercises2 } from '../constants';
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function ExerciseList({data}) {
  const router = useRouter();
  return (
    <View>
      <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item=> item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 50, paddingTop: 50}}
      columnWrapperStyle={{
        justifyContent: 'space-between'
      }}
      renderItem={({item,index})=> <ExerciseCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const ExerciseCard = ({item, router, index})=> {
  return(
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
        <TouchableOpacity onPress={()=> router.push({pathname: '/exerciseDetails', params: item})} className="flex py-3 space-y-2">
          <View className="bg-neutral-200 shadow rounded-[25px]">
            <Image
            source={item.image}
            contentFit='cover'
            style={{width: wp(44), height:wp(52)}}
            className="rounded-[25px]"
            />
          </View>
          <Text style={{fontSize: hp(1.7)}}
                className="text-neutral-700 font-semibold ml-1 tracking-wide"
          >
              {
                item?.name?.length>20? item.name.slice(0,20)+'...': item.name
              }
          </Text>
        </TouchableOpacity>
    </Animated.View>
    
  )
}

