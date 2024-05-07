import React, { useState } from 'react'
import '../MobileView/mobileView.css'
import notification from "../../Apis/Gallery/notification.png"
import profile from "../../Apis/Gallery/profile.png"
import fa from "../../Apis/Gallery/fa.png"


const MobileView = () => {
    const [selectv, setSelectv] = useState("")
    const getselectedvalue = (event) => {
        setSelectv(event.target.value);
    }
    return (
        <>

            <div className='mobile_view'>
                <div className='mobile_nav'>
                    <div className='mobile_nav_col'>
                        <div className='mobile_nav_col_1'>
                            <img src={fa} alt="" />
                            <div>Add Subject/Tutor</div>
                        </div>
                        <div className='mobile_nav_col_2'>
                            <img className='pro' src={notification} alt="" />
                            <img src={profile} alt="" />

                        </div>

                    </div>
                </div>
                {/* <hr /> */}
                <div className='mobile_add_subject_col_2' >
                    <div className='mobile_add_subject_col_2_row'>
                        <div className='mobile_add_subject_details_2'>
                            <div> Choose a new Subject/Tutor:</div>
                        </div>

                        <div className='mobile_select_opt'>

                            <select onChange={getselectedvalue} value={selectv}>
                                <option value="" selected disabled>Autosuggestion</option>
                                <option id='math' value="Mathematics"> Mathematics</option>
                                <option value="ELA">English Language Arts (ELA)</option>
                                <option value="Science">Science</option>
                                <option value="Social Studies">Social Studies</option>
                                <option value="History">History</option>
                                <option value="Geography">Geography</option>
                                <option value="Physical Education">Physical Education (PE)</option>
                                <option value="Art">Art</option>
                                <option value="Music">Music</option>
                                <option value="Foreign Languages">Foreign Languages (e.g., Spanish, French)</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Health Education">Health Education</option>
                                <option value="Civics">Civics</option>
                                <option value="Economics">Economics</option>
                                <option value="Literature">Literature</option>
                                <option value="Environmental Studies">Environmental Studies</option>
                                <option value="Technology Education">Technology Education</option>
                                <option value="Religious Studies">Religious Studies (depending on the curriculum)</option>
                                <option value="Drama">Drama</option>
                                <option value="Career and Technical Educatio">Career and Technical Education (CTE)</option>
                            </select>


                        </div>




                        <a href='/'>
                            <div className='Mobile_button'>
                                <button>Check Availability</button>
                            </div>


                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileView