import {React} from 'react'
import './exerciseProto.jsx'
import './exercise-proto.css'

const ExerciseProto = (exercise) => {
  const url = exercise.url
  return (
  <div className='exercise-item'>
    <img src={url} alt="exercise" width='100px'/>
    <p>{exercise.name}</p>
  </div>);
}
 
export default ExerciseProto;