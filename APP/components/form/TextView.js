const TextView = (props) => {
    return(
        <div className="textView">
            <style jsx>{`
                .textView{
                    position: relative;
                    width: 200px;
                    min-width: ${(props.width != undefined ? props.width : "200px")};
                    margin: ${(props.margin != undefined ? props.margin : "0")};
                    padding: 0 12px;
                    height: fit-content;
                    box-sizing: border-box;
                }
                .title{
                    font-size: 12px;
                    font-weight: bold;
                    color: ${(props.titleColor != undefined ? props.titleColor : "#858383")};
                    margin: 4.5px 0 1px 0px;
                    text-transform: uppercase;
                }
                .value{
                    font-size: 13px;
                    color: ${(props.valueColor != undefined ? props.valueColor : "#858383")};
                    font-weight: 400;
                    margin-bottom: 4.5px;
                    white-space: pre-wrap;
                }
            `}</style>
            <div className="title">{(props.title != undefined ? props.title : "")}</div>
            <div className="value">{(props.value != undefined ? props.value : "-")}</div>
        </div>
    )
}

export { TextView };