import React from 'react'
import style from './FooterComponent.module.css'
import { BiCopyright } from 'react-icons/bi'

const FooterComponent: React.FC<{ type: string }> = ({ type }) => {

    let today: any = new Date();

    return (
        <div className={type === 'login' ? style.login : style.default}>
            <div className={style.footerComponent}>
                <ul>
                    <li>
                        <a href="">Help Center</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Community Guidelines</a>
                    </li>
                    <li>
                        <a href="">Cookies Policy</a>
                    </li>
                    <li>
                        <a href="">Career</a>
                    </li>
                    <li>
                        <a href="">Forum</a>
                    </li>
                    <li>
                        <a href="">Language</a>
                    </li>
                    <li>
                        <a href="">Copyright Policy</a>
                    </li>
                </ul>
                {type === 'default' ? <img src='https://gambolthemes.net/workwise-new/images/cm-logo.png' alt='logo' /> : null}
                <div><BiCopyright /> Copyright {today.getFullYear()}</div>
            </div>
        </div>
    )
}

export default FooterComponent