function EducationView({school, degree, start, end}){
    return (
        <div>
            <h4>{degree}</h4>
            <div>{school} </div>
            <span> {start} - {end} </span> 
        </div>
    )
}

export default EducationView