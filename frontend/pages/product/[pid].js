import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Style from '../../styles/ProductPid.module.css'
import { Menu } from 'antd'
import { ShopOutlined, CheckCircleOutlined } from '@ant-design/icons'

import Navbar from '../../subcomponents/Navbar'
import Footer from '../../components/Footer'

const ProductPid = () => {
    const router = useRouter()
    const { pid } = router.query

    const [images, setImages] = useState([
        "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        "https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2FAsset%201.png?alt=media&token=081706ac-6de8-4b15-9bf5-c23a1645f5ac",
        "https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2FUntitled-1.png?alt=media&token=79dc2f8a-7ae9-4ed2-8c9a-f74924fe6f03",
        "https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2Fwp4794662.jpg?alt=media&token=3ee4e07f-b2d7-4266-bb55-f86eb8e24ab7",
        "https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2F22-222602_qoobee-friends.jpg?alt=media&token=0dabb065-f725-4bcf-8bd8-3d5db40f9630",
        "https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2Fqoobee1.png?alt=media&token=eb57a9d9-5e2c-4228-9abc-ba04afab5974"
    ])

    const [isCopied, setIsCopied] = useState(false)
    const copyLink = () => {
        navigator.clipboard.writeText(`https://karsongarcade.com/${pid}`)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }

    const onClickSwapImage = (x) => {
        let newArr = [...images]
        const item = newArr[x]
        newArr.splice(x, 1)
        newArr.splice(0, 0, item)
        setImages(newArr)
    }

    const [currentMenu, setCurrentMenu] = useState("detail")
    const handleClick = e => {
        console.log('click ', e.key);
        setCurrentMenu(e.key)
    };

    return (
        <div className={Style.frame}>
            <Navbar />
            <div className={Style.container}>
                <div className={Style.firstcomp}>
                    <div className={Style.imagezone}>

                        {images.map((image, index) => {
                            if (index === 0) {
                                return (
                                    <div key={index} className={Style.firstimage}>
                                        <Image src={image} layout='fill' objectFit='contain' />
                                    </div>
                                )
                            }
                            return (
                                <div key={index} className={Style.otherimages} onClick={() => onClickSwapImage(index)}>
                                    <Image src={image} layout='fill' objectFit='contain' />
                                </div>
                            )
                        })}

                    </div>
                    <div className={Style.datazone}>
                        <h2>เตียงนอนพับได้หลากหลายฟังก์ชั่น สามารถทำเป็นโซโฟนั่งได้ และที่พักผ่อน เตียงนอนพับได้ เตียงนอน เตียงนอนพับได้ เตียงพับ</h2>
                        <h1 className={Style.price}>&#3647;2000 - &#3647;3000</h1>
                        <p>ขั้นต่ำ 50 (ต่อรองได้)</p>
                        <p>คลัง 2000</p>
                        <p>ติดต่อทาง : 0948888888</p>
                        {/* <div>
                            แชร์ไปยัง
                        </div> */}
                        <u style={{ color: "orange", cursor: "pointer" }} onClick={copyLink}>
                            คัดลอกลิงค์
                            {
                                isCopied ? <>&emsp;<CheckCircleOutlined style={{ color: "green" }} /></> : ""
                            }
                        </u>
                    </div>
                </div>
                <br />
                <div className={Style.secondcomp}>
                    <div className={Style.avatar}>
                        <Image src="https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" layout='fill' objectFit='contain' />
                    </div>
                    <div className={Style.profile}>
                        <p>
                            My Shop<br />
                            ลงสินคาเมื่อ 2 เดือนที่แล้ว
                        </p>
                        <button className={Style.gotoshop}>
                            <ShopOutlined />
                            &nbsp;ดูรายการอื่นๆ
                        </button>
                    </div>
                </div>
                <br />
                <div className={Style.thirdcomp}>
                    <Menu onClick={handleClick} selectedKeys={[currentMenu]} mode="horizontal">
                        <Menu.Item key="detail" >
                            รายละเอียดสินค้า
                        </Menu.Item>
                        <Menu.Item key="location" >
                            สถานที่
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPid