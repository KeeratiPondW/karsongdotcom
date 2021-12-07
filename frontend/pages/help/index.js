import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Style from '../../styles/Help.module.css'
import Logo from '../../public/weblogo.png'
import { Drawer } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

const Help = () => {
    const router = useRouter()
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div style={{ position: "relative", background: "whitesmoke" }}>
            <Head>
                <title>Karsong | Help</title>
            </Head>
            <div className={Style.navbar}>
                <div className={Style.logo}>
                    <Image src={Logo} layout="fill" objectFit="contain" />
                </div>
                <div className={Style.rightnav}>
                    <button onClick={() => router.push('/login')}>&emsp;เข้าสู่ระบบ&emsp;</button>
                    <button onClick={() => router.push('/register')}>&emsp;สมัครสมาชิก&emsp;</button>
                    <button onClick={showDrawer}>&nbsp;<MenuUnfoldOutlined />&nbsp;</button>
                </div>
            </div>
            <div className={Style.undernav}>
                <div className={Style.text1}>เราจะช่วยเหลือคุณได้อย่างไร</div>
                <div className={Style.text2}>โปรดเลือกหัวข้อที่คุณต้องการด้านล่าง</div>
            </div>
            <div className={Style.content}>
                <div className={Style.box}>
                    <Image src='/policy.png' width="130px" height="130px" />
                    <div style={{ paddingLeft: '20px' }}>
                        <p className={Style.text3}>นโยบายแพลตฟอล์ม</p>
                        <p className={Style.text4}></p>
                    </div>
                </div>
                <div className={Style.box}>
                    <Image src='/box2.png' width="130px" height="130px" />
                    <div style={{ paddingLeft: '20px' }}>
                        <p className={Style.text3}>ลงสินค้าอย่างไร</p>
                        <p className={Style.text4}></p>
                    </div>
                </div>
                <div className={Style.box}>
                    <Image src='/company2.png' width="130px" height="130px" />
                    <div style={{ paddingLeft: '20px' }}>
                        <p className={Style.text3}>ลงข้อมูลธุรกิจอย่างไร</p>
                        <p className={Style.text4}></p>
                    </div>
                </div>
                <div className={Style.box}>
                    <Image src='/payment.png' width="130px" height="130px" />
                    <div style={{ paddingLeft: '20px' }}>
                        <p className={Style.text3}>ชำระเงินอย่างไร</p>
                        <p className={Style.text4}></p>
                    </div>
                </div>
                <div className={Style.box}>
                    <Image src='/question.png' width="130px" height="130px" />
                    <div style={{ paddingLeft: '20px' }}>
                        <p className={Style.text3}>คำถามที่พบบ่อย</p>
                        <p className={Style.text4}></p>
                    </div>
                </div>
                {/* <div className={Style.box}>

                </div> */}
            </div>
            <div className={Style.footer}>
                © 2021 Karsong.com All Rights Reserved Thailand
            </div>
            <Drawer title="เมนู" placement="right" onClose={onClose} visible={visible}>
                <p onClick={() => router.push('/login')}>เข้าสู่ระบบ</p>
                <p onClick={() => router.push('/register')}>สมัครสมาชิก</p>
            </Drawer>
        </div >
    )
}

export default Help