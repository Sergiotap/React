/* eslint-disable react/prop-types */
export function Total({ exercises1, exercises2, exercises3 }) {
  const totalExercises = exercises1 + exercises2 + exercises3;
  
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
}
