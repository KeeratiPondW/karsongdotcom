import { useState } from 'react'
import Image from 'next/image'
import Style from '../styles/AllList.module.css'

const AllList = () => {
    const [current, setCurrent] = useState(0)
    const [items, setItems] = useState([])


    return (
        <div className={Style.frame}>
            <div className={Style.menu}>
                <button style={{ borderBottom: current == 0 ? "3px solid red" : "none" }} onClick={() => setCurrent(0)}>
                    รายการทั้งหมด
                </button>
                <button style={{ borderBottom: current == 1 ? "3px solid red" : "none" }} onClick={() => setCurrent(1)}>
                    สินค้า/รายการ
                </button>
                <button style={{ borderBottom: current == 2 ? "3px solid red" : "none" }} onClick={() => setCurrent(2)}>
                    ธุรกิจ/บริการ
                </button>
            </div>
            <table className={Style.table}>
                <tr className={Style.th}>
                    <th>ลำดับ</th>
                    <th>รายการ</th>
                    <th>ลงวันที่</th>
                    <th>หมดอายุ</th>
                    <th>แก้ไข</th>
                </tr>
                <tr className={Style.td}>
                    <td>1</td>
                    <td style={{display:"flex", gap:"20px"}}>
                        <Image src="/box2.png" width={100} height={100}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor posuere feugiat. Cras facilisis luctus ligula quis faucibus. </p>
                    </td>
                    <td>12/5/2555</td>
                    <td>19/10/2556</td>
                    <td style={{cursor:"pointer", color:"brown"}}>แก้ไข</td>
                </tr>
            </table>
            {/* <div className={Style.nodataicon}>
                <Image src="/nodata.png" objectFit="contain" layout="fill"/>
            </div> */}
        </div>
    )
}

export default AllList