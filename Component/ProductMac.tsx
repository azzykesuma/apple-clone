import React from 'react'
import styles from '../styles/ProductMac.module.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// image
import macImage from '../public/asset/product__1.png'
import Image from 'next/image';

const ProductMac = () => {
  return (
    <section className={styles.product__section}>
    <h1>Get <span>supercharged</span> for college</h1>
    <h2>Save on Mac or Ipad.</h2>
    <br />
    <h2>Plus get a gift card up to $150.</h2>

    <div className={styles.link__product}>
      <a className={styles.links}>Shop now <ArrowForwardIosIcon sx={{fontSize : '15px'}} /></a>
    </div>
    <div className={styles.image__container}>
        <Image 
        src={macImage}
        layout='fixed'
        className={styles.product__image}
        width={700}
        height={500}
    />
    </div>
</section>
  )
}

export default ProductMac