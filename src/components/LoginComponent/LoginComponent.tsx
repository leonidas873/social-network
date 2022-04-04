import React, { useState } from 'react';
import { Button, Card, Form, Input, Checkbox, Select } from 'antd';
import style from './LoginComponent.module.css';
import { GrDropbox } from 'react-icons/gr'
import { GiEarthAmerica } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'

const LoginComponent = () => {

    const [signIn, setSignIn] = useState<boolean>(true)

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Card className={style.cardComponent}>
            <div className={style.left}>
                <div>
                    <img src="https://gambolthemes.net/workwise-new/images/cm-logo.png" alt="logo" />
                    <p>Workwise, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                </div>
                <img src="https://gambolthemes.net/workwise-new/images/cm-main-img.png" alt="logo 2" />
            </div>
            <div className={style.right}>
                <div className={style.signInUp}>
                    <Button onClick={() => setSignIn(true)} className={signIn ? 'primary' : 'default'}>Sign in</Button>
                    <Button onClick={() => setSignIn(false)} className={signIn ? 'default' : 'primary'}>Sign up</Button>
                </div>
                {
                    signIn ?
                        <Form
                            id='loginForm'
                            name="normal_login"
                            className={style.loginForm}
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                        >
                            <div className={style.formTitle}>Sign in</div>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    size='large'
                                    prefix={<AiOutlineUser className="site-form-item-icon" />}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<FiLock className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' className="primary login-form-button" htmlType="submit">
                                    Sign in
                                </Button>
                            </Form.Item>
                        </Form>
                        :
                        <Form
                            id='loginForm'
                            name="normal_login"
                            className={style.loginForm}
                            onFinish={onFinish}
                        >
                            <div className={style.formTitle}>Sign up</div>
                            <Form.Item
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your Fullname!' }]}
                            >
                                <Input
                                    size='large'
                                    prefix={<AiOutlineUser className="site-form-item-icon" />}
                                    placeholder="Fullname"
                                />
                            </Form.Item>
                            <Form.Item
                                name="country"
                            >
                                <Input
                                    size='large'
                                    prefix={<GiEarthAmerica className="site-form-item-icon" />}
                                    placeholder="Country"
                                />
                            </Form.Item>
                            <div className={style.formItemSelect}>
                                <Form.Item
                                    name='select'
                                >
                                    <Select
                                        placeholder='Category'
                                        size='large'
                                        suffixIcon={<BsThreeDots className="site-form-item-icon" />}
                                        className={style.formSelect}
                                    >
                                        <Select.Option value="category">Category</Select.Option>
                                        <Select.Option value="category1">Category 1</Select.Option>
                                        <Select.Option value="category2">Category 2</Select.Option>
                                        <Select.Option value="category3">Category 3</Select.Option>
                                    </Select>
                                </Form.Item>
                                <div className={style.selectIcon}><GrDropbox className="site-form-item-icon" /></div>
                            </div>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<FiLock className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item
                                name="repeatPassword"
                                rules={[{ required: true, message: 'Please repeat your Password!' }]}
                            >
                                <Input
                                    prefix={<FiLock className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Repeat Password"
                                    size='large'
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' className="primary login-form-button" htmlType="submit">
                                    Sign up
                                </Button>
                            </Form.Item>
                        </Form>
                }
            </div>
        </Card >
    )
}

export default LoginComponent