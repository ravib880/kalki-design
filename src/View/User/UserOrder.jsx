import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TbWalletOff } from "react-icons/tb";

function UserOrder() {
    return (
        <div className='h-100 ff-lexend'>
            <h4 className='p-0'>My Orders</h4>
            <Row className='h-100 g-4 pt-3'>
                <Col xs='12' className='custom-order-style h-100 d-grid justify-content-center align-items-center align-content-center text-center'>
                    <div>
                        <TbWalletOff />
                    </div>
                    <h5>No Orders Yet</h5>
                    <span className='fs-12 pb-3'>You have placed no orders.</span>
                    <Link to='/' className='text-uppercase halfBorderRad px-3 py-2 fs-16'>
                        Start Explore
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserOrder
