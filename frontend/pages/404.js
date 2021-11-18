import Image from 'next/image'
import NotFoundImage from '../public/notfound.png'
import Style from '../styles/404.module.css'

const NotFound = () => {
    return (
        <div className={Style.frame}>
            <div className={Style.image}>
                <Image src={NotFoundImage} objectFit="contain" layout="fill" />
            </div>
            <div className={Style.text}>
                <p>404 (Not Found)</p>
                <p>Sorry, we can't find this page</p>
            </div>
        </div>
    )
}

export default NotFound