import {useState} from 'react'

const Header = () =>{
    const [show, setShow] = useState(null)
    return(
        <div className = 'header-container'>
            <div className = 'header'>
                <div className = 'info-container'>
                    <div className = 'info'>
                        <div className = 'name'>Brianna Giunta</div>
                        <div className = 'title'>Fullstack Developer</div>
                    </div>
                    <div className = 'contact'>
                        <div>Contact</div>
                        <div className = 'icon-container'>
                            <a href='https://www.linkedin.com/in/brianna-giunta/' target='_blank' onMouseEnter={()=>{setShow('Linkedin')}} onMouseLeave={()=>{setShow(null)}}>
                                <img className = 'icon' src = 'https://i.imgur.com/MKS7B99.png?1'/>
                                {show === 'Linkedin' && 
                                <div className='icon-text'>Linkedin</div>
                                }
                            </a>
                            <a href='https://www.linkedin.com/in/brianna-giunta/' target='_blank' onMouseEnter={()=>{setShow('Github')}} onMouseLeave={()=>{setShow(null)}}>
                                <img className = 'icon' src = 'https://i.imgur.com/dWvBa9F.png?1'/>
                                {show === 'Github' && 
                                <div className='icon-text'>Github</div>
                                }
                            </a>
                            <a href='mailto:briannagiunta@gmail.com?subject=Mail from Portfolio Website' target='_blank' onMouseEnter={()=>{setShow('Email')}} onMouseLeave={()=>{setShow(null)}}>
                                <img className = 'icon' src = 'https://i.imgur.com/9XaQAga.png?2'/>
                                {show === 'Email' && 
                                <div className='icon-text'>Email</div>
                                }
                            </a>
                            <a href='https://drive.google.com/file/d/1tEvKeAVjdXr3i5OBQwnlOqRw1QxYHkJy/view?usp=sharing' target='_blank' onMouseEnter={()=>{setShow('Resume')}} onMouseLeave={()=>{setShow(null)}}>
                                <img className = 'icon' src = 'https://i.imgur.com/JY8aait.jpg?2'/>
                                {show === 'Resume' && 
                                <div className='icon-text'>Resume</div>
                                }
                            </a>
                        </div>  
                    </div>
                </div>
                <img className='picture' src = 'https://i.imgur.com/S8X5YLv.jpg?1'/>
            </div>

        </div>
    )
}

export default Header