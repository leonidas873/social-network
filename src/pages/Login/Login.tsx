import React from 'react'
import { FooterComponent, LoginComponent } from '../../components'

const Login = () => {
    return (
        <div className='mainLoginComponent'>
            <LoginComponent />
            <FooterComponent type='login' />
        </div>
    )
}

export default Login