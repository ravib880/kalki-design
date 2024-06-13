import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserHeader from '../../View/User/UserHeader'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../../View/User/UserDashboard'
import UserAccountDetail from '../../View/User/UserAccountDetail'
import UserOrder from '../../View/User/UserOrder'
import UserAddressPage from '../../View/User/UserAddressPage'
import UserSavedCards from '../../View/User/UserSavedCards'
import UserSubscriptionPage from '../../View/User/UserSubscriptionPage'
import UserGiftCards from '../../View/User/UserGiftCards'

function UserRoutes() {
    return (
        <div className='bgSubThemeColor change-container-size'>
            <Container className='py-5'>
                <Row className='g-4'>
                    <Col className='col-12 col-md-4 col-lg-3 px-1 px-md-3'>
                        <UserHeader />
                    </Col>
                    <Col className='col-12 col-md-8 col-lg-9 px-1 px-md-3'>
                        <Routes>
                            <Route path="/" element={<UserDashboard />} />
                            <Route path="/account" element={<UserAccountDetail />} />
                            <Route path="/address" element={<UserAddressPage />} />
                            <Route path="/orders" element={<UserOrder />} />
                            <Route path="/cards" element={<UserSavedCards />} />
                            <Route path="/subscription" element={<UserSubscriptionPage />} />
                            <Route path="/giftcard" element={<UserGiftCards />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserRoutes
