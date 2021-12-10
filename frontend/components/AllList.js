import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Style from '../styles/AllList.module.css'

const AllList = ({ current }) => {
    const router = useRouter()
    const [items, setItems] = useState([
        {
            type: "product",
            published: "12/5/2555",
            exp: "12/5/2556"
        },
        {
            type: "product",
            published: "12/5/2556",
            exp: "12/5/2557"
        },
        {
            type: "business",
            published: "12/5/2557",
            exp: "12/5/2558"
        },
        {
            type: "product",
            published: "12/5/2558",
            exp: "12/5/2559"
        },
        {
            type: "business",
            published: "12/5/2559",
            exp: "12/5/2560"
        },
    ])

    useEffect(()=>{
        console.log(items.filter(item => item.type === "product").length)
    }, [items])

    return (
        <div className={Style.frame}>
            <div className={Style.menu}>
                <button style={{ borderBottom: current == 0 ? "3px solid red" : "none" }} onClick={() => router.push("/dashboard/dashboard?page=alllist")}>
                    รายการทั้งหมด
                </button>
                <button style={{ borderBottom: current == 1 ? "3px solid red" : "none" }} onClick={() => router.push("/dashboard/dashboard?page=allproduct")}>
                    สินค้า/รายการ
                </button>
                <button style={{ borderBottom: current == 2 ? "3px solid red" : "none" }} onClick={() => router.push("/dashboard/dashboard?page=allbusiness")}>
                    ธุรกิจ/บริการ
                </button>
            </div>
            {
                current == 0 ?
                    <table className={Style.table}>
                        <tr className={Style.th}>
                            <th>ลำดับ</th>
                            <th>รายการ</th>
                            <th>ลงวันที่</th>
                            <th>หมดอายุ</th>
                            <th>แก้ไข</th>
                        </tr>
                        {items.map(item =>
                            <Table data={item} />
                        )}
                    </table> : ""
            }
            {
                current == 1 ?
                    <table className={Style.table}>
                        <thead>
                            <tr className={Style.th}>
                                <th>ลำดับ</th>
                                <th>รายการ</th>
                                <th>ลงวันที่</th>
                                <th>หมดอายุ</th>
                                <th>แก้ไข</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                if (item.type === "product") {
                                    return (
                                        <Table data={item} index={index + 1} />
                                    )
                                }
                            })}
                        </tbody>
                    </table> : ""
            }
            {
                current == 2 ?
                    <table className={Style.table}>
                        <tr className={Style.th}>
                            <th>ลำดับ</th>
                            <th>รายการ</th>
                            <th>ลงวันที่</th>
                            <th>หมดอายุ</th>
                            <th>แก้ไข</th>
                        </tr>
                        {items.map(item => {
                            if (item.type === "business") {
                                return (
                                    <Table data={item} />
                                )
                            }
                        })}
                    </table> : ""
            }


            {/* <div className={Style.nodataicon}>
                <Image src="/nodata.png" objectFit="contain" layout="fill"/>
            </div> */}
        </div>
    )
}

const Table = ({ data, index }) => {
    return (
        <tr className={Style.td}>
            <td>{index}</td>
            <td style={{ display: "flex", gap: "20px" }}>
                <Image src="/box2.png" width={100} height={100} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor posuere feugiat. Cras facilisis luctus ligula quis faucibus. </p>
            </td>
            <td>{data.published}</td>
            <td>{data.exp}</td>
            <td style={{ cursor: "pointer", color: "brown" }}>แก้ไข</td>
        </tr>
    )
}

export default AllList