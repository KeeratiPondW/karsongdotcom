import React, { useState, useEffect } from 'react'
import Style from './Card.module.css'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

const Card = ({ i, deleteCard }) => {
    // const [index, setIndex] = useState(0)

    // useEffect(() => {
    //     setIndex(i)
    // }, [i])

    return (
        <div className={Style.frame}>
            <div className={Style.innerframe}>

            </div>
            <div className={Style.text}>
                <textarea
                    className={Style.textarea}
                    placeholder="ใส่คำอธิบายโดยย่อ"
                    autoSize={{ minRows: 2, maxRows: 2 }}
                />

            </div>
            <div className={Style.icongroup}>
                <div>
                    <PlusOutlined style={{ fontSize: "25px", color: 'goldenrod' }} />{" "}
                </div>
                <div onClick={deleteCard} style={{ display: i == 0 ? "none" : "" }}>
                    <DeleteOutlined style={{ fontSize: "25px", color: 'red' }} />
                </div>
            </div>

        </div>
    )
}

export default Card