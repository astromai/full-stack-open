import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

export const Course = ({ course }) => {
    const name = course.name
    const parts = course.parts 

    return (
    <div>
        <Header course={name}/>
        <Content parts={parts}/>
        <Total total={parts}/>
    </div>
   ) 
}