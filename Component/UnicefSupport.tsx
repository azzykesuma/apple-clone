import Image from 'next/image'
import React from 'react'
import styles from '../styles/UnicefSupport.module.scss'
// image
import unicefLogo from '../public/asset/unicef.png'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

const UnicefSupport = () => {
  return (
    <section className={styles.support_section}>
        <Image 
        width={110}
        height={40}
        src={unicefLogo}
        />
        <a className={styles.support_section_link}>Donate to support families affected by the war in Ukraine <CallMadeOutlinedIcon className={styles.icon_arrow} /></a>
    </section>
  )
}

export default UnicefSupport