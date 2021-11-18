import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import CompanyCard from '../components/CompanyCard'
import Style from '../styles/Pagination.module.css'

const Pagination = ({item}) => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3
    const numberOfPage = Math.ceil(items.length / 3)
    const [startIndex, setStartIndex] = useState(0)
    const [stopIndex, setStopIndex] = useState(itemsPerPage - 1)
    const [pageArray, setPageArray] = useState([])

    useEffect(() => {
        let array = []
        for (let i = 1; i < numberOfPage + 1; i++) {
            array.push(i)
        }
        setPageArray(array)
    }, [numberOfPage])

    const onChangePage = (n) => e => {
        setCurrentPage(n)
        setStartIndex((n - 1) * itemsPerPage)
        if (items.length < n * itemsPerPage - 1) {
            setStopIndex(items.length)
        } else {
            setStopIndex(n * itemsPerPage - 1)
        }
    }

    const onChangePrev = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <div className={Style.frame}>
                {items.map((n, i) => {
                    if (i >= startIndex && i <= stopIndex) {
                        return (
                            <ProductCard no={n} />
                        )
                    }
                })}
            </div>
            <div className={Style.pagination}>
                <div className={Style.prev}>
                    prev
                </div>
                {/* <div className={Style.insidepg}>
                    ...
                </div> */}
                {
                    pageArray.map((n, i) =>
                        <div className={Style.insidepg} onClick={onChangePage(i + 1)}>
                            {n}
                        </div>
                    )
                }
                {/* <div className={Style.insidepg}>
                    ...
                </div> */}
                <div className={Style.next}>
                    next
                </div>
            </div>
        </div>
    )
}

export default Pagination