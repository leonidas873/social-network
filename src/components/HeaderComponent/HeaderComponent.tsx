import React, { useState, useRef } from "react"
import styles from './HeaderComponent.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import { useOnClickOutside } from "../../hooks/hook";
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';

const DropDown: React.FC = () => {

        const ref: any = useRef();



        const handleSignOut = () => {
                console.log("signout")
        }
        useOnClickOutside(ref, () => setShowBody(false));
        const [showBody, setShowBody] = useState(false);
        

        return <div className={styles.dropdown}>
                <img src={"/images/user.png"} alt="user" />
                <span>Jhon</span>
                <IoIosArrowDown onClick={() => setShowBody(state => !state)} />
                <AnimatePresence>
                        {showBody && <motion.div
                                className={styles.dropdownBody}
                                ref={ref}
                                initial={{ opacity: 0, y:-10 }}
                                animate={{ opacity: 1, y:0 }}
                                exit={{ opacity: 0, y:10}}
                        >
                                <button onClick={handleSignOut}>Sign Out</button>
                        </motion.div>}
                </AnimatePresence>

        </div>
}

const HeaderComponent: React.FC = () => {

        const onSearch = (value: string) => {
                console.log(value)
        }

        return <div className={styles.header}>
                <div className={styles.content}>
                        <img src={"/images/logo.png"} alt="logo" />
                        <div className={styles.search}>
                                <input type="text" placeholder="search..." />
                                <div><VscSearch /></div>
                        </div>
                        <DropDown />
                </div>
        </div>
}

export default HeaderComponent;