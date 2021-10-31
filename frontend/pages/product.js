import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Style from '../styles/Product.module.css'
import Logo from '../public/weblogo.png'

const Product = () => {

    const [category, setCategory] = useState("volvo")

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
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
        </div>
    )
}

export default Product