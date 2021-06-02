import Project from './project'

const Projects = () =>{

    const projectArr = [
        {'title':'The Boozy Barista',
        'image': 'https://i.imgur.com/r40HhxI.png',
        'site': 'https://bri-deployment-frontend.herokuapp.com/',
        'gitFront': 'https://github.com/briannagiunta/GA-Solo-Project-Front',
        'gitBack': 'https://github.com/briannagiunta/GA-Solo-Project-Back'
        },
        {'title':'Sweet-A-Holics',
        'image': 'https://i.imgur.com/5ALAuiQ.png',
        'site': 'https://sweets-front.herokuapp.com/',
        'gitFront': 'https://github.com/briannagiunta/sweets',
        'gitBack': 'https://github.com/briannagiunta/sweetaholics-backend'
        },  
    ]

    return(
        <div className = 'projects-container'>
            <h1>Projects</h1>
            <div className = 'projects'>
                {projectArr.map((p,i)=>
                    <Project key = {i} title = {p.title} image={p.image} site={p.site} gitFront={p.gitFront} gitBack={p.gitBack} />
                )}
            </div>
        </div>
    )
}

export default Projects