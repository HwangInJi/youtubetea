import React from 'react'
import { GiJasmine } from 'react-icons/gi'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href='/'>
                <em><GiJasmine /></em>
                <span>Taste<br /><i>Tea</i></span>
            </a>
        </h1>
    )
}

export default Logo