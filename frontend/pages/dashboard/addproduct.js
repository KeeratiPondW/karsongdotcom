import { useState } from "react"
import Head from 'next/head'
import Image from "next/image"
import Weblogo from '../../public/weblogo.png'
import { Drawer, Input, Cascader } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import UploadImage from "../../subcomponents/UploadImage"
import Style from '../../styles/AddProduct.module.css'

const { TextArea } = Input

const AddProduct = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onChangeCascade = (value) => {
        console.log(value);
    }

    return (
        <div className={Style.frame}>
            <div className={Style.comp1}>
                <div style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                    <div className={Style.logo}>
                        <Image src={Weblogo} alt="web logo" objectFit="contain" layout="fill" />
                    </div>
                    <div className={Style.breadcrumb}>
                        &gt; เพิ่มรายการสินค้า
                    </div>
                </div>
                <div className={Style.rightcomp1}>
                    <Image src='/user.png' width={30} height={30} />
                    <h3>Keerati Chuatanapinyo&emsp;</h3>
                    <Image src='/noti.png' width={22} height={22} />
                    <Image src='/logout.png' width={20} height={20} />
                    <button className={Style.help} onClick={() => router.push('/help')}>
                        &emsp;ศูนย์ช่วยเหลือ&emsp;
                    </button>
                </div>
                <button onClick={showDrawer} className={Style.menu}>
                    <MenuUnfoldOutlined style={{ fontSize: "25px" }} />
                </button>
            </div>
            <Drawer
                className={Style.drawer}
                title="Keerati Chuatanapinyo"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <div onClick={() => router.push('/login')} className={Style.menuitem}>
                    ศูนย์ช่วยเหลือ
                </div>
                <div onClick={() => router.push('/help')} className={Style.menuitem}>
                    ออกจากระบบ
                </div>
            </Drawer>

            <br />
            <div className={Style.productdata}>
                <h2 className={Style.title}>ข้อมูลทั่วไป</h2>
                <div className={Style.inputtitle}>
                    ชื่อสินค้า
                </div>
                <div className={Style.input}>
                    <Input placeholder="df" />
                </div>
                <div className={Style.inputtitle}>
                    รายละเอียดสินค้า
                </div>
                <div className={Style.input}>
                    <TextArea
                        placeholder="ddddd"
                        autoSize={{ minRows: 9 }}
                    />
                </div>
                <div className={Style.inputtitle}>
                    รูปภาพ
                </div>
                <div className={Style.input}>
                    <UploadImage
                        caption="รูปภาพหลัก"
                        captionInput="none"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 1"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 2"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 3"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 4"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 5"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 6"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 7"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                </div>
                <div className={Style.inputtitle}>
                    คลัง
                </div>
                <div className={Style.input}>
                    <Input placeholder="20" />
                </div>
                <div className={Style.inputtitle}>
                    ขั้นต่ำ
                </div>
                <div className={Style.input}>
                    <Input placeholder="20" />
                </div>
                <div className={Style.inputtitle}>
                    หมวดหมู่
                </div>
                <div className={Style.input}>
                    <Cascader
                        options={options}
                        onChange={onChangeCascade}
                        placeholder="Please select"
                        expandTrigger="hover"
                    />
                </div>
                <h2 className={Style.title}>ข้อมูลสถานที่</h2>
                <div className={Style.inputtitle}>
                    รายละเอียดสถานที่
                </div>
                <div className={Style.input}>
                    <TextArea
                        placeholder="ddddd"
                        autoSize={{ minRows: 9 }}
                    />
                </div>
                <div className={Style.inputtitle}>
                    รูปภาพ
                </div>
                <div className={Style.input}>
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 1"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 2"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 3"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 4"
                        // setImage={setImage}
                        width={140}
                        height={160}
                    />
                </div>
                <div className={Style.buttonzone}>
                    <button className={Style.button1}>
                        preview
                    </button>
                    <button className={Style.button2}>
                        บันทึกแต่ไม่ยังแสดง
                    </button>
                    <button className={Style.button3}>
                        บันทึกและแสดง
                    </button>
                </div>
            </div>
            <br />
        </div>
    )
}

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

export default AddProduct