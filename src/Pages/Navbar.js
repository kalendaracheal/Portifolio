import React from 'react'

const Navbar = () => {
  
    const load = () =>{
        document.write("Kalenda Racheal's Profile is Loading in a few ...")
      }
    return (
    <div>
        <nav className='navbar' onClick={load}>
          
        
            
            <h1 className='welcome'> Welcome to my Resume</h1>   
            <div className='links'>
                <a href ="/Home">Home</a>
                <a href="/About" style={{
                    color:"white",
                    backgroundColor: 'rgb(209, 171, 187)',
                    borderRadius:'8px'
                }}>New blog</a>
                <a>About</a>
                <a>Contact</a>
            
            </div>
        </nav>
   
    </div>
        
    )
}


export default Navbar
