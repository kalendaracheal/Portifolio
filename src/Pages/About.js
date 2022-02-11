import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className='a-left'>
                
                <div className='a-card'>
                    <img src='https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className='a-img'></img>
                </div>
                <div className='a-card-bg'>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-desc'>
                I am Kalenda Racheal a student majoring in Computer science at the College of 
                Computing and Informatics Technology at Makerere University, Uganda.
                Am a self-motivated lady, versatile with multiple skills such as creativity, 
                team collaboration, and effective communication. 
                <br/><br/>
                I have impressive work projects in web design, great at problem-solving with a good attitude towards learning and improving. Am comfortable working in a fast-paced environment.
                I have a strong passion for the health sector and am looking forward to using my
                 technical skills in the health sector. I am well known for being a hardworking,
                  patient, kind, approachable, smart, vigilant, empathetic, and creative person
                   especially in the field of computing and technology as well as who works under minimal pressure.
               
                </p>
                <div className='a-award'>

                   <div className='a-award-texts'>
                    <h4 className='a-award-title'>Bio history</h4>
                    <p className='a-award-desc'> I like interacting with people. I spend most of my time either studying or 
                    coding, with friends, listening to music etc. </p>
                </div>
                </div>
                

 
            </div>
        </div>
    )
}

export default About
