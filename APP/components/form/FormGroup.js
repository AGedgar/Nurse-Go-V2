const FormGroup = (props) => {
    return(
        <div className="form-group">
                <style jsx>{`
                    .form-group{
                        margin-bottom: 15px;
                        padding-bottom: 15px;
                    }
                    body .form-group:nth-last-child(n+2){
                        border-bottom: 1px solid #DFE2E6;
                    }
                    .form-group-title{
                        font-weight: bold;
                        font-size: 13px;
                        color: #839788;
                        text-transform: uppercase;
                        margin-bottom: 5px;
                    }
                    .form-group-subtitle{
                        font-weight: normal;
                        font-size: 13px;
                        color: #839788;
                    }
                    .form-group-container{
                        margin-top: 20px;
                    }
                `}</style>
                <div className="form-group-title">{ (props.title != undefined ? props.title : "") }</div>
                <div className="form-group-subtitle">{ ( props.subtitle != undefined ? props.subtitle : "") }</div>
                <div className={"form-group-container "+( props.children == undefined ? "hide" : "") }>{ props.children }</div>
            </div>
    )
}

export { FormGroup }