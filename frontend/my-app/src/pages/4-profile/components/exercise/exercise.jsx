import {React} from 'react'
import ExerciseProto from './exerciseProto/exerciseProto'
import exercises from './exerciseInfo.json'
import './exercise.css'

const Exercise = () => {
  return (
    <div className='page-container'>
      <div className='exercise-container'>
        {exercises.map((exercise) => (
          <div key={exercise.id}>
            {ExerciseProto(exercise)}
          </div>
        ))}
      </div>
    </div>

  )
}

export default Exercise;