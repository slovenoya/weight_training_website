import {React} from 'react'
import ExerciseProto from './exerciseProto'

import './exercise.css'

const Exercise = () => {
  const sample1={id:1, name:'Bench Press', description:'push harder!', type:'chest', video:null}
  const sample2={id:2, name:'Squat', description:'Light weight baby', type:'leg', video:null}
  const sample3={id:3, name:'pull up', description:'darken the sky', type:'back', video:null}
  const sample4={id:4, name:'pull up', description:'darken the sky', type:'back', video:null}
  const sample5={id:5, name:'pull up', description:'darken the sky', type:'back', video:null}
  const sample6={id:6, name:'pull up', description:'darken the sky', type:'back', video:null}
  const exercises = [sample1, sample2, sample3, sample4, sample5, sample6]
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