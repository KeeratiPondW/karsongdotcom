import { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import { Select } from "antd"

import Navbar from '../../subcomponents/Navbar'
import CompanyCard from "../../components/CompanyCard"
import ProductCard from "../../components/ProductCard"
import Footer from '../../components/Footer'
import Style from '../../styles/UserPid.module.css'

const { Option } = Select

const UserPid = () => {
    const router = useRouter()
    const { pid } = router.query

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const [select, setSelect] = useState("business")
    function handleChange(value) {
        setSelect(value)
    }

    return (
        <div className={Style.frame}>
            <Navbar />
            <div className={Style.comp1}>
                <div className={Style.top}>
                    <div className={Style.profile}>
                        <div className={Style.profileimage}>
                            <Image src="https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2Fwp4794662.jpg?alt=media&token=3ee4e07f-b2d7-4266-bb55-f86eb8e24ab7" layout="fill" objectFit="cover" />
                            <div className={Style.filter}>
                                <div className={Style.insideprofileimage}>
                                    <Image src="https://firebasestorage.googleapis.com/v0/b/karsongarcade.appspot.com/o/images%2Fwp4794662.jpg?alt=media&token=3ee4e07f-b2d7-4266-bb55-f86eb8e24ab7" layout="fill" objectFit="cover" />
                                </div>
                                <h3 style={{ textAlign: "center", color: "white" }}>Adidas Store</h3>
                            </div>

                        </div>
                    </div>
                    <div className={Style.datacolumn1}>
                        <p>ติดต่อคุณ : Mr. Devil</p>
                        <p>เบอร์ : 0945555555</p>
                        <p>ที่อยู่ : 234/443 ม.8 ถ.ฉางซา ต.ฉงไท่หยาง อ.เหมี่ยวสี จ.คุนหมิง</p>
                        <p>Line id : gdfyetg</p>
                    </div>
                </div>
                <div className={Style.select}>
                    <Select defaultValue={select} style={{ width: 120 }} onChange={handleChange}>
                        <Option value="business">ข้อมูลธุรกิจ</Option>
                        <Option value="product">ข้อมูลสินค้า</Option>
                    </Select>
                </div>
                <div className={Style.bottom}>
                    {items.map((item, index) => {
                        if (select === "business") {
                            return (
                                <CompanyCard no={item} />
                            )
                        }
                        return (
                            <ProductCard no={item} />
                        )

                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPid