import React from 'react';

const FormFooter = (props) => {
    return(
        <div className="footer">
            <style jsx>{`
                .footer{
                    margin: 30px 0px 0px 0px;
                    border-top: 1px solid #e6e6e6;
                    padding-top: 20px;
                }
                .footerContainer{
                    display: flex;
                    justify-content: flex-end;
                }
            `}</style>
            <div className="footerContainer">
                { props.children }
            </div>
        </div>
    )
}

export { FormFooter }