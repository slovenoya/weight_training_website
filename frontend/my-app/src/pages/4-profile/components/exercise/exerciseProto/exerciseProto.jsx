import {React} from 'react'
import './exerciseProto.jsx'
import './exercise-proto.css'

const ExerciseProto = (exercise) => {
  return (
  <div className='exercise-item'>
    <p>{exercise.name}</p>
  </div>);
}

export default ExerciseProto;