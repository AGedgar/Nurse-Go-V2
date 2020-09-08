const SubmitButton = (props) => {
    const getIcon = () => {
        if(props.icon != undefined){
            if(props.icon == "zoomIn"){
                return (
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6.72879C0 10.4387 3.0187 13.4574 6.72879 13.4574C8.39325 13.4574 9.91858 12.8498 11.0946 11.8448L16.0928 16.8431C16.1963 16.9471 16.3322 16.9989 16.4683 16.9989C16.6043 16.9989 16.7402 16.9471 16.8444 16.8431C17.0519 16.6355 17.0519 16.2991 16.8444 16.0916L11.846 11.0932C12.8503 9.91735 13.4574 8.39258 13.4574 6.72879C13.4574 3.0187 10.4387 0 6.72879 0C3.0187 0 0 3.0187 0 6.72879ZM1.06243 6.72879C1.06243 3.60452 3.60452 1.06243 6.72879 1.06243C9.85306 1.06243 12.395 3.60452 12.395 6.72879C12.395 9.85306 9.85306 12.395 6.72879 12.395C3.60452 12.395 1.06243 9.85306 1.06243 6.72879ZM6.19772 7.25987H4.07277C3.77954 7.25987 3.54155 7.02189 3.54155 6.72866C3.54155 6.43543 3.77954 6.19744 4.07277 6.19744H6.19772V4.07277C6.19772 3.77954 6.4357 3.54155 6.72893 3.54155C7.02217 3.54155 7.26015 3.77954 7.26015 4.07277V6.19744H9.38494C9.67817 6.19744 9.91615 6.43543 9.91615 6.72866C9.91615 7.02189 9.67817 7.25987 9.38494 7.25987H7.26015V9.38494C7.26015 9.67817 7.02217 9.91615 6.72893 9.91615C6.4357 9.91615 6.19772 9.67817 6.19772 9.38494V7.25987Z" fill="currentColor"/>
                    </svg>);
            }else if(props.icon == "zoomOut"){
                return (
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.72879 13.4574C3.0187 13.4574 0 10.4387 0 6.72879C0 3.0187 3.0187 0 6.72879 0C10.4387 0 13.4574 3.0187 13.4574 6.72879C13.4574 8.39258 12.8503 9.91735 11.846 11.0932L16.8444 16.0916C17.0519 16.2991 17.0519 16.6355 16.8444 16.8431C16.7402 16.9471 16.6043 16.9989 16.4683 16.9989C16.3322 16.9989 16.1963 16.9471 16.0928 16.8431L11.0946 11.8448C9.91858 12.8498 8.39325 13.4574 6.72879 13.4574ZM6.72879 1.06243C3.60452 1.06243 1.06243 3.60452 1.06243 6.72879C1.06243 9.85306 3.60452 12.395 6.72879 12.395C9.85306 12.395 12.395 9.85306 12.395 6.72879C12.395 3.60452 9.85306 1.06243 6.72879 1.06243ZM4.07277 7.26015H9.38494C9.67817 7.26015 9.91615 7.02217 9.91615 6.72893C9.91615 6.4357 9.67817 6.19772 9.38494 6.19772H4.07277C3.77954 6.19772 3.54155 6.4357 3.54155 6.72893C3.54155 7.02217 3.77954 7.26015 4.07277 7.26015Z" fill="currentColor"/>
                    </svg>
                )
            }else if(props.icon == "add"){
                return (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="jsx-2239707107">
                        <path d="M5 0H3V3H0V5H3V8H5V5H8V3H5V0Z" fill="currentColor" class="jsx-2239707107"></path>
                    </svg>
                )
            }
        }
    }
    return (
        <button className={`button ${(props.style != undefined ? (props.style == "white" ? "white" : (props.style == "red" ? "red" : (props.style == "green" ? "green" : "green"))) : "green")} ${( props.shape == "circular" ? "circular" : "")}`} value={props.value} disabled={(props.disabled == true ? true : false)}>
            <style jsx>{`
                .button{
                    width: ${(props.width != undefined ? props.width : "fit-content")};
                    margin: ${(props.margin != undefined ? props.margin : "0")};
                    padding: 0px 20px;
                    border: 0;
                    border-radius: 5px;
                    box-shadow: 0px 2px 9px rgba(151, 151, 151, 0.25);
                    box-sizing: border-box;
                    height: ${(props.height != undefined ? props.height : "35px")};
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 13px;
                    font-weight: bold;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .button[disabled]{
                    background-color: #a2a2a2;
                }
                .button[disabled]:hover{
                    background-color: #a2a2a2;
                }
                .button:hover{
                    background-color: #eab109;
                }
                .green{
                    background-color: #839788;
                    color: #fff;
                }
                .green:hover{
                    background-color:#66766a;
                }
                .red{
                    background-color: #e42719;
                    color: #fff;
                }
                .red:hover{
                    background-color: #b31f14;
                }
                .button.white{
                    color: #839788;
                    background-color: #fff;
                    border: 2px solid #839788;
                    font-size: 13px;
                }
                .white:hover{
                    background-color:#839788;
                    color: #fff;
                }
                .circular{
                    border-radius: 1000px;
                    padding: 0px 0px;
                }
            `}</style>
            { getIcon() }
            { props.children }
        </button>
    ) 
}

export { SubmitButton }