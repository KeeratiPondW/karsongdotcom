import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Popover } from 'antd'
import Style from '../styles/AllList.module.css'

const AllList = ({ current }) => {
    const router = useRouter()
    const [items, setItems] = useState([
        {
            type: "product",
            published: "12/5/2555",
            exp: "12/5/2556",
            display: false
        },
        {
            type: "product",
            published: "12/5/2556",
            exp: "12/5/2557",
            display: true
        },
        {
            type: "business",
            published: "12/5/2557",
            exp: "12/5/2558",
            display: false
        },
        {
            type: "product",
            published: "12/5/2558",
            exp: "12/5/2559",
            display: false
        },
        {
            type: "business",
            published: "12/5/2559",
            exp: "12/5/2560",
            display: true
        },
    ])

    useEffect(() => {
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
                        <thead>
                            <tr className={Style.th}>
                                <th>ลำดับ</th>
                                <th>รายการ</th>
                                <th>ต่ออายุ</th>
                                <th>หมดอายุ</th>
                                <th>แก้ไข</th>
                            </tr>
                        </thead>
                        {items.map((item, index) =>
                            <Table data={item} key={index} />
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
                                <th>ต่ออายุ</th>
                                <th>หมดอายุ</th>
                                <th>แก้ไข</th>
                            </tr>
                        </thead>
                        {items.map((item, index) => {
                            if (item.type === "product") {
                                return (
                                    <Table data={item} key={index} />
                                )
                            }
                        })}
                    </table> : ""
            }
            {
                current == 2 ?
                    <table className={Style.table}>
                        <thead>
                            <tr className={Style.th}>
                                <th>ลำดับ</th>
                                <th>รายการ</th>
                                <th>ต่ออายุ</th>
                                <th>หมดอายุ</th>
                                <th>แก้ไข</th>
                            </tr>
                        </thead>
                        {items.map((item, index) => {
                            if (item.type === "business") {
                                return (
                                    <Table data={item} key={index} />
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
    const [visible, setVisible] = useState(false)

    const hide = () => {
        setVisible(false)
    };

    const handleVisibleChange = visible => {
        setVisible(visible)
    };

    return (
        <tbody>
            <tr className={Style.td}>
                <td>{index}</td>
                <td style={{ display: "flex", gap: "20px" }}>
                    <Image src="/box2.png" width={100} height={100} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor posuere feugiat. Cras facilisis luctus ligula quis faucibus. </p>
                </td>
                <td>{data.published}</td>
                <td>{data.exp}</td>
                <td>
                    <p style={{ cursor: "pointer", color: "blue" }}>แก้ไข</p>
                    <Popover
                        content={
                            data.display === true ? <a>ไม่แสดง</a> : <a>แสดง</a>
                        }
                        // title="Title"
                        placement="left"
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        {
                            data.display === true && <p style={{ cursor: "pointer", color: "green" }}>แสดง</p>
                        }
                        {
                            data.display === false && <p style={{ cursor: "pointer", color: "red" }}>ไม่แสดง</p>
                        }

                    </Popover>
                </td>
            </tr>
        </tbody>
    )
}

export default AllList