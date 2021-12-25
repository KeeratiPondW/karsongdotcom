import { useRouter } from 'next/router'
import Style from '../../styles/Search.module.css'
import Navbar from '../../subcomponents/Navbar'
import Footer from '../../components/Footer'

const Search = () => {
    const router = useRouter()
    
    return (
        <div>
            <Navbar />
            <div className={Style.frame}>

            </div>
            <Footer/>
        </div>
    )
}

export default Search