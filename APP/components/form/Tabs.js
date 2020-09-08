import Router from "next/router";

const Tabs = (props) => {
    const handleTabClick = () => {
        Router.push(props.tabs[i].url);
    }
    return(
        <div>
            <style jsx>{`
                .pageTabs{
                    margin: 20px 0 30px 0;
                    max-width: 100%;
                }
                .pageTabsContainer{
                    display: flex;
                }
                .tab{
                    font-size: 13px;
                    color: #858383;
                    border-bottom: 1px solid #DFE2E6;
                    padding-bottom: 5px;
                    cursor: pointer;
                    flex: 1;
                    text-align: center;
                    text-transform: uppercase;
                    white-space: nowrap;

                }
                .tab:nth-child(1){
                    text-align: left;
                }
                .tab[attr-selected="true"]{
                    font-weight: bold;
                    color: #F3BD1D;
                    border-bottom: 2px solid #F3BD1D;
                }
                .tab[attr-selected="false"]:hover{
                    font-weight: bold;
                }
                .loading{
                    margin-top: 100px;
                    font-size: 11px;
                    color: #F3BD1D;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <div className="pageTabs">
                <div className="pageTabsContainer">
                    { props.tabs.map((e, i)=>{
                        return <div className="tab" key={"tabs-"+i} attr-selected={ (i == props.selected ? "true" : "false") } onClick={ ()=>{handleTabClick(i)} }>{ e.name }</div>
                    }) } 
                </div>
            </div>
            <div className="tabContent">
                <div className={ "loading "+(props.loading == true ? "" : "hide") }>
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                </div>
                <div className={ ( props.loading == true ? "hide" : "") }>
                    { props.children }
                </div>
            </div>
            
        </div>
    )
}

export { Tabs };