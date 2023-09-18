import React from 'react'
import './RegistrationPg.css'
function RegistrationPg() {
  return (
    <div className='registration-form'>
      <h1  className='form-heading'>Employee Registration Form</h1>
      <div className='form-box'>
        <form >
          <div className='full-name'>
            <div className='name'>
              <label htmlFor="firstName">First Name*</label>
              <input type="text"  id='firstName name' placeholder='Enter your name'/>
            </div>
            <div className='name'>
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id='lastName name' placeholder='Enter your name' />
            </div>
           
          </div>
          <div className='form-input'>
            <label htmlFor="dob">DOB</label>
            <input type="date" name="" id="dob" required CiCalendarDate placeholder='Enter your dob'/>
          </div>
          <div className='form-input'>
           <label htmlFor='study'>Study</label>
           <select id="study" name="study">
             <option value="B.E">B.E</option>
             <option value="Master's">Master's</option>
             <option value="B.Tech">B.Tech</option>
             <option value="Graduate">Graduate</option>
           </select>
          </div>
          <div className='form-input'>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name='endDate'  placeholder='2-6-22' required id='startDate' />
          </div>
          <div className='form-input'>
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" required id="endDate"  placeholder='7-7-23'/>
          </div>
          <div className='form-input'>
            <label htmlFor="">Current Salary</label>
            <input type="text" placeholder='30000' />
          </div>
          <div className='form-input'>
            <label htmlFor="description">Description</label>
            <textarea name="desc" id="description" cols="30" rows="10"></textarea>
          </div>
          <div className='form-btn'>
            <button className='can-btn'>Cancel</button>
            <button className='sav-btn'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPg
