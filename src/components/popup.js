const Popup = (props) =>{

    return(
        <div className = 'popup' onClick={()=>{props.setProject(null)}} >
            <div className='project-info-container'>
                <h1>Info on {props.project.title} is coming...</h1>
                <img src = 'https://i.imgur.com/XsA3qwl.jpg'/>
            </div>
            <div className = 'space' onClick={()=>{props.setProject(null)}}></div>
        </div>
    )
}

export default Popup