import {React} from 'react'
import './exercise-proto.css'


const ExerciseProto = (exercise) => {
  return (<div>
    <p>{exercise.name}</p>
    <p>{exercise.description}</p>
    <p>{exercise.type}</p>
  </div>);
}

export default ExerciseProto;