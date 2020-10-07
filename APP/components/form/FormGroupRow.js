const FormGroupRow = (props) => {
    return(
        <div className="form-group-row">
            <style jsx>{`
                .form-group-row-title{
                    font-weight: bold;
                    font-size: 12px;
                    color: #858383;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                }
                .form-group-row-container{
                    display: flex;
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                }
            `}</style>
            {(() => {
                if(props.title != undefined){
                    return(
                        <div className="form-group-row-title">{ props.title }</div>
                    )
                }
            })()}
            <div className="form-group-row-container">{ ( props.children != undefined ? props.children : "") }</div>
        </div>
    )
}

export { FormGroupRow }