const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    );
};
const Courses = ({courses}) => {
    return(
        <div>
            {courses.map((course) => 
            <div key={course.id}>
            <Course course={course}/>
            <TotalExercises parts={course.parts}/>
            </div>
            )}
        </div>
    )

}

const Course = ({course}) => {
    return(
        <div>
        <h1>{course.name}</h1>
        {course.parts.map((part)=> <Part key={part.name} part={part.name} exercises={part.exercises}/>) }
        </div>
    );
};

const TotalExercises = ({parts}) => {
    
    return(
        <p>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>
    );
};
export {Courses};


