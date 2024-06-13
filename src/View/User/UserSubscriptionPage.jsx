import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserSubscriptionPage() {
    return (
        <div className='ff-lexend'>
            <Row className='g-4 pt-3'>
                <Col xs='12' lg='4'>
                    <div className='default-white-box p-3'>
                        <div className='d-grid align-content-start custom-login-form'>
                            <h5 className='m-0'>Subscription</h5>

                            <div className='d-flex gap-1'>
                                <input type="checkbox" id='check' placeholder='State' />
                                <label htmlFor="check">General Subscription</label>
                            </div>
                            <p className='fs-12 m-0 pb-4'>This is oly for sending new update to your mail id.</p>
                            <Link className='text-uppercase custom-next-btn text-center halfBorderRad'>Update</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserSubscriptionPage
