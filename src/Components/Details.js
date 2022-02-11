import React, {useState} from 'react';
import Profile from './Profile';
import Education from './Education';
import WorkExperience from './WorkExperience'
import Hobbies from './Hobbies'
import Achievements from './Achievements';
import SoftwareTechnicalities from './SoftwareTechnicalities';


const Details = () => {
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
      setActiveTab("tab4");
    };
    
    const handleTab5 = () => {
      // update the state to tab2
      setActiveTab("tab5");
    };
    const handleTab6 = () => {
      // update the state to tab2
      setActiveTab("tab6");
    };
  const [activeTab, setActiveTab] = useState("tab1");
  return(
    <div>
      <div className="container1">
        <div className='btn1'>
          <button id='profile' className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}>
            Profile
           </button>
          <button id='education' className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}>
            Education Background
          </button>
          <div className="outlet">
            {activeTab === "tab1" ? <Profile /> : <Education />}
          </div>
        </div>

      </div>
      <div className='container1'>
        <div className='btn1'>
          <button id ='achievements'className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}>
            Achievements
          </button>

          <button id='workexperience' className={activeTab === "tab4" ? "active" : ""}
              onClick={handleTab4}>
              Work Experience
          </button>
        </div>
      
        <div className="outlet">
          {activeTab === "tab3" ? <Achievements /> : <WorkExperience />}
        </div>

      </div>
      <div className='container1'>
        <div className='btn1'>
          <button id ='achievements'className={activeTab === "tab5" ? "active" : ""}
            onClick={handleTab5}>
            Projects and Software 
          </button>

          <button id='workexperience' className={activeTab === "tab6" ? "active" : ""}
              onClick={handleTab6}>
              Skills and Hobbies
          </button>
        </div>
      
        <div className="outlet">
          {activeTab === "tab5" ? <SoftwareTechnicalities /> : <Hobbies />}
        </div>

      </div>
    
    </div>
  ) 
};

export default Details;

