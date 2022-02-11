import React, {useState}from 'react'
import './Details.css'
import Education from '../Images/education.jpg'
import FirstTab from '../Components/Profile';
import SecondTab from '../Components/Education';
import WorkExperience from '../Components/WorkExperience';
import SoftwareTechnicalities from '../Components/SoftwareTechnicalities';
import Hobbies from '../Components/Hobbies';

const Detail1 = () => {

  
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
      // update the state to tab1
      setActiveTab("tab1");
    };
    const handleTab2 = () => {
      // update the state to tab2
      setActiveTab("tab2");
    };
    const handleTab3 = () => {
      // update the state to tab2
      setActiveTab("tab3");
    };
    const handleTab4 = () => {
      // update the state to tab2
      setActiveTab("tab4")
    };
    const handleTab5 = () => {
      // update the state to tab2
      setActiveTab("tab5")
    };
  const [activeTab, setActiveTab] = useState("tab1");
    
    return (
        <div className='details'>
           {/* <button onClick={()=>{setCount(initialCount)}}>Count {count}</button>
                 <button onClick={()=>{setCount(count + 1)}}>Increment{count} {count}</button>
                 <button onClick={()=>{setCount(count - 1)}}>Decrement {count}</button> */}
                             
           <div className='rightbar' >
             <div className='rightbar1'>
                 {/* <Link to = "/call"> </Link> */}
                   <button id='Profile' className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}>
                 <h3>Profile</h3>
                  
               </button>
                                
             </div>
                
                   <div className='rightbar1'>
                   <div className={activeTab === "tab2" ? "active" : ""}
        onClick={handleTab2} >
                    <h3> Education</h3>
                    </div>
                   </div>

<div>
    </div>
                   <div className='rightbar1'>
                   <button  className='profile'>
                    <h3>Skills</h3>
                    </button>
                   </div>
                   
                   <div className='rightbar1'>
                   <button className={activeTab === "tab5" ? "active" : ""}
          onClick={handleTab5} >
                    <h3 >Hobby</h3>
                    </button>
                   </div>

                   <div className='rightbar1'>
                   <button className='profile'>
                   <h3>Achievements</h3>
                   </button>
                   </div>

                   <div className='rightbar1'> 
                   <button className={activeTab === "tab4" ? "active" : ""}
          onClick={handleTab4}>
                    <h3>Software Technicalities</h3>
                    </button>
                   </div>

                    <div className='rightbar1'>
                    <button className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}>
                    <h3>Work Experience</h3>
                    </button>
                    </div>

                    <div className='rightbar1'>
                    <button className='profile'>
                        <h3>Testimonials</h3>
                    </button>
                    </div>
                    
                    
                </div>  
                <div className='e-img'>
                <div className="outlet">
  <div>{activeTab === "tab1" ? <FirstTab /> :<SecondTab />}</div>
  {activeTab === "tab3" ?<WorkExperience/> : activeTab === "tab4"? <SoftwareTechnicalities/>: <Hobbies/>}
</div>
                {/* <img src={Education}  alt='' className='e-img' /> */}
                                          
                            
                </div>
                <div>
                  <h3>Education Background</h3>
                        2019-2023 Pursuing a Bachelor's degree in science in computer science<br/>
                        2013-2018 Naalya secondary school for UCE and UACE certificates<br/>
                        2004- 2012 Muguluka Parents primary school for PLE certificate

                </div>

                </div>
        
    )
}

export default Detail1
