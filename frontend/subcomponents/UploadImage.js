import { useState, useEffect } from "react"
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Style from './UploadImage.module.css'

const UploadImage = ({caption, captionInput, captionPlaceholder, width, height, setCaptionValue, setImage }) => {
    // const [image, setImage] = useState("")
    const [imageURL, setImageURL] = useState("")
    // const [captionValue, setCaptionValue] = useState("")
    const [key, setKey] = useState("")

    // useEffect(() => {
    //     if (image === "") return;
    //     setImageURL(URL.createObjectURL(image))
    //     console.log(URL.createObjectURL(image))
    // }, [image])

    const onImageChange = (e) => {
        setImage(e.target.files[0])
        setImageURL(URL.createObjectURL(e.target.files[0]))
        // console.log("type: ", e.target.files[0].type)
    }

    const onDeleteImage = (e) => {
        setImageURL("")
        setImage("")
        setKey(Date.now())
    }


    return (
        <div className={Style.frame} style={{ width: width, border: captionInput === "none" ? "none" : "darkcyan 1px solid" }}>
            <div className={Style.border} style={{ height: height }}>
                <input type="file" key={key} id="img" name="avatar" accept="image/png, image/jpg" onChange={onImageChange} style={{ display: 'none' }} />
                {
                    imageURL === "" ?
                        <label className={Style.label} htmlFor="img">
                            <p className={Style.plusicon}>+</p>
                            {/* <PlusOutlined  /> */}
                        </label> :
                        <div className={Style.binicon}>delete</div>
                    // <DeleteOutlined className={Style.binicon} onClick={onDeleteImage} />
                }
                {
                    imageURL !== "" && <img className={Style.image} src={imageURL} />
                }

            </div>
            {
                caption && <p style={{textAlign:'center'}}>{caption}</p>
            }
            {
                captionInput === "none" ? "" :
                    <input
                        className={Style.textinput}
                        type="text"
                        // value={captionValue}
                        onChange={(e) => setCaptionValue(e.target.value)}
                        placeholder={captionPlaceholder}
                    />
            }

        </div>
    )
}

export default UploadImage