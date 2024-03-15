import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import './styles.scss'
TableList.propTypes = {
    typeError: PropTypes.any,
    excelData: PropTypes.arrayOf(PropTypes.object),
    handleFileSubmit: PropTypes.func,
    handleFile: PropTypes.func,
    setExcelData: PropTypes.func,
};

function TableList(props) {
    const handleCellChange = (rowIndex, columnIndex, newValue) => {
        const updatedData = [...props.excelData];
        updatedData[rowIndex][Object.keys(updatedData[0])[columnIndex]] = newValue;
        props.setExcelData(updatedData);
    };
    return (
        <div className='importable'>
            <ButtonGroup aria-label="Basic example" style={{ paddingLeft: 140 }}>
                <Button variant="secondary">Clear Table</Button>
                <Button variant="secondary">Import/Export</Button>
                <Button variant="secondary">Transform Data</Button>
                <Button variant="secondary">Settings</Button>
            </ButtonGroup>
            <div className="wrapper">
                {/* form */}
                <form className="form-group custom-form" onSubmit={props.handleFileSubmit}>
                    <input type="file" className="form-control" required onChange={props.handleFile} />
                    <ButtonGroup aria-label="Basic example" >
                        <Button type="submit" variant="secondary" >UPLOAD</Button>
                    </ButtonGroup>

                    {props.typeError && (
                        <div className="alert alert-danger" role="alert">{props.typeError}</div>
                    )}
                </form>

                {/* view data */}
                <div className="viewer">
                    {props.excelData ? (
                        <div className="table-responsive" style={{ maxHeight: 300 }}>
                            <table className="table">

                                <thead>
                                    <tr>
                                        {Object.keys(props.excelData[0]).map((key) => (
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.excelData.map((individualExcelData, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {Object.keys(individualExcelData).map((key, columnIndex) => (
                                                <td key={key}>
                                                    <input
                                                        type="text"
                                                        value={individualExcelData[key]}
                                                        onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    ) : (
                        <div>No File is uploaded yet!</div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default TableList;