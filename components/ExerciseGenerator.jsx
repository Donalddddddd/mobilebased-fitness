import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { demoExercises2 } from '../constants';

const ExerciseGenerator = () => {
  const [exercises, setExercises] = useState([]);

  const generateExercises = () => {
    const exercisesArray = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * demoExercises2.length);
      exercisesArray.push(demoExercises2[randomIndex]);
    }
    setExercises(exercisesArray);
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow justify-center items-center p-4`}>
      <Button title="Generate Exercises" onPress={generateExercises} />
      {exercises.map((exercise, index) => (
        <View key={index} style={tw`mt-4 items-start`}>
          <Text style={tw`text-2xl font-bold`}>{exercise.name}</Text>
          <Image source={exercise.image} style={tw`w-48 h-48 my-4`} />
          <Text style={tw`text-lg`}>Body Part: {exercise.bodyPart}</Text>
          <Text style={tw`text-lg`}>Equipment: {exercise.equipment}</Text>
          <Text style={tw`text-lg`}>Target: {exercise.target}</Text>
          <Text style={tw`text-lg`}>
            Secondary Muscles: {exercise.secondaryMuscles.join(', ')}
          </Text>
          <Text style={tw`text-xl font-bold my-2`}>Instructions:</Text>
          {exercise.instructions.map((instruction, idx) => (
            <Text key={idx} style={tw`text-base my-1`}>
              {idx + 1}. {instruction}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default ExerciseGenerator;
