import React from 'react'
import style from './Contakts.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3> Контакты </h3>
                <form className={style.inputBlock}>
                    <input value={"<input>"}/>
                    <input value={"<input>"}/>
                    <textarea value={"<textarea>"}/>
                </form>
                <button> Отправить </button>
            </div>
        </div>
    )
}

export default Contacts;