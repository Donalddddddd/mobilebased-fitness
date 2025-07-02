// src/components/ExerciseList.js
import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { demoExercises2 } from '../constants';


const ProgramList = ({ navigation }) => {
  return (
    <FlatList
      data={demoExercises2}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tailwind('flex-row p-3 border-b border-gray-300')}
          onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
        >
          <Image source={item.image} style={tailwind('w-12 h-12 mr-3')} />
          <View style={tailwind('justify-center')}>
            <Text style={tailwind('text-lg font-bold')}>{item.name}</Text>
            <Text style={tailwind('text-sm text-gray-600')}>{item.bodyPart}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProgramList;
