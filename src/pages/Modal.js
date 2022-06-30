import React, {useState} from "react";
const Modal = () =>{
    const[modal,setModal] = useState(false);
    const openModal = () =>{
        setModal(!modal)
    }
    return(
        <>
        <button className="open" onClick={openModal}>kavin@dacode.se</button>
        <div className={modal ? "modal activ" : "modal"} >
            <div className="modal_body">
                <img src="./img/icon/Logo1.png" alt="" className="xaski" />
                <h1>Kevin Jeppesen</h1>
                <h4>good boy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet incidunt qui quibusdam cum? Upedita fugiat cumque incidunt labore minus officia! elit. Sed, doloremque.</p>
                <div className="close" onClick={openModal}>X</div>
                <button className="sign">Sign in</button>
            </div>
        </div>
        </>
    )
}
export default Modal;