import Image from 'next/image'
import React from 'react'
import styles from '../styles/TopNav.module.scss'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// images
import logoImage from '../public/asset/logo.png'

const TopNav = ({handleOpen} : any) => {
  return (
    <nav className={styles.nav_main}>
        <button className={styles.nav_button} onClick={handleOpen}>
            <div className={styles.nav_button_line}></div>
            <div className={styles.nav_button_line}></div>
        </button>
        <Image
        width={25}
        height={10}
        src={logoImage}
        alt='apple-logo'
        />
        <button className={styles.nav_button}>
            <ShoppingBagOutlinedIcon sx={{ color : '#fff'}} />
        </button>
    </nav>
  )
}

export default TopNav