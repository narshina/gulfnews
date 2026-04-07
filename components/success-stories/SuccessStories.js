import React from 'react'
import styles from './Success-stories.module.scss'
import Image from 'next/image'
import "@/app/globals.css"



const SuccessStories = () => {


    const data = [
        {
            img: "/img1.png",
            title: "Luxury Hospitality Brand",
            ctr: "1.25%",
            impressions: "1M+"
        },
        {
            img: "/img2.png",
            title: "Luxury Hospitality Brand",
            ctr: "1.25%",
            impressions: "1M+"
        },
        {
            img: "/img3.png",
            title: "Luxury Hospitality Brand",
            ctr: "1.25%",
            impressions: "1M+"
        },
        {
            img: "/img4.png",
            title: "Luxury Hospitality Brand",
            ctr: "1.25%",
            impressions: "1M+"
        },
    ];
    return (


        <>
            <section>

                <div className='container'>
                    <div className={styles.wrapper}>
                        <div className={styles.topSection}>

                            <h1 className={styles.title}>Success Stories</h1>

                            <div className={styles.rightContent}>
                                <p>
                                    See how advertisers have successfully used Gulf News inventory and
                                    media solutions to build effective campaigns and achieve their
                                    marketing objectives.
                                </p>

                            </div>

                        </div>

                        <div className={styles.bottomSection}>
                            <div className={styles.sortBtn}>
                                <span className={styles.sortLabel}>Sort:</span>
                                <select className={styles.sortSelect}>
                                    <option value="latest">Show Latest First</option>
                                    <option value="oldest">Show Oldest First</option>
                                    <option value="featured">Featured</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className={styles.cardWrapper}>
                <div className='container'>
                    <div className={styles.grid}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.card}>


                                <div className={styles.imgWrap}>
                                    <Image src={item.img} alt={item.title} width={192} height={192} />

                                </div>


                                <div className={styles.content}>
                                    <h4>{item.title}</h4>

                                    <div className={styles.stats}>
                                        <div>
                                            <h4>{item.ctr}</h4>
                                            <span>CTR</span>
                                        </div>

                                        <div>
                                            <h4>{item.impressions}</h4>
                                            <span>Impressions</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default SuccessStories