import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import Style from '../../styles/VerifyPid.module.css'
import Sign from '../../public/sign.png'
import NotFound from '../../public/notfound2.png'

const VerifyPid = () => {
    const [status, setStatus] = useState(true)

    return (
        <div className={Style.container} style={{ background: status ? "rgb(244, 221, 203)" : "rgb(222,222,222)" }}>
            <div className={Style.verify}>
                {
                    status ?
                        <>
                            <div className={Style.image}>
                                <Image src={Sign} layout="fill" objectFit="contain" />
                            </div>
                            <p className={Style.text}>บัญชีของคุณได้รับการยืนยันตัวตนแล้ว</p>
                            <p>keeratipond1203@gmail.com</p>
                            <p>ขอบคุณที่สมัครสมาชิก ขณะนี้คุณสามารถเข้าสู่ระบบและเข้าใช้งานได้ทันที ลิงค์นี้จะหมดอายุทันทีที่คุณยืนยันตัวตนสำเร็จแล้ว</p>
                            <br />
                            <button className={Style.loginbutton}>เข้าสู่ระบบ</button>
                        </> :
                        <>
                            <div className={Style.image}>
                                <Image src={NotFound} layout="fill" objectFit="contain" />
                            </div>
                            <h2>ไม่พบหน้าที่คุณต้องการหรือลิงค์ดังกล่าวหมดอายุแล้ว</h2>
                        </>
                }
            </div>
        </div>
    )
}



export default VerifyPid