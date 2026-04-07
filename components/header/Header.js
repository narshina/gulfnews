import React from 'react'
import styles from './Header.module.scss'
import arrow from "@/public/leftarrow.png"
import Image from 'next/image'
import "@/app/globals.css"



const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={styles.header}>

                    <a className={styles.arrowLink} >
                        <Image src={arrow} alt="arrow" className={styles.arrow} />
                    </a>

                    <div className={styles.breadCrumb}>
                        <span>Home</span>
                        <span className={styles.slash}>/</span>
                        <span className={styles.active}>Success Stories</span>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header