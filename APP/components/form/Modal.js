import React from 'react';

const Modal = (props) => {
    const handleCloseButtonClick = () => {
        if(props.onClose != undefined){
            props.onClose();
        }
    }
    return(
        <div className={`modal-background ${((props.state == 1 || props.state == 2) ? '' : 'hide')}`}>
            <style jsx>{`
                .modal-background{
                    bottom: 0;
                    left: 0;
                    overflow-x: hidden;
                    overflow-y: auto;
                    position: fixed;
                    right: 0;
                    top: 0;
                    background-color: rgba(0,0,0,.5);
                    z-index: 20;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .modal-background::before, .modal-background::after{
                    flex: 0 0 55px;
                    content: '';
                }
                .modal-container{
                    width: ${(props.width != undefined ? props.width : "450px")};
                    box-shadow: 15px 15px 25px 0px rgba(0,0,0,.1);
                    padding: 20px 35px 20px 35px;
                    position: relative;
                    border-radius: 2px;
                    background-color: #fff;
                    margin: auto;
                }
                .header{
                    display: flex;
                }
                .header > .left{
                    flex: 1;
                }
                .header > .left > .title{
                    font-size: 20px;
                    font-weight: bold;
                    color: #686565;
                }
                .header > .right > svg{
                    margin-top: 5px;
                    cursor: pointer;
                }
                .loading{
                    position: relative;
                    margin: auto;
                }
                .loading i{
                    font-size:32px;
                    color: #F3BD1D;
                }
            `}</style>

            <div className={"loading "+(props.state == 1 ? "" : "hide")}>
                <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
            </div>
            <div className={"modal-container "+(props.state == 2 ? "" : "hide")}>
                <div className="header">
                    <div className="left">
                        <div className="title">{(props.title != undefined ? props.title : "")}</div>
                    </div>
                    {(() => {
                        if(!(props.showCloseButton == false)){
                            return (
                                <div className="right" onClick={handleCloseButtonClick}>
                                    <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0908 8.20871C10.0908 7.99944 10.0071 7.79018 9.85641 7.63951L7.39547 5.17857L9.85641 2.71763C10.0071 2.56696 10.0908 2.3577 10.0908 2.14844C10.0908 1.93917 10.0071 1.72991 9.85641 1.57924L8.71802 0.440848C8.56735 0.290178 8.35808 0.206473 8.14882 0.206473C7.93956 0.206473 7.7303 0.290178 7.57963 0.440848L5.11869 2.90179L2.65775 0.440848C2.50708 0.290178 2.29782 0.206473 2.08855 0.206473C1.87929 0.206473 1.67003 0.290178 1.51936 0.440848L0.380964 1.57924C0.230294 1.72991 0.146589 1.93917 0.146589 2.14844C0.146589 2.3577 0.230294 2.56696 0.380964 2.71763L2.8419 5.17857L0.380964 7.63951C0.230294 7.79018 0.146589 7.99944 0.146589 8.20871C0.146589 8.41797 0.230294 8.62723 0.380964 8.7779L1.51936 9.91629C1.67003 10.067 1.87929 10.1507 2.08855 10.1507C2.29782 10.1507 2.50708 10.067 2.65775 9.91629L5.11869 7.45536L7.57963 9.91629C7.7303 10.067 7.93956 10.1507 8.14882 10.1507C8.35808 10.1507 8.56735 10.067 8.71802 9.91629L9.85641 8.7779C10.0071 8.62723 10.0908 8.41797 10.0908 8.20871Z" fill="#696D88"/>
                                    </svg>
                                </div>
                            )
                        }
                    })()}
                </div>
                {props.children}
            </div>
        </div>
    )
}

const ModalContent = (props) => {
    return (
        <div className="modal-content">
            <style jsx>{`
                .modal-content{
                    padding: 30px 0 0 0;
                }
            `}</style>
            {props.children}
        </div>
    )
}

const ModalFooter = (props) => {
    return (
        <div className="modal-footer">
            <style jsx>{`
                .modal-footer{
                    padding: 30px 0 0 0;
                }
            `}</style>
            {props.children}
        </div>
    )
}

const ModalRow = (props) => {
    return (
        <div className="modal-row">
            <style jsx>{`
                .modal-row .modal-row-content{
                    display: flex;
                }
                .modal-row:nth-last-child(n+2){
                    margin-bottom: 10px;
                }
                .modal-row .title{
                    font-size: 13px;
                    font-weight: bold;
                    color: #686565;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                }
            `}</style>
            <div className="title">{(props.title != undefined ? props.title : "")}</div>
            <div className="modal-row-content">{props.children}</div>
        </div>
    )
}

const ModalTextRow = (props) => {
    return(
        <div className="modal-text-row">
            <style jsx>{`
                .modal-text-row{
                    margin: ${(props.margin != undefined ? props.margin : "0")}
                }
                .modal-text-row .modal-row-content{
                    color: #858383;
                    font-size: 13px;
                    text-align: ${(props.textAlign != undefined ? props.textAlign : "left")}
                }

                .modal-text-row:nth-last-child(n+2){
                    margin-bottom: 20px;
                }
            `}</style>
            <div className="modal-row-content">{props.children}</div>
        </div>
    )
}

export { Modal, ModalContent, ModalFooter, ModalRow, ModalTextRow };