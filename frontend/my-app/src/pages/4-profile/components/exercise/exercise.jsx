import {React} from 'react'

const Exercise = () => {
  const sample1={id:1, name:'Bench Press', description:'push harder!', type:'chest', video:null}
  const sample2={id:2, name:'Squat', description:'Light weight baby', type:'leg', video:null}
  const sample3={id:3, name:'pull up', description:'darken the sky', type:'back', video:null}
  const exercises = [sample1, sample2, sample3]
  return (
    <div className='exercise-container'>
      {exercises.map((exercise) => (
        <div key={exercise.id} className='exercise-item'>
          <p>{exercise.name}</p>
          <p>{exercise.type}</p>
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Exercise;