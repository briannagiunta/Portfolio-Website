import { useState } from "react"

const Project = (props) =>{
    const [show, setShow] = useState(null)

    return(
        <div className='project' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${props.image})`}}>
            <div>{props.title}</div>
            <div className = 'project-icon-container'>
                <div className='overview' onMouseEnter={()=>{setShow('Overview')}} onMouseLeave={()=>{setShow(null)}}>
                    <img className = 'project-icon' src = 'https://i.imgur.com/siyQ6kh.png?1'/>
                    {show === 'Overview' && 
                    <div className='project-icon-text'>Overview</div>
                    }
                </div>
                <a href={props.site} target='_blank' onMouseEnter={()=>{setShow('Visit Site')}} onMouseLeave={()=>{setShow(null)}}>
                    <img className = 'project-icon' src = 'https://i.imgur.com/61p55IJ.png'/>
                    {show === 'Visit Site' && 
                    <div className='project-icon-text'>Visit Site</div>
                    }
                </a>
                <a href={props.gitFront} target='_blank' onMouseEnter={()=>{setShow('Frontend Code')}} onMouseLeave={()=>{setShow(null)}}>
                    <img className = 'project-icon' src = 'https://i.imgur.com/zBYpCeU.png?1'/>
                    {show === 'Frontend Code' && 
                    <div className='project-icon-text'>Frontend Code</div>
                    }
                </a>
                <a href={props.gitBack} target='_blank' onMouseEnter={()=>{setShow('Backend Code')}} onMouseLeave={()=>{setShow(null)}}>
                    <img className = 'project-icon' src = 'https://i.imgur.com/zBYpCeU.png?1'/>
                    {show === 'Backend Code' && 
                    <div className='project-icon-text'>Backend Code</div>
                    }
                </a>

            </div>
              
        </div>


    )
}

export default Project