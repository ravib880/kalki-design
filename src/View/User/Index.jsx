import React from 'react'
import UserHeader from './UserHeader'
import UserDashboard from './UserDashboard'
import UserOrder from './UserOrder'
import UserAccountDetail from './UserAccountDetail'
import { Route, Routes } from 'react-router-dom'


function Index() {
    return (
        <div>
            <div className='d-flex flex-between'>
                <div>
                    <UserHeader />
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<UserDashboard />} />
                        <Route path="/account" element={<UserAccountDetail />} />
                        <Route path="/orders" element={<UserOrder />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Index
