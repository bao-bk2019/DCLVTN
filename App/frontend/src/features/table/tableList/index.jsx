import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { List, CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';
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
            //fixedWidth: true, // Chiều rộng của các hàng được giữ nguyên
            defaultWidth: 200,
        })
    );
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
                        {columns.map((key, columnIndex) => (
                            <div key={key} style={{ display: 'inline-block', width: `${100 / columns.length}%` }}>
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
    function cellRenderer({columnIndex, key, rowIndex, style}) {
        return (
          <div key={key} style={style}>
            {props.excelData[rowIndex][columnIndex]}
          </div>
        );
      }
    
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
    // const ColumnCountandLength = {
    //     count: Object.keys(props.excelData.reduce((row, curentvalue) => Object.keys(row).length > curentvalue? Object.keys(row).length: curentvalue , -1 )).length ,
    //     length: 100
    // }
    // function CountColumns(data) {
    //     return Object.keys(data[0]).length
    // }
    return (
        <div >
            <ButtonGroup aria-label="Basic example" style={{ paddingLeft: 0 }}>
                <Button variant="secondary">Clear Table</Button>
                <Button variant="secondary" onClick={() => setOpen(true)}>Import</Button>
                <Button variant="secondary">Transform Data</Button>
                <Button variant="secondary">Settings</Button>
            </ButtonGroup>
            <div >
                {/* form */}
                {/* <form className="form-group custom-form" onSubmit={props.handleFileSubmit}>
                    <input type="file" className="form-control" required onChange={props.handleFile} />
                    <ButtonGroup aria-label="Basic example" >
                        <Button type="submit" variant="secondary" >UPLOAD</Button>
                    </ButtonGroup>

                    {props.typeError && (
                        <div className="alert alert-danger" role="alert">{props.typeError}</div>
                    )}
                </form> */}

                {/* view data */}
                <div >
                    <div className='table-content'>
                    {props.excelData ? (
                        <List
                            width={1200} // Chiều rộng của bảng
                            height={300} // Chiều cao của bảng
                            rowCount={props.excelData.length} // Số hàng trong bảng
                            rowHeight={cacheRef.current.rowHeight} // Lấy chiều cao từ cache
                            rowRenderer={renderRow} // Render từng hàng
                        />
                    ) : (
                        <div>No File is uploaded yet!</div>
                    )}
                    </div>
                </div>

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
        </div>
    );
}

export default TableList;