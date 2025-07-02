// src/components/ExerciseDetail.js
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { tailwind } from 'tailwindcss-react-native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={tailwind('flex-1 p-4')}>
      <Image source={exercise.image} style={tailwind('w-full h-48')} />
      <Animated.Text entering={FadeInDown.duration(300).springify()} style={tailwind('text-2xl font-bold my-2')}>{exercise.name}</Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} style={tailwind('text-lg my-1')}>{exercise.bodyPart}</Animated.Text>
      <Animated.Text entering={FadeInDown.duration(300).springify()} style={tailwind('text-base my-1')}>Equipment: {exercise.equipment}</Animated.Text>
      <Animated.Text entering={FadeInDown.duration(300).springify()} style={tailwind('text-base my-1')}>Target: {exercise.target}</Animated.Text>
      <Animated.Text entering={FadeInDown.duration(300).springify()} style={tailwind('text-xl my-2')}>Instructions:</Animated.Text>
      <FlatList
        data={exercise.instructions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={tailwind('text-sm my-1')}>{item}</Text>}
      />
    </View>
  );
};

export default ExerciseDetail;
