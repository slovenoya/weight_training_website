import {React, useState, useEffect} from 'react'
import ExerciseProto from './exerciseProto/exerciseProto'
import exercises from './exerciseInfo.json'
import './exercise.css'

const DEFAULT = 1;
const DESCRIPTION = 2;

const ExerciseDescription = props => {
  const exercise = props.exercise;
  const handleClick = () => {
    props.setPageType(DEFAULT);
  }
  return (
    <div className='description'>
      <div className='description-content'>
        <p className='description-name'>{exercise.name}</p>
        <img src={exercise.url} alt="exercise" width='100px'/>
        <p className='description-main'>{exercise.description}</p>
      </div>
      <div className='description-back' onClick={handleClick}>Go Back</div>
    </div>
  )
}

const ExerciseList = props => {
  const handleClick = (exercise) => {
    props.setExercise(exercise);
    props.setPageType(DESCRIPTION)
  }

  return (
    <div className='exercise-container'>
      {exercises.map((exercise) => (
        <div key={exercise.id} onClick={() => {handleClick(exercise)}}>
          {ExerciseProto(exercise)}
        </div>
      ))}
    </div>
  )
}

const Exercise = () => {
  const [page, setPage] = useState()
  const [pageType, setPageType] = useState(DEFAULT);
  const [exercise, setExercise] = useState();

  useEffect(()=>{
    if (pageType === DEFAULT) {
      setPage(<ExerciseList setExercise={setExercise} setPageType={setPageType}></ExerciseList>)
    } else if (pageType === DESCRIPTION) {
      setPage(<ExerciseDescription exercise={exercise} setPageType={setPageType}></ExerciseDescription>)
    }
  }, [pageType, exercise])

  return (
    <div className='page-container'>
      {page}
    </div>

  )
}

export default Exercise;