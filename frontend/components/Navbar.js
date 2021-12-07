import { useState } from 'react'
import Image from 'next/image'
import Style from '../styles/Navbar.module.css'
import Logo from '../public/weblogo.png'
import SearchIcon from '../public/search.png'
import { UserOutlined, FacebookOutlined } from '@ant-design/icons'

const Navbar = () => {
    const [category, setCategory] = useState("volvo")

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <div className={Style.top}>
                <div style={{ color: "white", fontWeight: "500", fontSize: "16px" }}>
                    ติดตามเราได้บน &nbsp;
                    <FacebookOutlined style={{fontSize:"20px"}}/>
                </div>
                <div style={{ color: "white", fontWeight: "500", fontSize: "16px" }}>
                    <UserOutlined /> Keerati Chuatanapinyo
                </div>
            </div>
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
                    <button>
                        <Image src={SearchIcon} width={25} height={25} />
                    </button>
                </div>
                <div className={Style.nav3}>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar