import React from 'react'
import styles from './Detailpage.module.scss'
import Image from 'next/image'
import bannerimage from "@/public/banner.png"
import icon from "@/public/icon.png"
import image from "@/public/video.png"
import "@/app/globals.css"
import img1 from "@/public/img1.png"
import img2 from "@/public/img2.png"
import Link from 'next/link'

const Detailpage = () => {
     const data = [
            {
                img: img1,
                title: "Luxury Hospitality Brand",
                ctr: "1.25%",
                impressions: "1M+"
            },
            {
                img: img2,
                title: "Luxury Hospitality Brand",
                ctr: "1.25%",
                impressions: "1M+"
            }];
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
                    <div className={styles.textSection}>
                        <div className={styles.subcontainer}>

                            <h3 className={styles.subHeading}>Challenge</h3>
                            <p   className={styles.paragraph}>Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit</p>

                            <br></br>

                            <p className={styles.paragraph}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>

                    </div>


                    <div className={styles.sectionWrapper}>
                        <div className={styles.subcontainer}>
                            <div className={styles.grid}>
                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <Image src={icon} alt="icon" />
                                        <h3 >Lorem ipsum</h3>
                                    </div>
                                    <p className={styles.paragraph}>
                                        While still a controversial idea, some countries are experimenting with AI systems.
                                    </p>
                                </div>


                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <Image src={icon} alt="icon" />
                                        <h3 >Lorem ipsum</h3>
                                    </div>
                                    <p className={styles.paragraph}>
                                        While still a controversial idea, some countries are experimenting with AI systems.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.approachSection}>
                        <div className={styles.subcontainer}>

                            <h3 className={styles.subHeading}>Approach</h3>
                            <p className={styles.paragraph}>
                                Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit
                            </p>
                            <br></br>
                            <p className={styles.paragraph}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>

                            <ol>
                                <li>
                                    <h3>Automating Routine Tasks</h3>
                                    <p className={styles.paragraph}>Eho AI handles repetitive tasks like drafting contracts and reviewing documents, freeing up lawyers to focus on strategic work.</p>
                                </li>
                                <li>
                                    <h3>Enhancing Legal Research</h3>
                                    <p className={styles.paragraph}>AI-powered tools like ROSS Intelligence analyze case law and statutes, delivering precise results in seconds. This speeds up research and ensures comprehensive insights.</p>
                                </li>
                                <li>
                                    <h3>Predictive Analytics</h3>
                                    <p className={styles.paragraph}>AI predicts case outcomes by analyzing historical data. Platforms like Lex Machina provide insights into judges’ rulings and litigation trends, helping lawyers make data-driven decisions.</p>
                                </li>
                            </ol>
                        </div></div>


                    <div className={styles.imageSection}>
                        <div className={styles.subcontainer}>
                            <Image src={image} alt="Video" />
                            <p>
                                *Dolore mque laudantium, <span>total merem aperia.</span>
                            </p>
                        </div>
                    </div>


                    <div className={styles.resultsSection}>
                        <div className={styles.subcontainer}>
                            <h3 className={styles.subHeading}>Results</h3>
                            <p className={styles.paragraph}>
                                Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit
                            </p>

                            <div className={styles.metricsGrid}>
                                <div className={styles.metricItem}>
                                    <h2>1.25%</h2>
                                    <h4>CTR</h4>
                                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>

                                <div className={styles.metricItem}>
                                    <h2>1.2M</h2>
                                    <h4>Impressions</h4>
                                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>

                            <p className={styles.paragraph}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>



                        </div>
                    </div>

                    <div className={styles.clientReview}>
                        <div className={styles.textSection}>
                            <div className={styles.subcontainer}>
                                <h3 className={styles.subHeading}>Client's View</h3>
                            </div>
                        </div>
                        <div className={styles.subcontainer}>
                            <div className={styles.clientCard}>
                                <h1 className={styles.quoteMark}>“</h1>
                                <h3>
                                    Eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae
                                    nugit una mo quae.
                                </h3>
                                <p>
                                    - Cameron Williamson, Manager at Company.io
                                </p>
                            </div>
                        </div>
                    </div>




                </div>
            </section>

            <section className={styles.readMore}>
                <div className='container'>
                    <h3 className={styles.subHeading}>Read more</h3>

                      <div className={styles.grid}>
                        {data.map((item, index) => (
                     <Link href="" key={index}> 
                           <div  className={styles.card}>


                                <div className={styles.imgWrap}>
                                    <Image src={item.img} alt={item.title}  />

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

                            </div></Link>
                        ))}
                    </div>
                </div>
            </section>

        </>


    )
}

export default Detailpage