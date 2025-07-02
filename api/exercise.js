// Import the local data array
import { demoExercises2 } from '../constants';

// Function to fetch exercises by body part
export const fetchExercisesByBodyPart = async (bodyPart) => {
    try {
        // Filter exercises by the specified body part
        const filteredExercises = demoExercises2.filter(exercise => exercise.bodyPart === bodyPart);
        return filteredExercises;
    } catch (err) {
        console.log('error: ', err.message);
        return [];
    }
}

// Example usage
fetchExercisesByBodyPart('cardio').then(exercises => {
    console.log(exercises);
});
