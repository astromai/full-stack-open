export const Total = ({ total }) => {
    const sumReduce = total.reduce(
        (acc, curVal) => acc + curVal.exercises, 
        0)

    return (
        <p>Number of exercises: {sumReduce}</p>
    )
}