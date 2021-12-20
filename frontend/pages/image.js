import { useState } from 'react'
import UploadImage from '../subcomponents/UploadImage'
import MyTag from '../subcomponents/Tag'

const Image = () => {
    const [image, setImage] = useState("")
    const [captionValue, setCaptionValue] = useState("")

    console.log("image :", image)
    console.log("caption : ", captionValue)

    return (
        <div>
            <UploadImage
                caption=""
                captionPlaceholder="field"
                setCaptionValue={setCaptionValue}
                setImage={setImage}
                width={200}
                height={250}
            />
            <MyTag />
        </div>
    )
}

export default Image