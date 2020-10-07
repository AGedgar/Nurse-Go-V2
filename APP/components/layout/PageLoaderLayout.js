const PageLoaderLayout = (props) => {
    return(
        <div>
            <style jsx>{`
                .loading-spinner-container{
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                }
                .loading-spinner-container i{
                    color: #839788;
                    font-size: 32px;
                }
                .hide{
                    display: none;
                } 
            `}</style>
            <div className={`loading-spinner-container ${(props.loading != undefined ? (props.loading == true ? '' : 'hide'): 'hide')}`}>
                <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
            </div>
            <div className={`${(props.loading != undefined ? (props.loading == true ? 'hide' : ''): '')}`}>
                { props.children }
            </div>
        </div>
    )
}

export { PageLoaderLayout }