import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserAccountDetail() {
  return (
    <div className='ff-lexend'>
      <h4 className='p-0'>Account Details</h4>
      <Row className='g-4 pt-3'>
        <Col xs='12' lg='6'>
          <h5 className='text-center'>Change Details</h5>
          <div className='default-white-box p-3'>
            <div className='d-grid align-content-start custom-login-form'>
              <h5 className='fs-18 m-0'>Contact Information</h5>
              <div className='d-grid'>
                <label htmlFor="fname" className='ps-1 fs-12'>First Name</label>
                <input type="text" id='fname' placeholder='Enter First Name *' value={'User'} />
              </div>
              <div className='d-grid'>
                <label htmlFor="sname" className='ps-1 fs-12'>Second Name</label>
                <input type="text" id='sname' placeholder='Enter Second Name *' value={'Name'} />
              </div>
              <div className='d-grid'>
                <label htmlFor="mobile" className='ps-1 fs-12'>Mobile Number</label>
                <input type="text" id='mobile' placeholder='Enter Mobile Number *' value={'911234567890'} />
              </div>
              <p className='fs-14'>Kindly enter your mobile number (along with area code) in the given format: <b>919999999999</b>. (Please avoid using spaces or any special characters)</p>
              <Link className='text-uppercase custom-next-btn text-center halfBorderRad'>Save</Link>
            </div>
          </div>
        </Col>
        <Col xs='12' lg='6'>
          <h5 className='text-center'>Change Password</h5>
          <div className='default-white-box p-3'>
            <div className='d-grid align-content-start custom-login-form'>
              <h5 className='fs-18 m-0'>Want to change Password?</h5>
              <div className='d-grid'>
                <input type="text" id='fname' placeholder='Current Password' />
              </div>
              <div className='d-grid'>
                <input type="text" id='sname' placeholder='New Password' />
              </div>
              <div className='d-grid'>
                <input type="text" id='mobile' placeholder='Confirm New Password' />
              </div>
              <p className='fs-14 text-danger'>Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.</p>
              <Link className='text-uppercase custom-next-btn text-center halfBorderRad'>Confirm</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAccountDetail
