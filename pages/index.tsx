import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
// component
import TopNav from '../Component/TopNav'
import NavMenu from '../Component/NavMenu'
import UnicefSupport from '../Component/UnicefSupport'
import ProductShowCase from '../Component/ProductShowCase'
import ProductMac from '../Component/ProductMac'
// images 
import iphone13 from '../public/asset/product__2.png'
import iphone13Pro from '../public/asset/product__3.png'
import macbook from '../public/asset/macbook.png'
import macbookPro from '../public/asset/product (4).jpg'
import titleApple from '../public/asset/applewatch.png'
import appleWatch from '../public/asset/watch.png'
import ipadAir from '../public/asset/product.jpg'
import ipadAirTitle from '../public/asset/ipad.png'
import subImage1 from '../public/asset/supercharged__2.png'
import subImage2 from '../public/asset/supercharged (1).png'


const Home: NextPage = () => {
  const [Open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!Open)
    console.log(Open);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Apple clone</title>
        <meta name="description" content="apple clone for learning purpose only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav handleOpen={handleOpen}/>
      {/* conditionally rendering navmenu component using ternary op */}
      {Open ? (
        <NavMenu />
      ) : null}
      <UnicefSupport />
      <ProductShowCase 
      image={iphone13}
      productTitle='iPhone 13'
      productSubTitle='Your new superpower'
      />

      <ProductShowCase 
      image={iphone13Pro}
      productTitle='Iphone 13 Pro'
      productSubTitle='Oh.So.Pro'
      />

      <ProductMac />

      <ProductShowCase 
      image={macbook}
      productTitle='MacBook Air'
      subImage={subImage1}
      />

      <ProductShowCase 
      image={macbookPro}
      productTitle='MacBook Pro 13"'
      subImage={subImage2}
      darkMode={true}
      />

      <ProductShowCase 
      image={appleWatch}
      imageTitle={titleApple}
      productSubTitle="It's our largest display yet"
      />

      <ProductShowCase 
      image={ipadAir}
      imageTitle={ipadAirTitle}
      productSubTitle="Light.Bright.Full of might"
      darkMode={true}
      />
    </div>
  )
}

export default Home
