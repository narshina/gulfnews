import React from 'react'
import styles from './Detailpage.module.scss'
import Image from 'next/image'
import bannerimage from "@/public/banner.png"
import icon from "@/public/icon.png"
import image from "@/public/video.png"
import "@/app/globals.css"

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


            <section className={styles.subSection}>
                <div className='container'>
                    <div className={styles.subcontainer}>
                        <h3 className={styles.subHeading}>Challenge</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit</p>

                        <br></br>

                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    </div>


                    <div className={styles.sectionWrapper}>
                       <div className={styles.subcontainer}>
                         <div className={styles.grid}>
                            <div className={styles.card}>
                                <div className={styles.header}>
                                    <Image src={icon} alt="icon" />
                                    <h3 >Lorem ipsum</h3>
                                </div>
                                <p >
                                    While still a controversial idea, some countries are experimenting with AI systems.
                                </p>
                            </div>


                            <div className={styles.card}>
                                <div className={styles.header}>
                                    <Image src={icon} alt="icon" />
                                    <h3 >Lorem ipsum</h3>
                                </div>
                                <p >
                                    While still a controversial idea, some countries are experimenting with AI systems.
                                </p>
                            </div>

                        </div>
                       </div>
                    </div>

                    <div className={styles.approachSection}>
                        <div className={styles.subcontainer}>
                            <h3 className={styles.subHeading}>Approach</h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit
                            </p>
                            <br></br>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>

                            <ol>
                                <li>
                                    <h3>Automating Routine Tasks</h3>
                                    <p>Eho AI handles repetitive tasks like drafting contracts and reviewing documents, freeing up lawyers to focus on strategic work.</p>
                                </li>
                                <li>
                                    <h3>Enhancing Legal Research</h3>
                                    <p>AI-powered tools like ROSS Intelligence analyze case law and statutes, delivering precise results in seconds. This speeds up research and ensures comprehensive insights.</p>
                                </li>
                                <li>
                                    <h3>Predictive Analytics</h3>
                                    <p>AI predicts case outcomes by analyzing historical data. Platforms like Lex Machina provide insights into judges’ rulings and litigation trends, helping lawyers make data-driven decisions.</p>
                                </li>
                            </ol>
                        </div></div>


                    <div className={styles.imageSection}>
                       <div className={styles.subcontainer}>
                            <Image src={image} alt="Video" />
                        </div>
                    </div>




                </div>
            </section>

        </>


    )
}

export default Detailpage