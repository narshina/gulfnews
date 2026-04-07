import React from 'react'
import styles from './Detailpage.module.scss'
import Image from 'next/image'
import bannerimage from "@/public/banner.png"

const Detailpage = () => {
    return (
        <>
            <section >
                <div className='container'>
                    <div className={styles.detailpageContainer}>

                        <h1>Luxury Hospitality Brand</h1>

                        <div className={styles.projectMeta}>
                            <div className={styles.metaItem}>
                                <span >Client</span>
                                <h3 >DAMAC</h3>
                            </div>

                            <div className={styles.metaItem}>
                                <span >Agency</span>
                                <h3 >Lorem</h3>
                            </div>

                            <div className={styles.metaItem}>
                                <span>Live Date</span>
                                <h3 >Sep 23, 2026</h3>
                            </div>
                        </div>

                    </div>

                </div>



            </section>

            <section className={styles.bannerSection}>
                <div className='container'>
                    <Image src={bannerimage} alt="Project Image" />

                </div>
            </section>


            <section>
                <div className='container'>
                    <div className={styles.subcontainer}>
                        <h4>Challenge</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit</p>

                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    </div>

                </div>
            </section>

        </>


    )
}

export default Detailpage