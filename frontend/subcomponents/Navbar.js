import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Style from './Navbar.module.css'
import WebLogo from '../public/karsonglogo.png'
import { SearchOutlined, UserOutlined, FacebookOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const Navbar = ({ isLoggedIn, id, username }) => {
    const router = useRouter()
    const [cookies, removeCookie] = useCookies(['token'])
    const [showMenu, setShowMenu] = useState(false)

    const onClickShowMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }

    const goToDashboard = () => {
        router.push('/dashboard/dashboard?page=alllist')
    }

    const logout = () =>{
        removeCookie("token")
        router.push("/login")
    }

    return (
        <div>
            <div className={Style.uppernav}>
                <div className={Style.leftuppernav}>
                    ติดตามเราได้บน &nbsp;
                    <FacebookOutlined />
                </div>
                <div className={Style.rightuppernav}>
                    {
                        isLoggedIn ?
                            <>
                                <button>
                                    <UserOutlined className={Style.rightuppernavicon} /> &nbsp;
                                    {username} |
                                </button>
                                <button onClick={goToDashboard}>
                                    ลงข้อมูลธุรกิจ |
                                </button>
                                <button onClick={logout}>ออกจากระบบ |</button>


                            </> :
                            <>
                                <button onClick={() => router.push('/login')}>เข้าสู่ระบบ |</button>
                                <button onClick={() => router.push('/register')}>สมัครสมาชิก |</button>
                            </>

                    }

                </div>
                <MenuFoldOutlined className={Style.menuicon} onClick={onClickShowMenu} />
            </div>
            <SlideDown>
                {
                    showMenu ?
                        <div className={Style.hiddenmenu}>
                            {
                                isLoggedIn ?
                                    <>
                                        <div onClick={goToDashboard}>ลงข้อมูลธุรกิจ</div>
                                        <div>
                                            <button onClick={logout}>Log Out</button> &nbsp;
                                            {username}
                                        </div>
                                    </> :
                                    <>
                                        <div onClick={() => router.push('/login')}>Log In</div>
                                        <div onClick={() => router.push("/register")}>Sign Up</div>
                                    </>
                            }
                        </div> : null
                }
            </SlideDown>
            <div className={Style.navbar}>
                <div className={Style.nav1}>
                    <Image src={WebLogo} alt="web logo" layout="fill" objectFit="contain" />
                </div>
                <div className={Style.nav2}>
                    {/* <select name="cars" value={category} onChange={onChangeCategory}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select> */}
                    <input type='text' />
                    <button><SearchOutlined className={Style.searchicon} /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar