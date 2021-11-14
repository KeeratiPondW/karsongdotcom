import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Style from '../styles/Product.module.css'
import Logo from '../public/weblogo.png'
import Image2 from '../public/image2.jpg'
import CompanyCard from '../components/CompanyCard'
import ProductCard from '../components/ProductCard'

const Product = () => {

    const [category, setCategory] = useState("volvo")

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <Head>
                <title>Karsong | Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={Style.navbar}>
                <div className={Style.nav1}>
                    <Image src={Logo} alt="web logo" layout="fill" objectFit="contain" />
                </div>
                <div className={Style.nav2}>
                    <select name="cars" value={category} onChange={onChangeCategory}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type='text' />
                    <button>Search</button>
                </div>
                <div className={Style.nav3}>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
            <div className={Style.content}>
                <div className={Style.category}>
                    <div>MARKETS</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                </div>
                <div className={Style.pagination}>
                    <div className={Style.paginationimage}>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div className={Style.paginationselect}>
                        <div >
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                    </div>
                </div>
                <div className={Style.rightcontent}>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                </div>
            </div>
            <div style={{padding:"20px"}}>
                <ProductCard />
            </div>
            <div style={{padding:"20px"}}>
                <CompanyCard />
            </div>
            <footer style={{ height: "200px" }}>
                fffff
            </footer>
        </div>
    )
}

export default Product