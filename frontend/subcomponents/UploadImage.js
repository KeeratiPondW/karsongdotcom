import { useState, useEffect } from "react"
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Style from './UploadImage.module.css'

const UploadImage = () => {
    const [images, setImages] = useState("")
    const [imageURLs, setImageURLs] = useState("")
    const [key, setKey] = useState("")

    useEffect(() => {
        if (images === "") return;
        // const newImageURLs = []
        // images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(URL.createObjectURL(images))
    }, [images])

    const onImageChange = (e) => {
        setImages(e.target.files[0])
    }
    const onDeleteImage = (e) => {
        setImageURLs("")
        setImages("")
        setKey(Date.now())
    }

    console.log("images :", images)
    console.log("imageURLs :", imageURLs)

    return (
        <div className={Style.border}>
            <input type="file" key={key} id="img" accept="image/png, image/jpg"  onChange={onImageChange} style={{ display: 'none' }} />
            {
                imageURLs === "" ?
                    <label className={Style.label} htmlFor="img">
                        <PlusOutlined className={Style.plusicon} />
                    </label> :
                    <DeleteOutlined className={Style.binicon} onClick={onDeleteImage} />
            }
            {
                imageURLs !== "" && <img className={Style.image} src={imageURLs} />
            }
        </div>
    )
}

export default UploadImage