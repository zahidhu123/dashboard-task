import React from 'react'
import './sidebar.css'
import { MdFormatListBulleted, MdNotificationsNone, MdGridView, MdPanoramaFishEye, MdPersonOutline } from 'react-icons/md';
import Avatar0 from '../../../assets/avatar0.png';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <div className=''>
                <div className='sidebar-box px-4'>
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-bolt bolt-img" />
                            <NavLink to={'/smartup'}>
                            <p className='smartup m-0'>Smartup</p>
                            </NavLink>
                        </div>
                        <MdFormatListBulleted />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar0} alt="image" className='avatar-img' />
                            <NavLink to={'/profile'}><p className='profile m-0'>Profile</p></NavLink>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='num-style'>12</span>
                            <MdNotificationsNone className='notification-img' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <MdGridView className='fs-6 me-3' />
                       <NavLink to={'/header'}> <p className='smartup m-0'>Discover</p></NavLink>  
                        </div>
                        <span className='num-twenty'>24</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <MdPanoramaFishEye className='fs-6 me-3' />
                            <NavLink to={'/smartup'} ><p className='smartup m-0'>SmartUp</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar0} alt="image" className='avatar-img' />
                            <NavLink to={'/man-community'}><p className='profile m-0'>Man community</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar0} alt="image" className='avatar-img' />
                            <NavLink to={'/fun-community'}><p className='profile m-0'>Fun community</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar0} alt="image" className='avatar-img' />
                            <NavLink to={'/tech-community'}><p className='profile m-0'>Tech community</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar0} alt="image" className='avatar-img' />
                            <NavLink to={'/lead-community'}><p className='profile m-0'>Lead community</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <MdPersonOutline className='fs-4 me-2' />
                            <NavLink to={'/personal'}><p className='smartup m-0'>Personal</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/progress'}><p className='profile m-0 ps-4'>In Progress</p></NavLink>
                        </div>
                        <span className='num-style'>180</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/completed'}><p className='profile m-0 ps-4'>Completed</p></NavLink>
                        </div>
                        <span className='num-style'>48</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/read'}><p className='profile m-0 ps-4'>Read Later</p></NavLink>  
                        </div>
                        <span className='num-style'>24</span>
                    </div>
                </div>
                <div className='px-4 mt-3'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-bolt bolt-img1" />
                            <NavLink to={'/about'}><p className='profile m-0 ps-3'>About SmartUp</p></NavLink>
                            
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'feedback'}><p className='profile m-0 ps-4'>Send Feedback</p></NavLink>
                            
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/teams'}><p className='profile m-0 ps-4'>Tems of use</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/privacy'}><p className='profile m-0 ps-4'>Privacy Policy</p></NavLink>
                            
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className='ps-4 d-flex justify-content-between w-100'>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                            <p className='profile m-0 ps-4'>@ 2018 smartup.io</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
