function PersonalView({firstname, lastname, email, phone, summary}){
    return (
        <div>
            <h1>{firstname + ' '} {lastname} </h1>
            <div>{email}</div>
            <div> {phone}</div>
            <hr></hr>
            <p></p>
            <div> {summary}</div>
            <hr></hr>
        </div>
    )
}

export default PersonalView