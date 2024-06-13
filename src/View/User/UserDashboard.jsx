import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserDashboard() {
  return (
    <div className='ff-lexend'>
      <h4 className='p-0'>Account Details</h4>


      <Row className='g-4 pt-3'>
        <Col xs='12' lg='6'>
          <div className='default-white-box h-100 d-grid d-sm-flex justify-content-center justify-content-sm-start text-center text-sm-start p-3'>
            <div className='d-flex justify-content-center justify-content-sm-start'>
              <div className='bgSubThemeColor icon-center-circle'>
                <i className="bi bi-person"></i>
              </div>
            </div>
            <div className='ps-2 ps-sm-3 d-grid align-content-start pt-2 pt-sm-0'>
              <h5 className='fs-18'>Contact Information</h5>
              <h6 className='fs-14 fs-md-12'>User Full Name</h6>
              <h6 className='fs-14 fs-md-12'>useremail@gmail.com</h6>
              <div className='pt-2 change-color-link'>
                <Link to='/user/account' className='d-flex justify-content-center justify-content-sm-start fs-14 fs-md-12 gap-2'>
                  <span>Edit</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
                <Link to='/user/account' className='d-flex justify-content-center justify-content-sm-start fs-14 fs-md-12 gap-2'>
                  <span>Change Password</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12' lg='6'>
          <div className='default-white-box h-100 d-grid d-sm-flex justify-content-center justify-content-sm-start text-center text-sm-start p-3'>
            <div className='d-flex justify-content-center justify-content-sm-start'>
              <div className='bgSubThemeColor icon-center-circle'>
                <i className="bi bi-envelope"></i>
              </div>
            </div>
            <div className='ps-2 ps-sm-3 d-grid align-content-start pt-2 pt-sm-0'>
              <h5 className='fs-18'>Newsletters</h5>
              <h6 className='fs-14 fs-md-12'>You are subscribed to "General Subscription".</h6>
              <div className='pt-2 change-color-link'>
                <Link to='/user/subscription' className='d-flex justify-content-center justify-content-sm-start fs-14 fs-md-12 gap-2'>
                  <span>Edit</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12'>
          <div className='default-white-box flex-between p-3'>
            <h5 className='m-0'>Addresses</h5>
            <Link to={'/user/address'} className='text-dark'>Manage Address</Link>
          </div>
        </Col>
        <Col xs='12' lg='6'>
          <div className='default-white-box h-100 d-grid d-sm-flex justify-content-center justify-content-sm-start text-center text-sm-start p-3'>
            
            <div className='d-grid align-content-start pt-2 pt-sm-0'>
              <h5 className='fs-18'>Default Billing Address</h5>
              <h6 className='fs-14 fs-md-12 fst-italic'>You have not set a default billing address.</h6>
              <div className='pt-2 change-color-link'>
                <Link to='/user/address' className='d-flex justify-content-center justify-content-sm-start fs-14 fs-md-12 gap-2'>
                  <span>Edit Address</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12' lg='6'>
          <div className='default-white-box h-100 d-grid d-sm-flex justify-content-center justify-content-sm-start text-center text-sm-start p-3'>
            
            <div className='d-grid align-content-start pt-2 pt-sm-0'>
              <h5 className='fs-18'>Default Shipping Address</h5>
              <h6 className='fs-14 fs-md-12 fst-italic'>You have not set a default shipping address.</h6>
              <div className='pt-2 change-color-link'>
                <Link to='/user/address' className='d-flex justify-content-center justify-content-sm-start fs-14 fs-md-12 gap-2'>
                  <span>Edit Address</span>
                  <i class="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserDashboard;