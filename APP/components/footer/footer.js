import React from "react"

const Footer = () => {
    return(
    <footer>
        <style jsx>{`
        footer{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #282a31;
            width: 100%;
            height: 10vh;
            color: white;
            font-size: 15px;
        }
        
        footer p{
            justify-content: center;
        }
        `}</style>
        <p>Nurse-Go</p>
        <p>Currently on develop</p>
    </footer>
    )
}

export { Footer };