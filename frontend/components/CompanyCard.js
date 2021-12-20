import Image from 'next/image'
import Style from '../styles/CompanyCard.module.css'
import Cat from '../public/cat1.png'

const CompanyCard = ({no}) => {
    return (
        <div className={Style.frame}>
            <div className={Style.image}>
                <Image src={Cat} layout='fill' objectFit='contain' />
            </div>
            <div className={Style.content}>
                {no}ปลากัดสายพันธ์ใหม่ <br />
                ร้านปลาสวยงามแห่งประเทศ
            </div>
            <div className={Style.footsection}>
                <div className={Style.price}>
                    &#3647;500/4ชิ้น
                </div>
                <div className={Style.button}>
                    ดูรายละเอียด
                </div>
            </div>
        </div>
    )
}

export default CompanyCard