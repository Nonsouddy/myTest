import React, { useState } from 'react'
import Select from "react-dropdown-select"
import '../../Components/AddSubject/addSubject.css'
import dashbord from '../../Apis/Gallery/Vector.png'
import Assignment from '../../Apis/Gallery/Assignment.png'
import Tutors from '../../Apis/Gallery/Tutors.png'
import message from '../../Apis/Gallery/message.png'
import payment from '../../Apis/Gallery/payment.png'
import feedback from '../../Apis/Gallery/feedback.png'
import setting from '../../Apis/Gallery/setting.png'
import Class from '../../Apis/Gallery/class.png'
import arrow from '../../Apis/Gallery/arrow.png'
import woman from '../../Apis/Gallery/woman.png'
import logout from '../../Apis/Gallery/logout.png'

const AddSubject = () => {
    const [selectv, setSelectv] = useState("")
    const getselectedvalue = (event) => {
        setSelectv(event.target.value);
    }
    return (
        <>
            <div className='add_subject_main'>
                <div className='add_subject_col_1'>
                    <div className='dashbord'>
                        <div id='dash_bor'>
                            <div className='dashbord_row'>
                                <img src={dashbord} alt="" />
                                <div>dashboard</div>
                                <img src={arrow} alt="" />
                            </div>

                        </div>
                        <div className='dashbord_row'>
                            <img src={Class} alt="" />
                            <div>Class</div>
                            <img src={arrow} alt="" />

                        </div>
                        <div className='dashbord_row'>
                            <img src={Assignment} alt="" />
                            <div>Assignment</div>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='dashbord_row'>
                            <img src={Tutors} alt="" />
                            <div>Tutors</div>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='dashbord_row'>
                            <img src={message} alt="" />
                            <div>message</div>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='dashbord_row'>
                            <img src={payment} alt="" />
                            <div>payment</div>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='dashbord_row'>
                            <img src={feedback} alt="" />
                            <div>feedback</div>
                            <img src={arrow} alt="" />

                        </div>
                    </div>
                    <div className='setting_section'>
                        <div className='dashbord_row'>
                            <img src={setting} alt="" />
                            <div>setting</div>
                            <img src={arrow} alt="" />
                        </div>
                       
                        <div className='woman_section'>
                        <div className='dashbord_row'>
                            <img src={logout} alt="" />
                            <div>logout</div>
                            <img src={arrow} alt="" />
                        </div>
                            <img className='img' src={woman} alt="" />
                            <a href='/'>
                            <button>
                                Refer & Earn
                            </button>
                            </a>
                        </div>

                    </div>


                </div>
                <div >
                    <div className='add_subject_col_2'>
                        <div className='add_subject_details'>Add Subject/Tutor:</div>
                    </div>
                    <hr />

                    <div className='add_subject_col_2_row'>
                        <div className='add_subject_details_2'>Choose a new Subject/Tutor:</div>

                        <div className='select_opt'>

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

                            <button>Check Availability</button>
                        </a>
                    </div>
                </div>
            </div>


            
        </>



    )
}
export default AddSubject

