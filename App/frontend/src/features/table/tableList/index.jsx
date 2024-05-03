import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { List, CellMeasurer, CellMeasurerCache, ScrollSync, Grid } from 'react-virtualized';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

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
        updatedData[rowIndex][Object.keys(updatedData[0] || {})[columnIndex]] = newValue;
        props.setExcelData(updatedData);
    };
    const cacheRef = useRef(
        new CellMeasurerCache({
            defaultHeight: 50, // Chiều cao mặc định của mỗi hàng
            fixedWidth: true, // Chiều rộng của các hàng được giữ nguyên

        })
    );
    const renderHeaderRow = () => {
        const rowData = props.excelData[0]; // Lấy dữ liệu từ hàng đầu tiên
        const columns = Object.keys(rowData);

        return (
            <CellMeasurer
                key="header"
                cache={cacheRef.current}
                parent={null}
                columnIndex={0}
                rowIndex={0}
            >
                {({ measure }) => (
                    <div style={{ width: 200 * columns.length }}>
                        {columns.map((key, columnIndex) => (
                            <div key={key} style={{ display: 'inline-block', width: '200px' }}>
                                <input
                                    type="text"
                                    value={key} // Hiển thị tên cột
                                    readOnly // Chỉ đọc, không thể chỉnh sửa
                                    onBlur={measure} // Đo lại kích thước của ô khi cần thiết
                                />
                            </div>
                        ))}
                    </div>
                )}
            </CellMeasurer>
        );
    };

    const renderRow = ({ index, key, style, parent }) => {
        const rowData = props.excelData[index];
        const columns = Object.keys(rowData || {});

        return (
            <CellMeasurer
                key={key}
                cache={cacheRef.current}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >
                {({ measure }) => (
                    <div style={style}>
                        {
                            columns.map((key, columnIndex) => (
                                <div key={key} style={{ display: 'inline-block', width: '200px' }}>
                                    <input
                                        type="text"
                                        value={rowData[key]}
                                        placeholder="No value"
                                        onChange={(e) => handleCellChange(index, columnIndex, e.target.value)}
                                        onBlur={measure} // Đo lại kích thước của ô khi nội dung thay đổi
                                    />
                                </div>
                            ))}
                    </div>
                )}
            </CellMeasurer>
        );
    };
    const handleInputChange = (e, rowIndex, columnIndex) => {
        const { value } = e.target;
        const newData = [...props.excelData];
        newData[rowIndex][columnIndex] = value;
        props.setExcelData(newData);
    };

    // Render mỗi ô là một input
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        return (
            <input
                key={key}
                style={style}
                value={props.excelData[rowIndex][Object.keys(props.excelData[0])[columnIndex]]}
                onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
            />
        );
    };

    const [open, setOpen] = useState(false);
    const ReturnProfilePage = () => {
        setOpen(false);
    };
    const HandleSubmitDialog = (e) => {
        props.handleFileSubmit(e);
        // CountColumns(props.excelData);
        setOpen(false);
        // console.log(Object.keys(props.excelData).length);
        // e.preventDefault()
        // console.log(props.excelData.reduce((row, curentvalue) => Object.keys(row).length > curentvalue? Object.keys(row).length: curentvalue , -1 ));
        // props.excelData.columnscount = Object.keys(props.excelData.reduce((row, curentvalue) => Object.keys(row).length > curentvalue? Object.keys(row).length: curentvalue , -1 )).length;

    }

    return (
        <div >
            <ButtonGroup aria-label="Basic example" style={{ paddingLeft: 0 }}>
                <Button variant="secondary">Clear Table</Button>
                <Button variant="secondary" onClick={() => setOpen(true)}>Import</Button>
                <Button variant="secondary">Transform Data</Button>
                <Button variant="secondary">Settings</Button>
            </ButtonGroup>
            {/* view data */}
            <div  >
                {props.excelData ? (
                    <div className='table-content'>
                        <div style={{ overflowX: 'auto', overflowY: 'hidden', maxWidth: '100%' }} >
                            <Grid
                                rowCount={props.excelData.length}
                                columnCount={Object.keys(props.excelData[0]).length}
                                rowHeight={cacheRef.current.rowHeight}
                                columnWidth={200}
                                height={400}
                                width={1200}
                                cellRenderer={cellRenderer}
                            />
                        </div>
                    </div>
                ) : (
                    <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No File is uploaded yet!</div>
                )}
            </div>
            <Dialog
                open={open}
                onClose={ReturnProfilePage}
                PaperProps={{
                    component: 'form',
                    onSubmit: HandleSubmitDialog
                }}>
                <DialogTitle>Import File</DialogTitle>
                <DialogContent>
                    <input type="file" className="form-control" required onChange={props.handleFile} />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="secondary" >UPLOAD</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default TableList;