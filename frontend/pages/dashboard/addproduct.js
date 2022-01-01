import { useState } from "react"
import Head from 'next/head'
import Image from "next/image"
import { useRouter } from "next/router"
import Weblogo from '../../public/karsonglogo2.png'
import { Drawer, Input, Cascader } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

import UploadImage from "../../subcomponents/UploadImage"
import Style from '../../styles/AddProduct.module.css'

const { TextArea } = Input

const AddProduct = () => {
    const router = useRouter()
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const [name, setName] = useState("")
    const [productDetail, setProductDetail] = useState("")
    const [imageFile1, setImageFile1] = useState("")
    const [imageFile2, setImageFile2] = useState("")
    const [imageFile3, setImageFile3] = useState("")
    const [imageFile4, setImageFile4] = useState("")
    const [imageFile5, setImageFile5] = useState("")
    const [imageFile6, setImageFile6] = useState("")
    const [imageFile7, setImageFile7] = useState("")
    const [imageFile8, setImageFile8] = useState("")
    const [price, setPrice] = useState(0)
    const [minimum, setMinimum] = useState(1)
    const [category, setCategory] = useState([])
    const [locationDetail, setLocationDetail] = useState("")

    const onChnageName = (e) => {
        setName(e.target.value)
    }
    const onChangeProductDetail = (e) => {
        setProductDetail(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onChangeMinimum = (e) => {
        setMinimum(e.target.value)
    }
    const onChangeCategory = (value) => {
        setCategory(value)
        console.log(value);
    }
    const onChangeLocationDetail = (e) => {
        setLocationDetail(e.target.value)
    }

    console.log("imageFile1: ", imageFile1)
    console.log("imageFile2: ", imageFile2)

    return (
        <div className={Style.frame}>
            <Head>
                <title>Karsong | New</title>
                <meta name="description" content="" />
            </Head>
            <div className={Style.comp1}>
                <div style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                    <div className={Style.logo}>
                        <Image src={Weblogo} alt="web logo" objectFit="contain" layout="fill" />
                    </div>
                    <div className={Style.breadcrumb}>
                        &emsp;&gt; เพิ่มรายการสินค้า
                    </div>
                </div>
                <div className={Style.rightcomp1}>
                    <Image src='/user.png' width={30} height={30} />
                    <h3>Keerati Chuatanapinyo&emsp;</h3>
                    <Image src='/noti.png' width={22} height={22} />
                    {/* <Image src='/logout.png' width={20} height={20} /> */}
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
                <p onClick={() => router.push('/help')} className={Style.menuitem}>
                    ศูนย์ช่วยเหลือ
                </p>
            </Drawer>

            <br className={Style.brtag} />
            <div className={Style.productdata}>
                <h2 className={Style.title}>ข้อมูลทั่วไป</h2>
                <div className={Style.inputtitle}>
                    ชื่อสินค้า
                </div>
                <div className={Style.input}>
                    <Input
                        // style={{border:"red solid 1.5px"}}
                        placeholder="ชื่อสินค้า"
                        value={name}
                        onChange={onChnageName}
                    />
                </div>
                <div className={Style.inputtitle}>
                    รายละเอียดสินค้า
                </div>
                <div className={Style.input}>
                    <TextArea
                        placeholder="รายละเอียดสินค้า การสั่งซื้อ ขั้นต่ำ อื่นๆ"
                        autoSize={{ minRows: 9 }}
                        value={productDetail}
                        onChange={onChangeProductDetail}
                    />
                </div>
                <div className={Style.inputtitle}>
                    รูปภาพ
                </div>
                <div className={Style.input}>
                    <UploadImage
                        caption="รูปภาพหลัก"
                        captionInput="none"
                        setImage={setImageFile1}
                        width={140}
                        height={160}
                    />
                    <UploadImage
                        captionInput="none"
                        caption="รูปภาพ 1"
                        setImage={setImageFile2}
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
                    ราคา
                </div>
                <div className={Style.input}>
                    <Input
                        placeholder="ราคาสินค้า"
                        value={price}
                        onChange={onChangePrice}
                    />
                </div>
                <div className={Style.inputtitle}>
                    ขั้นต่ำ
                </div>
                <div className={Style.input}>
                    <Input
                        placeholder="ขั้นต่ำ ถ้าไม่มีขั้นต่ำกรุณาใส่ 1"
                        value={minimum}
                        onChange={onChangeMinimum}
                    />
                </div>
                <div className={Style.inputtitle}>
                    หมวดหมู่
                </div>
                <div className={Style.input}>
                    <Cascader
                        style={{ width: '100%' }}
                        options={options}
                        onChange={onChangeCategory}
                        placeholder="เลือกหมวดหมู่"
                        expandTrigger="hover"
                        value={category}
                    />
                </div>
                <br />
                <h2 className={Style.title}>ข้อมูลสถานที่ (ทางเลือก)</h2>
                <div className={Style.inputtitle}>
                    รายละเอียดสถานที่
                </div>
                <div className={Style.input}>
                    <TextArea
                        placeholder="เพิ่มรายละเอียดสถานที่ เพื่อความน่าเชื่อถือ"
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
                    {/* <button className={Style.button1}>
                        preview
                    </button> */}
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