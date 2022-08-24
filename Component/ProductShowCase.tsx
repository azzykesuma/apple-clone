import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from '../styles/Products.module.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface compProps {
    image : StaticImageData
    productTitle? : string
    productSubTitle? : string
    // fix this
    // in order for you to use union, you need to have a type checking guard 
    // to cover all types, otherwise it throws error
    imageTitle? : any
    subImage? : any
    darkMode? : boolean
}

const ProductShowCase = ({image, imageTitle, productTitle, productSubTitle, subImage, darkMode} : compProps) => {
  return (
    <section className={styles.product__section}>
      <div className={styles.product__info}>
        {productTitle ? (
          <h1 className={darkMode ? `${styles.dark__mode}` : ''}>{productTitle}</h1>
        ) : (
          <Image
          src={imageTitle}
          layout='fixed'
          height={'40px'}
          width={'100px'}
          />
        )}
        {productSubTitle ? (
          <h2 className={darkMode ? `${styles.dark__mode}` : ''}>{productSubTitle}</h2>
        ) : (
          <Image 
          layout='fixed'
          width={'200px'}
          height={'30px'}
          src={subImage}
          />
        )}
        <div className={styles.link__product}>
          <a className={styles.links}>Learn more <ArrowForwardIosIcon sx={{fontSize : '15px'}} /></a>
          <a className={styles.links}>Buy <ArrowForwardIosIcon sx={{fontSize : '15px'}} /></a>
        </div>
      </div>
        <div className={styles.image__container}>
            <Image 
            src={image}
            layout='fixed'
            className={styles.product__image}
            width={700}
            height={500}
        />
        </div>
    </section>
  )
}

export default ProductShowCase