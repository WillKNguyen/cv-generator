function ExperienceView({company, position, start, end, description}){
    return (
        <div>
            <h4>{position}</h4>
            <div>{company}  </div>
            <span> {start} - {end} </span>
            <p></p>
            <div> {description}</div>
        </div>
    )
}

export default ExperienceView