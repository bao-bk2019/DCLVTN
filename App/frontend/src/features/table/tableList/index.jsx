import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

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
    const cacheRef = useRef(
        new CellMeasurerCache({
            defaultHeight: 50, // Chiều cao mặc định của mỗi hàng
            //fixedWidth: true, // Chiều rộng của các hàng được giữ nguyên
            defaultWidth: 200,
        })
    );
    const renderRow = ({ index, key, style, parent }) => {
        const rowData = props.excelData[index];
        const columns = Object.keys(rowData);

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
    return (
        <div >
            <ButtonGroup aria-label="Basic example" style={{ paddingLeft: 140 }}>
                <Button variant="secondary">Clear Table</Button>
                <Button variant="secondary">Import/Export</Button>
                <Button variant="secondary">Transform Data</Button>
                <Button variant="secondary">Settings</Button>
            </ButtonGroup>
            <div >
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
                <div >
                    {props.excelData ? (
                        // <div className="table-responsive" style={{ maxHeight: 300 }}>
                        //     <table className="table">

                        //         <thead>
                        //             <tr>
                        //                 {Object.keys(props.excelData[0]).map((key) => (
                        //                     <th key={key}>{key}</th>
                        //                 ))}
                        //             </tr>
                        //         </thead>

                        //         <tbody>
                        //             {props.excelData.map((individualExcelData, rowIndex) => (
                        //                 <tr key={rowIndex}>
                        //                     {Object.keys(props.excelData[0]).map((key, columnIndex) => (
                        //                         (individualExcelData[key]) ? (
                        //                             <td key={key}>
                        //                                 <input
                        //                                     type="text"
                        //                                     value={individualExcelData[key]}
                        //                                     onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                        //                                 />
                        //                             </td>
                        //                         ) : (
                        //                             <td key={key}>
                        //                                 <input
                        //                                     type="text"
                        //                                     value=""
                        //                                     placeholder='No value'
                        //                                     onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                        //                                 />
                        //                             </td>
                        //                         )
                        //                     ))}
                        //                 </tr>
                        //             ))}
                        //         </tbody>

                        //     </table>
                        // </div>
                        <List
                            width={1400} // Chiều rộng của bảng
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
    );
}

export default TableList;