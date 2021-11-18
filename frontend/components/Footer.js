import Link from 'next/link'
import Image from 'next/image'
import Style from '../styles/Footer.module.css'
import Facebook from '../public/facebook.png'
import Line from '../public/line.png'

const Footer = () => {
    return (
        <div>
            <div className={Style.line}></div>
            <div className={Style.footer}>
                <div className={Style.comp1}>
                    <h3>ศูนย์ช่วยเหลือ</h3><br />
                    <Link href="/help"><a>ความช่วยเหลือ</a></Link><br />
                    <Link href="/"><a>ลงสินค้า/รายการอย่างไร</a></Link><br />
                    <Link href="/help"><a>ความช่วยเหลือ</a></Link><br />
                    <Link href="/"><a>ลงสินค้า/รายการอย่างไร</a></Link><br />
                    <Link href="/"><a>ลงสินค้า/รายการอย่างไร</a></Link><br />
                </div>
                <div className={Style.comp2}>
                    <h3>นโยบาย</h3>
                    <br />
                    <Link href="/help"><a>นโยบาย</a></Link><br />
                </div>
                <div className={Style.comp3}>
                    <h3>ติดตามเรา</h3><br />
                    <div style={{ display: "flex" }}>
                        <Image src={Facebook} width={20} height={20} />
                        &emsp;
                        <Link href="/"><a>facebook</a></Link>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Image src={Line} width={20} height={20} />
                        &emsp;
                        <Link href="/"><a>facebook</a></Link>
                    </div>
                </div>
                <div className={Style.comp4}>
                    <h3>ดูโปรโมชั่นอื่นๆได้ ที่นี่</h3><br />
                    <Image
                        src="https://drive.google.com/uc?id=1424immAQeFTBBy1ZnFvyhlwBb-tlMBDi"
                        width={150}
                        height={150}
                    />
                </div>
                <div className={Style.line2}></div>
                <div className={Style.copyright}>
                    © 2021 Karsong.com All Rights Reserved Thailand
                </div>
            </div>
        </div>
    )
}

export default Footer