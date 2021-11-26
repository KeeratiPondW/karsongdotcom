import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Style from '../styles/Company.module.css'
import Weblogo from '../public/weblogo.png'
import { Anchor, Tag } from 'antd'

const { Link } = Anchor

const Company = () => {
    const [targetOffset, setTargetOffset] = useState(undefined)
    const [background, setBackground] = useState('white')

    useEffect(() => {
        setTargetOffset(100);
    }, [])

    const listenScrollEvent = (e) => {
        if (window.scrollY > 100) {
            setBackground('gray')
        } else {
            setBackground('white')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        console.log('scroll')
        return () => window.removeEventListener('scroll', listenScrollEvent)
    })

    const tag = ['jan', 'bmw', 'jennifer bassette']
    return (
        <div>
            <div className={Style.container}>
                <div className={Style.top}>
                    <div style={{ position: 'relative', height: '150px', width: '400px'}}>
                        <Image src={Weblogo} objectFit='contain' layout='fill' />
                    </div>
                    <div style={{ fontSize: '30px' }}>
                        บริษัทแดกแ่รดทก-ำไปหผ
                    </div>
                </div>
            </div>
            <Anchor targetOffset={targetOffset}>
                <div className={Style.navbar} style={{ borderBottom: `2px solid ${background}` }}>
                    <div className={Style.navitem}>
                        ภาพรวมธุรกิจ
                    </div>
                    <div className={Style.navitem}>
                        <Link href="#product" title="สินค้า/บริการ"/>
                    </div>
                    <div className={Style.navitem}>
                        แกลเลอรี่
                    </div>
                    <div className={Style.navitem}>
                        ที่อยู่
                    </div>
                </div>
            </Anchor>
            <br />
            <div className={Style.container}>
                <div className={Style.content}>
                    <h1>ภาพรวมธุรกิจ</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.
                    </p>
                </div>
                <div className={Style.content} id="product">
                    <h1 >สินค้าและบริการ</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.
                    </p>
                </div>
                <div className={Style.content}>
                    <h1>รูปภาพ</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.
                    </p>
                </div>
                <div className={Style.content}>
                    <h1>ที่อยู่</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque fringilla erat leo, vel tincidunt metus tincidunt
                        quis. Nunc in enim tortor. Curabitur viverra, neque congue
                        ultricies cursus, leo mauris efficitur nulla, vitae rhoncus
                        mi metus ut leo. Suspendisse porta fringilla maximus.
                        Pellentesque imperdiet nibh augue, id ornare metus mattis
                        in. Morbi mi risus, commodo quis odio non, efficitur placerat
                        leo. Phasellus vel orci tortor. Integer a iaculis libero,
                        dictum volutpat nibh. Nullam rutrum nec leo maximus accumsan.
                        Cras facilisis turpis magna, et dictum orci ornare nec.
                        Phasellus eget facilisis velit. Nunc hendrerit felis nisl,
                        eu ullamcorper purus volutpat ac. Donec quis tellus scelerisque,
                        consequat lectus sed, aliquam mauris. Morbi convallis facilisis
                        mauris, quis molestie magna consequat at. Phasellus id ante ut
                        magna finibus varius ut vel neque. Donec lacinia ex nunc, eu
                        consectetur lectus malesuada mollis.
                    </p>
                </div>
                <div>
                    <h1>tag</h1>
                    {tag.map(t=>
                        <Tag color='magenta' style={{fontSize:'16px'}}>{t}</Tag>
                    )}
                </div>
                <br/>
            </div>
            {/* <div className={Style.footer}>

            </div> */}
        </div>
    )
}

export default Company