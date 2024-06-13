import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserAddressPage() {
  return (
    <div className='ff-lexend'>
      <h4 className='p-0'>Address</h4>
      <Row className='g-4 pt-3'>
        <Col xs='12' lg='8'>
          <div className='default-white-box p-3'>
            <div className='d-grid align-content-start custom-login-form'>
              <h5 className='fs-18 m-0'>New Address</h5>
              <div className='d-grid d-md-flex gap-3'>
                <div className='d-grid w-100'>
                  <label htmlFor="fname" className='ps-1 fs-12'>First Name</label>
                  <input type="text" id='fname' placeholder='Enter First Name *' value={'User'} />
                </div>
                <div className='d-grid w-100'>
                  <label htmlFor="sname" className='ps-1 fs-12'>Second Name</label>
                  <input type="text" id='sname' placeholder='Enter Second Name *' value={'Name'} />
                </div>
              </div>
              <div className='d-grid d-md-flex gap-3'>
                <input type="number" id='mobile' placeholder='Phone Number *' className='w-100' />
                <input type="text" placeholder="Address Label 'Ex. Home'" className='w-100' />
              </div>
              <div className='d-grid d-md-flex gap-3'>
                <textarea name="" id="" rows={4} className='w-100' placeholder='Street Address'></textarea>
              </div>
              <div className='d-grid d-md-flex gap-3'>
                <input type="number" placeholder='Zip/Postal Code *' className='w-100' />
                <input type="text" placeholder="City" className='w-100' />
              </div>
              <div className='d-grid d-md-flex gap-3'>
                <input type="text" placeholder='State' className='w-100' />
                <input type="text" placeholder="Country" className='w-100' />
              </div>
              <Link className='text-uppercase custom-next-btn text-center halfBorderRad'>Update</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAddressPage
