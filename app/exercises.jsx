import { View, Text, Image } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import { TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodyPart } from '../api/exercise';
import { StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseLists';
import { demoExerciseCardio, demoExercises, demoExercises2 } from '../constants';
import { ScrollView } from 'react-native-virtualized-view'
import ExerciseGenerator from '../components/ExerciseGenerator';



export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState(demoExercises2);
  const item = useLocalSearchParams();
  const prevItemRef = useRef();

  useEffect(() => {
    if (item && item.name && (!prevItemRef.current || prevItemRef.current.name !== item.name)) {
      getExercises(item.name);
      prevItemRef.current = item; // Update the ref with the current item
    }
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };
  
  


  return (
    <ScrollView>
      <StatusBar style="light"/>
      <Image
      source={item.image}
      style={{width: wp(100), height:hp(45)}}
      className="rounded-b-[40px]"
      />
      <TouchableOpacity
      onPress={()=> router.back()}
      className="bg-rose-500 mx-4 absolute flex justify-center pr-1 rounded-full"
      style={{height: hp(5.5), width: hp(5), marginTop: hp(4)}}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white"/>
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
      <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
        {item.name} exercises
      </Text>

      <View className="">
          <ExerciseList data={exercises}/>
      </View>

      {item.name === 'Program' ? (
          <View className="">
            <ExerciseGenerator exercises={demoExercises2} />
          </View>
        ) : (
          <View className="">
            <ExerciseList data={exercises} />
          </View>
        )}
          
      </View>

    </ScrollView>
    
  )
}
