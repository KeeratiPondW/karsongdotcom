import { useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"
import Image from 'next/image'
import Logo from '../../public/karsonglogo2.png'
import { Drawer } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import Style from '../../styles/HelpCenter.module.css'
import { route } from "next/dist/server/router"

const HelpCenter = () => {
    const router = useRouter()
    const { pid } = router.query
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const goToHome = () => {
        router.push('/')
    }

    return (
        <div>
            <div className={Style.navbar}>
                <div className={Style.logo}>
                    <Image src={Logo} layout="fill" objectFit="contain" onClick={goToHome} />
                </div>
                <div className={Style.rightnav}>
                    <button onClick={() => router.push('/login')}>&emsp;เข้าสู่ระบบ&emsp;</button>
                    <button onClick={() => router.push('/register')}>&emsp;สมัครสมาชิก&emsp;</button>
                    <button onClick={showDrawer}>&nbsp;<MenuUnfoldOutlined />&nbsp;</button>
                </div>
            </div>
            <div className={Style.content}>
                <div className={Style.menu}>
                    <Link href="/help/policy"><a>นโยบายแพลตฟอร์ม</a></Link><br />
                    <Link href="/help/addproduct"><a>ลงสินค้าอย่างไร</a></Link><br />
                    <Link href="/help/addcompany"><a>ลงข้อมูลธุรกิจอย่างไร</a></Link><br />
                    <Link href="/help/payment"><a>ชำระเงินอย่างไร</a></Link><br />
                    <Link href="/help/question"><a>คำถามที่พบบ่อย</a></Link><br />
                </div>
                <div className={Style.contentofmenu}>
                    <p style={{ color: "steelblue" }}>
                        <span onClick={() => router.push('/help')} style={{ cursor: "pointer" }}>support</span> &gt;
                        {pid}
                    </p>
                    {pid == "policy" && <h1>นโยบาย</h1>}
                    {pid == "addproduct" && <h1>ลงสินค้าอย่างไร</h1>}
                    {pid == "addcompany" && <h1>ลงข้อมูลธุรกิจอย่างไร</h1>}
                    {pid == "payment" && <h1>การชำระเงิน</h1>}
                    {pid == "question" && <h1>คำถามที่พบบ่อย</h1>}
                </div>
            </div>
            <div className={Style.footer}>
                © 2021 Karsong.com All Rights Reserved Thailand
            </div>
        </div>
    )
}

export default HelpCenter