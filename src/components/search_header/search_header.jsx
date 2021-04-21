import React, { useRef } from 'react';
import styles from './search_header.module.css';

    const SearchHeader = ({onSearch}) => {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        };
        const onClick = () => {
            handleSearch();
        };

        const onKeyPress = event => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        };
        return (
            <header className={styles.header}>
                <div className={styles.container}>        
                    <div className={styles.hd_start}>
                        <div className={styles.hd_menu}></div>
                        <div className={styles.hd_logo}></div>
                    </div>
                    <div className={styles.hd_center}>
                        <div className={styles.search_form}>
                            <input ref={inputRef} type ="search" placeholder="검색" className={styles.input_text} onKeyPress={onKeyPress} />
                            <div className={styles.keyboard_box}></div>
                            <button className={styles.button} type="submit" onClick={onClick}>
                            </button> 
                            <div className={styles.mic_box}></div>
                        </div>
                    </div>
                    <div className={styles.hd_end}>
                        <div className={styles.app_box}></div>
                        <div className={styles.setting_box}></div>
                        <div className={styles.login_box}>
                            <div className={styles.login_logo}></div>
                            <span className={styles.login_text}>로그인</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    };


export default SearchHeader;