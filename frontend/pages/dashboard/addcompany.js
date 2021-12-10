import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Input, Modal, Tag } from 'antd'
import Style from '../../styles/AddCompany.module.css'
import PlusIcon from '../../public/plus.png'
import BinIcon from '../../public/bin.png'
import Card from '../../subcomponents/Card'
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import image from 'next/image'

const { TextArea } = Input

const AddCompany = () => {

    const [cardList, setCardList] = useState([0])

    const onClickDelete = (index) => e => {
        let newArray = [...cardList]
        newArray.splice(index, 1)
        setCardList(newArray)
        console.log(newArray)
    }

    const onClickAddImage = () => {
        if (cardList.length < 15) {
            let newArray = [...cardList]
            newArray.push(newArray[newArray.length - 1] + 1)
            setCardList(newArray)
            console.log(newArray)
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const [tag, setTag] = useState(['tag1', "tag2", 'tag3', 'tag4'])

    ////////////////////////////
    const [images, setImages] = useState([])
    const [imageURLs, setImageURLs] = useState([])

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = []
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs)
    }, [images])

    const onImageChange = (e) => {
        setImages([...e.target.files])
    }
    const onDeleteImage = (e) =>{
        setImages([])
        setImageURLs([])
    }
    ////////////////////////////////////////////

    return (
        <div className={Style.outerframe}>
            <div className={Style.frame}>
                <br />
                <div className={Style.top}>
                    <div className={Style.logo}>
                        <input type="file" id="img" style={{ display: "none" }} accept="image/png, image/jpg" onChange={onImageChange} />
                        {
                            images.length < 1 &&
                            <label for="img" className={Style.upload}>
                                <div className={Style.plusicon}>
                                    <Image src={PlusIcon} layout="fill" objectFit="contain" />
                                </div>
                            </label>
                        }

                        {imageURLs.length >= 1 && imageURLs.map((imageSrc, index) => <img key={index} width="400" height="150" src={imageSrc} />)}
                        {
                            imageURLs.length >= 1 &&
                            <div className={Style.binicon} onClick={onDeleteImage}>
                                <Image src={BinIcon} layout="fill" objectFit="contain" />
                            </div>
                        }

                    </div>
                    <div className={Style.name}>
                        <Input
                            style={{ width: '100%', height: '100%', fontSize: '20px' }}
                            placeholder="ใส่ชื่อบริษัท"
                        />
                    </div>
                </div>
                <div className={Style.menu}>
                    <div className={Style.menuitem}>
                        ภาพรวมธุรกิจ
                    </div>
                    <div className={Style.menuitem}>
                        สินค้า/บริการ
                    </div>
                    <div className={Style.menuitem}>
                        แกลเลอรี่
                    </div>
                    <div className={Style.menuitem}>
                        ที่อยู่
                    </div>
                </div>
                <div className={Style.content1}>
                    <h1>ภาพรวมธุรกิจ</h1>
                    <TextArea
                        style={{ fontSize: '17px' }}
                        placeholder="ใส่รายละเอียด"
                        autoSize={{ minRows: 10, maxRows: 20 }}
                    />
                </div>
                <br />
                <div className={Style.content2}>
                    <h1>สินค้า/บริการ</h1>
                    <TextArea
                        style={{ fontSize: '17px' }}
                        placeholder="ใส่รายละเอียด"
                        autoSize={{ minRows: 10, maxRows: 20 }}
                    />
                </div>
                <br />
                <div className={Style.content3}>
                    <h1>แกลเลอรี่</h1>
                    <div className={Style.innercontent3}>
                        {cardList.map((card, index) => (
                            <div>
                                <Card i={card} deleteCard={onClickDelete(index)} />
                            </div>
                        ))}
                        <div className={Style.addimage} onClick={onClickAddImage} style={{ display: cardList.length < 15 ? "" : 'none' }}>
                            <PlusOutlined className={Style.addimageicon} />
                        </div>
                    </div>
                </div>
                <br />
                <div className={Style.content4}>
                    <h1>ที่อยู่</h1>
                    <TextArea
                        style={{ fontSize: '17px' }}
                        placeholder="ใส่รายละเอียด"
                        autoSize={{ minRows: 1, maxRows: 2 }}
                    />
                    <div className={Style.coordinate}>
                        <br />
                        <div className={Style.latitude}>
                            <h3>ละติจูด</h3>&emsp;
                            <Input
                                style={{ width: "200px" }}
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                placeholder="latitude"
                            />&emsp;
                            <QuestionCircleOutlined
                                className={Style.questionicon}
                                onClick={() => setIsModalVisible(true)}
                            />
                        </div><br />
                        <div className={Style.longitude}>
                            <h3>ลองจิจูด</h3>&emsp;
                            <Input
                                style={{ width: "200px" }}
                                value={longitude}
                                onChange={e => setLongitude(e.target.value)}
                                placeholder="longitude"
                            />
                            &emsp;
                            <a>https://www.google.com/maps/place/{latitude},{longitude}</a>
                        </div>
                    </div>
                </div>
                <br />
                <div className={Style.content5}>
                    <h1>คำค้นหา(Tag)</h1>
                    <div className={Style.tag}>
                        {tag.map(t =>
                            <Tag color="magenta" style={{ fontSize: "18px", padding: '5px', marginBottom: "5px" }}>
                                {t}
                            </Tag>
                        )}
                    </div>
                </div>
                <div className={Style.submitzone}>
                    <button>บันทึกฉบับร่าง</button>
                    <button>บันทึกและเผยแฟร่</button>
                </div>
            </div>
            <Modal
                title="วิธีกรอกพิกัดละติจูดและลองจิจูด"
                visible={isModalVisible}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
            >
                1. คัดลอกพิกัดจาก google map <br />
                2. ใส่พิกัดได้ 3 รูปแบบคือ DMS, DMM, DD
                <ul>
                    <li>2.1 องศา ลิปดา และฟิลิปดา (DMS):
                        <ul>
                            <li>ละติจูด 41°24'12.2"N</li>
                            <li>ลองจิจูด 2°10'26.5"E</li>
                        </ul>
                    </li>
                    <li>2.2 องศาและลิปดาทศนิยม (DMM):
                        <ul>
                            <li>ละติจูด 41 24.2028</li>
                            <li>ลองจิจูด 2 10.4418</li>
                        </ul>
                    </li>
                    <li>2.3 องศาทศนิยม (DD):
                        <ul>
                            <li>ละติจูด 41.40338</li>
                            <li>ลองจิจูด 2.17403</li>
                        </ul>
                    </li>
                </ul>
            </Modal>
        </div>
    )
}


export default AddCompany