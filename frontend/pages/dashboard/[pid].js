import Image from 'next/image'
import { useRouter } from "next/router"
import Style from '../../styles/dashboard.module.css'
import Weblogo from '../../public/weblogo.png'

import AddCompany from '../../components/AddCompany'
import AddProduct from '../../components/AddProduct'
import AllList from '../../components/AllList'
import Chat from '../../components/Chat'
import Overview from '../../components/Overview'
import User from '../../components/User'

const Dashboard = () => {
    const router = useRouter()
    const { page, pid } = router.query //pid="dashboard"

    console.log(pid)
    console.log(page)

    return (
        <div className={Style.container}>
            <div className={Style.comp1}>
                <Image src={Weblogo} alt="web logo" width={200} height={60} />
            </div>
            <div className={Style.comp2}>
                <h1>Overview</h1>
                <div className={Style.userzone}>
                    <Image src='/user.png' width={30} height={30} />&emsp;
                    <h3>Keerati Chuatanapinyo</h3>&emsp;&emsp;
                    <div className={Style.notiimage}>
                        <Image src='/noti.png' width={22} height={22} />
                    </div>
                    &emsp;
                    <div className={Style.logoutimage}>
                        <Image src='/logout.png' width={20} height={20} />
                    </div>
                    
                    &emsp;&emsp;
                    <div className={Style.help}>
                        &emsp;ศูนย์ช่วยเหลือ&emsp;
                    </div>
                </div>
            </div>
            <div className={Style.menu}>
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
            <div className={Style.content}>
                {page == "overview" ? <Overview/> : ""}
                {page == "alllist" ? <AllList/> : ""}
                {page == "addproduct" ? <AddProduct/> : ""}
                {page == "addcompany" ? <AddCompany/> : ""}
                {page == "user" ? <User/> : ""}
                {page == "chat" ? <Chat/> : ""}
            </div>
        </div>
    )
}

export default Dashboard