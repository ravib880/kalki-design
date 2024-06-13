import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function UserHeader() {
    
    const location = useLocation();

    return (
        <div>
            <div className='custom-user-header halfBorderRad ff-lexend p-0 d-grid '>
                <div className='d-grid p-3'>
                    <h5 className='m-0'>User Name</h5>
                    <p className='fs-14 fs-md-12 m-0'>useremail@gmail.com</p>
                </div>
                <hr className='my-0' />
                <div className='d-grid header-link-list'>
                    <NavLink to={'/user'} className={(location.pathname === '/user') ? "active-nav flex-between" : "flex-between"}>
                        <span>Dashboard</span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/account'} className={(location.pathname === '/user/account') ? "active-nav flex-between" : "flex-between"}>
                        <span className='gap-2 align-items-center d-flex justify-content-start'>
                            <i className="bi bi-person-circle fs-20"></i>
                            <span>Account Details</span>
                        </span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/address'} className={(location.pathname === '/user/address') ? "active-nav flex-between" : "flex-between"}>
                        <span className='gap-2 align-items-center d-flex justify-content-start'>
                            <IoLocationOutline />
                            <span>Addresses</span>
                        </span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/orders'} className={(location.pathname === '/user/orders') ? "active-nav flex-between" : "flex-between"}>
                        <span className='gap-2 align-items-center d-flex justify-content-start'>
                            <IoWalletOutline />
                            <span>My Orders</span>
                        </span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/cards'} className={(location.pathname === '/user/cards') ? "active-nav flex-between" : "flex-between"}>
                        <span className='gap-2 align-items-center d-flex justify-content-start'>
                            <i className="bi bi-person-heart fs-20"></i>
                            <span>Saved Cards</span>
                        </span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/subscription'} className={(location.pathname === '/user/subscription') ? "active-nav flex-between" : "flex-between"}>
                        <span className='gap-2 align-items-center d-flex justify-content-start'>
                            <i className="bi bi-credit-card-2-back fs-20"></i>
                            <span>Subscriptions</span>
                        </span>
                        <IoIosArrowForward />
                    </NavLink>
                    <NavLink to={'/user/giftcard'} className={(location.pathname === '/user/giftcard') ? "active-nav flex-between" : "flex-between"}>
                        <span>Gift Cards</span>
                        <IoIosArrowForward />
                    </NavLink>
                    <Link to={'/'} className='flex-between'>
                        <span>Sign Out</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserHeader
