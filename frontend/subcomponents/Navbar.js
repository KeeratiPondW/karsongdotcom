import React, { useState } from 'react'
import Image from 'next/image'
import Style from './Navbar.module.css'
import Logo from '../public/weblogo.png'
import WebLogo from '../public/karsonglogo.png'
import { SearchOutlined, UserOutlined, FacebookOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const Navbar = () => {
    const [isLogIn, setIsLogIn] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    // const [category, setCategory] = useState("volvo")

    // const onChangeCategory = (e) => {
    //     setCategory(e.target.value)
    //     console.log(e.target.value)
    // }

    const onClickShowMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }

    return (
        <div>
            {/* 1207 246 */}
            <div className={Style.uppernav}>
                <div className={Style.leftuppernav}>
                    ติดตามเราได้บน &nbsp;
                    <FacebookOutlined />
                </div>
                <div className={Style.rightuppernav}>
                    {
                        isLogIn &&
                        <>
                            <button>
                                ลงข้อมูลธุรกิจ
                            </button>
                            <button>
                                <UserOutlined className={Style.rightuppernavicon} /> &nbsp;
                                KeeratiChuatanapinyo
                            </button>

                        </>

                    }

                </div>
                <MenuFoldOutlined className={Style.menuicon} onClick={onClickShowMenu} />
            </div>
            <SlideDown>
                {
                    showMenu ?
                        <div className={Style.hiddenmenu}>
                            <div>Log In</div>
                            <div>Sign Up</div>
                            <div>ลงข้อมูลธุรกิจ</div>
                            <div>
                                <button>Log Out</button> &nbsp;
                                KeeratiChuatanapinyo
                            </div>
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
                <div className={Style.nav3}>
                    {
                        isLogIn ?
                            <button className={Style.logout}>Logout</button> :
                            <>
                                <button className={Style.login}>Login</button>
                                <button className={Style.register}>Register</button>
                            </>
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar