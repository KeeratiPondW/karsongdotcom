import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"
import Style from '../../styles/dashboard.module.css'
import Weblogo from '../../public/weblogo.png'
import { Drawer } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import AddCompany from '../../components/AddCompany'
import AddProduct from '../../components/AddProduct'
import AllList from '../../components/AllList'
import Chat from '../../components/Chat'
import Overview from '../../components/Overview'
import User from '../../components/User'

const Dashboard = () => {
    const router = useRouter()
    const { page, pid } = router.query //pid="dashboard"
    //http://localhost:3000/dashboard/dashboard?page=alllist

    console.log(pid)
    console.log(page)

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className={Style.container}>
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
                    <h3>Keerati Chuatanapinyo&emsp;</h3>
                    <Image src='/noti.png' width={22} height={22} />
                    <Image src='/logout.png' width={20} height={20} />
                    <button className={Style.help} onClick={() => router.push('/help')}>
                        &emsp;ศูนย์ช่วยเหลือ&emsp;
                    </button>
                </div>
                <button onClick={showDrawer} className={Style.menu}>
                    <MenuUnfoldOutlined style={{ fontSize: "25px" }} />
                </button>
            </div>
            <div className={Style.comp2}>
                <div onClick={() => router.push('/dashboard/dashboard?page=overview')}>
                    <Image src='/home.png' width={20} height={20} />
                    &emsp;
                    Overview
                </div>
                <div onClick={() => router.push('/dashboard/dashboard?page=alllist')}>
                    <Image src='/list.png' width={20} height={20} />
                    &emsp;All Lists
                </div>
                <div onClick={() => router.push('/dashboard/dashboard?page=addproduct')}>
                    <Image src='/box.png' width={20} height={20} />
                    &emsp;Add Product</div>
                <div onClick={() => router.push('/dashboard/dashboard?page=addcompany')}>
                    <Image src='/company.png' width={20} height={20} />
                    &emsp;Add Company
                </div>
                <div onClick={() => router.push('/dashboard/dashboard?page=user')}>
                    <Image src='/user.png' width={20} height={20} />
                    &emsp;User
                </div>
                <div onClick={() => router.push('/dashboard/dashboard?page=chat')}>
                    <Image src='/chat.png' width={20} height={20} />
                    &emsp;Chat
                </div>
            </div>
            <div className={Style.comp3}>
                {page == "overview" ? <Overview /> : ""}
                {page == "alllist" ? <AllList current={0} /> : ""}
                {page == "allproduct" ? <AllList current={1} /> : ""}
                {page == "allbusiness" ? <AllList current={2} /> : ""}
                {page == "addproduct" ? <AddProduct /> : ""}
                {page == "addcompany" ? <AddCompany /> : ""}
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
                <div onClick={() => router.push('/login')} className={Style.menuitem}>
                    ศูนย์ช่วยเหลือ
                </div>
                <div onClick={() => router.push('/help')} className={Style.menuitem}>
                    ออกจากระบบ
                </div>
            </Drawer>
        </div>
    )
}

export default Dashboard