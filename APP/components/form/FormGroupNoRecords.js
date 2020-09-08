const FormGroupNoRecords = (props) => {
    return (
        <div className="noRecordsMessage">
            <style jsx>{`
                .noRecordsMessage{
                    font-size: 12px;
                    font-weight: bold;
                    color: #858383;
                    text-transform: uppercase;
                }
            `}</style>
            { (props.message != undefined ? props.message : 'No records') }
        </div>
    )
}

export { FormGroupNoRecords };