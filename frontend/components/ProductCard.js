import Image from 'next/image'
import Style from '../styles/ProductCard.module.css'
import Cat from '../public/cat1.png'

const ProductCard = ({no}) => {
    return (
        <div className={Style.frame}>
            <div className={Style.image}>
                <Image src={Cat} layout='fill' objectFit='contain' />
            </div>
            <div className={Style.content}>
                {no}
                บริษัท รุ่งเรืองมว๊ากมาก จำกัด <br />
                ร้านปลาสวยงามแห่งประเทศ
            </div>
            <div className={Style.buttonsection}>
                <button className={Style.button}>&emsp;ติดต่อธุรกิจ&emsp;</button>
            </div>
            <br/>
        </div>
    )
}

export default ProductCard