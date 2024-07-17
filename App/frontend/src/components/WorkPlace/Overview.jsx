import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExcelLogo from '../Img/icons8-excel-48.png';
import TxtLogo from '../Img/icons8-txt-50.png';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import GetBackToTopButton from '../GetBackToTopButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from 'react-select'
import CircularProgress from '@mui/material/CircularProgress';
import HomeIcon from '@mui/icons-material/Home';
import LoadingDot from '../Animation/LoadingDot';
import { DataGrid } from '@mui/x-data-grid';
import { create } from '@mui/material/styles/createTransitions';
import Papa from "papaparse";
// import { Home } from '@mui/icons-material';


function Overview() {
  const [data, setData] = useState([]);
  const [columnTest, setColumnTest] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const [isUpload, setIsUpload] = useState(false);
  const allowedExtensions = ["csv"];
  // Define state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");

  // Sample state
  const [rows, setRows] = useState([
    createData("id", "Transaction ID"),
    createData("date", "Date"),
  ]);
  // const [columnTest, setColumnTest] = useState([]);
  // Define Ref
  const excelFileInputRef = useRef();
  const textFileInputRef = useRef();
  // Define data
  const option = [
    {value: "Transaction ID", label: "Transaction ID"},
    {value: "Date", label: "Date"},
    {value: "Time", label: "Time"},
    {value: "Customer ID", label: "Customer ID"},
    {value: "Product ID", label: "Product ID"},
    {value: "Product Name", label: "Product Name"},
    {value: "Category", label: "Category"},
    {value: "Quantity", label: "Quantity"},
    {value: "Unit Price", label: "Unit Price"},
    {value: "Total Price", label: "Total Price"},
    {value: "Payment Method", label: "Payment Method"},
    {value: "Store Location", label: "Store Location"},
    {value: "Discount", label: "Discount"},
    {value: "Salesperson ID", label: "Salesperson ID"},
    {value: "Profit Margin", label: "Profit Margin"},
    {value: "Other", label: "Other"},
  ];
  const keysDescription = {
      "Transaction ID": "A unique identifier for each transaction or sale.",
      "Date": "The date on which the transaction occurred.",
      "Time": "The time at which the transaction occurred.",
      "Customer ID": "A unique identifier for each customer.",
      "Product ID": "A unique identifier for each product.",
      "Product Name":"The name or description of the product.",
      "Category": "The category to which the product belongs (e.g., electronics, clothing, groceries).",
      "Quantity": "The number of units of the product sold in the transaction.",
      "Unit Price": "The price per unit of the product.",
      "Total Price": "The total price for the quantity of products sold in the transaction (Quantity * Unit Price).",
      "Payment Method": "The method of payment used (e.g., cash, credit card, debit card).",
      "Store Location": "The location of the store where the transaction took place.",
      "Discount": "Any discount applied to the transaction.",
      "Salesperson ID": "A unique identifier for the salesperson handling the transaction.",
      "Profit Margin": "The profit margin on the product sold.",
      "Other": "Other",
  };
  const keysColumn = {
    "Transaction ID": {field: 'Transaction ID', headerName:"Transaction ID", width: 130},
      "Date": {field: 'Date', headerName:"Date", width: 130},
      "Time": {field: 'Time', headerName:"Time", width: 130},
      "Customer ID": {field: 'Customer ID', headerName:"Customer ID", width: 130},
      "Product ID": {field: 'Product ID', headerName:"Product ID", width: 130},
      "Product Name": {field: 'Product Name', headerName:"Product Name", width: 130},
      "Quantity": {field: 'Quantity', headerName:"Quantity", width: 130},
      "Unit Price": {field: 'Unit Price', headerName:"Unit Price", width: 130},
      "Total Price": {field: 'Total Price', headerName:"Total Price", width: 130},
      "Payment Method": {field: 'Payment Method', headerName:"Payment Method", width: 130},
      "Store Location": {field: 'Store Location', headerName:"Store Location", width: 130},
      "Discount": {field: 'Discount', headerName:"Discount", width: 130},
      "Salesperson ID": {field: 'Salesperson ID', headerName:"Salesperson ID", width: 130},
      "Profit Margin": {field: 'Profit Margin', headerName:"Profit Margin", width: 130},
      "Other": {field: 'Other', headerName:"Other", width: 130},
  };
  // Funtion
  function createData(name, systemfield) {
    return { name, systemfield};
  };
  function getDescription(name){
    return keysDescription[name];
  };
  function getColumns(colName){
    return keysColumn[colName]
  };
  function getSelect(val, index){
    setRows(rows.map((row, i) =>
      i === index? {...row, systemfield: val.value}:row
    ));
  }
  function handleFileChange(e){
    setError("");
 
    // Check if user has entered the file
    if (e.target.files.length) {
        const inputFile = e.target.files[0];

        // Check the file extensions, if it not
        // included in the allowed extensions
        // we show the error
        const fileExtension =
            inputFile?.type.split("/")[1];
        if (
            !allowedExtensions.includes(fileExtension)
        ) {
            setError("Please input a csv file");
            return;
        }

        // If input type is correct set the state
        setFile(inputFile);
    }
  }
  const handleParse = () => {
     
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return ;

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, {
            header: true,
        });
        const parsedData = csv?.data;

        setColumnTest(Object.keys(parsedData[0]));

        setData(parsedData);
        setLoading(true);
        setTimeout(()=>{
          setIsUpload(true);
          setLoading(false);
        },1000);
        
    };
    reader.readAsText(file);
  };
  function createTestField(){
    if (columnTest) 
      return columnTest.map((item)=> ({field: item, headerName:item, width: 130}));
    return [];
  }
  useEffect(() => {
    handleParse();
  },[file]);

  const columns = [keysColumn["Transaction ID"], keysColumn["Customer ID"], keysColumn["Product ID"], keysColumn["Payment Method"], keysColumn["Store Location"], keysColumn["Salesperson ID"]];
  const rows1 =[
    {"Transaction ID": 1, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 2, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 3, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 4, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 5, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 6, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 7, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 8, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 9, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
    {"Transaction ID": 10, "Customer ID":2 , "Product ID": 3, "Payment Method": 4, "Store Location": 5, "Salesperson ID": 6,},
  ];

  return (
    <div className='mx-32 mt-8 min-h-1000'>
      <div className='flex items-center text-deep-blue'>
        <Link to='../home' ><HomeIcon/></Link>
        <span className='font-bold px-1 font-mono'> &gt; </span>
        <Link to='../overview'>
          <h1 className=" font-sans text-xl font-bold ">Overview</h1>
        </Link>
        <span className='font-bold px-1 font-mono'> &gt; </span>
      </div>
      <div className='flex text-vivid-blue'>
        <PreviewIcon sx={{height:"auto", width:"36px"}} />
        <h2 className=" font-sans text-3xl font-bold"> Data Review</h2>
      </div>

      {!isUpload?  
      <Box sx={{display: "flex", flexDirection: "column", border:"1px solid", borderStyle:"dotted", margin: "16px 0px", width:"80vw", height:"500px", alignItems:"center", justifyContent:"center", background:"white"}}>
        <div className="text-xl">Add your data in here</div>
        <div className="text-xl">Once loaded, your data will appear in this section.</div>
        <div className='flex flex-row space-x-4 mt-4'>
        <button className='flex flex-col border rounded w-36 p-1 items-center justify-center bg-light-blue'
        onClick={() => excelFileInputRef.current.click()}
        >
          <img src={ExcelLogo}></img>
          <span >Import from Excel</span>
          <input type='file' ref={excelFileInputRef} onChange={handleFileChange} accept='application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' hidden/>
        </button>
        <button className='flex flex-col border rounded w-36 p-1 items-center justify-center bg-light-blue'
        onClick={() => textFileInputRef.current.click()}
        >
          <img src={TxtLogo}></img>
          <span>Import from Text/csv</span> 
          <input type='file' ref={textFileInputRef} onChange={handleFileChange} accept='text/csv' hidden/>
        </button>
        </div>
      </Box>:
        loading? 
        <div className='text-center flex flex-col items-center h-400 w-80vw'>
          <LoadingDot/>
          <h3 className='text-3xl font-bold text-vivid-pink'>Loading</h3>
        </div> 
          // Sample table
          :<div style={{ height: 400, width: '100%', margin: "16px 0px"}}>
            <DataGrid
              rows={data}
              columns={createTestField()}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowId={(row)=>row[columnTest[0]]} /// Fix when add api
            />
          </div>
      }

      <div className="flex text-vivid-blue">
        <EditIcon sx={{height:"auto", width:"36px"}} />
        <h2 className=" font-sans text-3xl font-bold">Setting Fields</h2>
      </div>
      {isUpload?
      <>
      <TableContainer component={Paper} sx={{margin:"10px 0px", overflow:"visible"}} >
        <Table sx={{ minWidth: 650, maxWidth: 1000}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data Field</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>System Field</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{getDescription(row.systemfield)}</TableCell>
                <TableCell><Select 
                // value={row.systemfield}
                defaultValue={{value: row.systemfield, label: row.systemfield}}
                onChange={(value) => getSelect(value, index)}
                options={option}
                />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained'>Apply</Button>
      </>
      :loading? <CircularProgress/>
      :<div className='text-center flex flex-col items-center bg-white my-4 mx-0 w-80vw'>
      <LoadingDot/>
      <h3 className='text-3xl font-bold text-vivid-pink'>I'm waiting for your data</h3>
      </div>
      }
      <GetBackToTopButton/>
    </div>
  )
}

export default Overview