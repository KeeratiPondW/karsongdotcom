import Style from '../styles/Container.module.css'
import Pagination from './Pagination'

const HomeList = () => {
    return (
        <div className={Style.container}>
            <div className={Style.producttitle}>
                <div className={Style.recommendedproduct}>
                    &emsp;สินค้าแนะนำ&emsp;
                </div>
                <div className={Style.allproduct}>
                    &emsp;รายการทั้งหมด&emsp;
                </div>
            </div>
            <div className={Style.content}>
                <Pagination />
            </div>
            <br/>
            <div className={Style.producttitle}>
                <div className={Style.recommendedproduct}>
                    &emsp;ธุรกิจแนะนำ&emsp;
                </div>
                <div className={Style.allproduct}>
                    &emsp;รายการทั้งหมด&emsp;
                </div>
            </div>
            <div className={Style.content}>
                <Pagination />
            </div>
        </div>
    )
}

export default HomeList