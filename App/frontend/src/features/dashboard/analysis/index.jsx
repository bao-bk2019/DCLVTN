import React from 'react'
import './styles.scss'

const AnalysisBoard = (props) => {
    if (props.type === 'Descriptive')
    return (
    <div className="classifi-value">
        <div className="var-item">Metric Variables: </div>
        <div className="var-item">Ordinal Variables:</div>
        <div className="var-item">Nominal Variables:</div>
    </div>
    )
    else if (props.type === "Cluster")
    return (
        <div>Not updated</div>
    )
    else if (props.type === "PCA")
    return (
        <div>Not updated</div>
    )
    else if (props.type === "LSTM")
    return (
        <div>Not updated</div>
    )
}

export default AnalysisBoard