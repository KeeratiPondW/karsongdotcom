import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie'
import Style from '../../styles/dashboard.module.css'
import Weblogo from '../../public/weblogo.png'
import { Drawer } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import AllList from '../../components/AllList'
import Chat from '../../components/Chat'
import Overview from '../../components/Overview'
import User from '../../components/User'

import api from '../../api/api'
import axios from 'axios'

const Dashboard = ({ data }) => {
    const router = useRouter()
    const [cookies, removeCookie] = useCookies(['token'])
    const { page, pid } = router.query //pid="dashboard"
    //http://localhost:3000/dashboard/dashboard?page=alllist

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    ////////////////////////////////////////////////
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userId, setUserId] = useState(-1)
    const [username, setUsername] = useState("")

    useEffect(async () => {
        try {
            const result = await axios.get(api.isloggedin, { headers: { 'x-access-token': data.token } })
            if (result.data.auth) {
                setIsLoggedIn(true)
                setUserId(result.data.data.id)
                setUsername(result.data.data.username)
            } else {
                setIsLoggedIn(false)
                router.push("/login")
            }
            console.log(result.data)
        } catch (err) {
            console.log(err)
        }
    }, [data])

    const logout = () => {
        removeCookie("token")
        router.push("/login")
    }

    return (
        <div className={Style.container}>
            <Head>
                <title>Karsong | Dashboard</title>
                <meta name="description" content="" />
            </Head>
            <div className={Style.comp1}>
                <div style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                    <div className={Style.logo}>
                        <Image src={Weblogo} alt="web logo" objectFit="contain" layout="fill" />
                    </div>
                    <div className={Style.breadcrumb}>
                        &gt; {page}
                    </div>
                </div>
                <div className={Style.rightcomp1}>
                    <Image src='/user.png' width={30} height={30} />
                    <h3>{username}&emsp;</h3>
                    <Image src='/noti.png' width={22} height={22} />
                    <Image src='/logout.png' width={20} height={20} onClick={logout} />
                    <button className={Style.help} onClick={() => router.push('/help')}>
                        &emsp;ศูนย์ช่วยเหลือ&emsp;
                    </button>
                </div>
                <button onClick={showDrawer} className={Style.menu}>
                    <MenuUnfoldOutlined style={{ fontSize: "25px" }} />
                </button>
            </div>
            <div className={Style.comp2}>
                {/* <div onClick={() => router.push('/dashboard/dashboard?page=overview')}>
                    <Image src='/home.png' width={20} height={20} />
                    &emsp;
                    Overview
                </div> */}
                <div onClick={() => router.push('/dashboard/dashboard?page=alllist')}>
                    <Image src='/list.png' width={20} height={20} />
                    &emsp;All Lists
                </div>
                <div onClick={() => router.push('/dashboard/addproduct')}>
                    <Image src='/box.png' width={20} height={20} />
                    &emsp;Add Product</div>
                <div onClick={() => router.push('/dashboard/addcompany')}>
                    <Image src='/company.png' width={20} height={20} />
                    &emsp;Add Company
                </div>
                <div onClick={() => router.push('/dashboard/dashboard?page=user')}>
                    <Image src='/user.png' width={20} height={20} />
                    &emsp;User
                </div>
                {/* <div onClick={() => router.push('/dashboard/dashboard?page=chat')}>
                    <Image src='/chat.png' width={20} height={20} />
                    &emsp;Chat
                </div> */}
            </div>
            <div className={Style.comp3}>
                {page == "overview" ? <Overview /> : ""}
                {page == "alllist" ? <AllList current={0} /> : ""}
                {page == "allproduct" ? <AllList current={1} /> : ""}
                {page == "allbusiness" ? <AllList current={2} /> : ""}
                {page == "user" ? <User /> : ""}
                {page == "chat" ? <Chat /> : ""}
            </div>
            <Drawer
                className={Style.drawer}
                title="Keerati Chuatanapinyo"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=overview')
                    setVisible(false)
                }}>
                    Overview
                </div>
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=alllist')
                    setVisible(false)
                }}>
                    All Lists
                </div>
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=addproduct')
                    setVisible(false)
                }}>
                    Add Product
                </div>
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=addcompany')
                    setVisible(false)
                }}>
                    Add Company
                </div>
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=user')
                    setVisible(false)
                }}>
                    User
                </div>
                <div className={Style.menuitem} onClick={() => {
                    router.push('/dashboard/dashboard?page=chat')
                    setVisible(false)
                }}>
                    Chat
                </div>
                <div onClick={() => router.push('/help')} className={Style.menuitem}>
                    ศูนย์ช่วยเหลือ
                </div>
                <div onClick={logout} className={Style.menuitem}>
                    ออกจากระบบ
                </div>
            </Drawer>
        </div>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    const { cookies } = req

    return {
        props: { data: cookies }
    }
}

export default Dashboard