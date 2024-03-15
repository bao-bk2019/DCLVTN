import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from "react";
import * as XLSX from 'xlsx';
TableFeature.propTypes = {

};

function TableFeature(props) {
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);

    // submit state
    const [excelData, setExcelData] = useState(null);

    // onchange event
    const handleFile = (e) => {
        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFile(e.target.result);
                }
            }
            else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('Please select your file');
        }
    }

    // submit event
    const handleFileSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data.slice(0, 10));
        }
    }
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
                <form className="form-group custom-form" onSubmit={handleFileSubmit}>
                    <input type="file" className="form-control" required onChange={handleFile} />
                    <button type="submit" className="btn btn-success btn-md">UPLOAD</button>
                    {typeError && (
                        <div className="alert alert-danger" role="alert">{typeError}</div>
                    )}
                </form>

                {/* view data */}
                <div className="viewer">
                    {excelData ? (
                        <div className="table-responsive" style={{ maxHeight: 300 }}>
                            <table className="table">

                                <thead>
                                    <tr>
                                        {Object.keys(excelData[0]).map((key) => (
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {excelData.map((individualExcelData, index) => (
                                        <tr key={index}>
                                            {Object.keys(individualExcelData).map((key) => (
                                                <td key={key}>{individualExcelData[key]}</td>
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

export default TableFeature;