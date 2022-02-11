import React from 'react'
import Me from '../Images/img.png'

const Home = () => {
    return (
        <div className='home'>
            
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello there, My name is</h2>
                    <h1 className='i-name'>Kalenda Racheal</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Computer Scientist</div>
                            <div className='i-title-item'>Bussiness Lady</div>
                            <div className='i-title-item'>Programmer</div>
                            <div className='i-title-item'>React Dev</div>
                            <div className='i-title-item'>Next Js dev</div>
                            
                        </div>
                       
                    </div>
                    <p className='i-desc'>
                    A third year student of computer science at Makerere University. Well known for being hardworking, patient, kind, approchable,
                     smart, vigilant, empathetic, able to work under minimal pressure as well as creative person especially in the field of computing and technology.
                      
                        </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'>
                <img src={Me} alt='' className='i-img'/>
                </div>
            </div>
        </div>
    )
}

export default Home
