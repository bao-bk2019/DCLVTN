import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Papa from "papaparse";
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button} from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import GetAppIcon from '@mui/icons-material/GetApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SingleValue from '../Chart/SingleValue';
// import AddDialog from '../Chart/Dialog/AddDialog';
import MainContainer from '../Chart/MainContainer';
import FormDialog from '../Chart/Dialog/FormDialog';
import LineChart from '../Chart/Content/LineChart';

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [open, setOpen] = useState(false);
  const [listOfCharts, setListOfCharts] = useState([]);
  const [rows, setRows] = useState([]);
  const [file, setFile] = useState(null);
  const [columnTest, setColumnTest] = useState([]);
  const [error, setError] = useState(null);
  const allowedExtensions = ["csv"];
  const textFileInputRef = useRef();

  function handleFileChange(e){
    
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
    };
    reader.readAsText(file);
  };

  function clearAll(){
    setListOfCharts([]);
  };

  useEffect(() => {
    handleParse();
  },[file]);

  useEffect(()=>{
    Papa.parse("../Data/customer_shopping_data.csv", {
      download: true,
      complete: data => {
          setRows(data.data);
      }
  });

  },[])
  return (
    <div className='mx-32 mt-8 min-h-1000'>
      <div className='flex items-center text-deep-blue'>
        <Link to='../home' ><HomeIcon/></Link>
        <span className='font-bold px-1 font-mono'> &gt; </span>
        <Link to='../dashboard'>
          <h1 className=" font-sans text-xl font-bold ">Dashboard</h1>
        </Link>
        <span className='font-bold px-1 font-mono'> &gt; </span>
      </div>
      <div className='flex text-vivid-blue'>
        <SummarizeIcon sx={{height:"auto", width:"36px"}} />
        <h2 className=" font-sans text-3xl font-bold"> Your Report</h2>
      </div>
      <div className=' flex gap-x-2 mt-2'>
          <Button variant='contained' onClick={()=>setOpen(true)}> <AddIcon/> Add Visualization</Button> 
          <Button variant='contained'> <FilterAltIcon/> Add Filter</Button>
          <Button variant='contained' onClick={()=>clearAll()}> <ClearIcon/> Clear All</Button>
          <Button variant='contained'> <GetAppIcon/> Export</Button>
          <Button variant='contained' onClick={() => textFileInputRef.current.click()}><FileUploadIcon/> Add Data(Test)</Button>
      </div>
      
      <Box sx={{display: "flex", flexDirection: "row", margin: "16px 0px", width:"82vw", height:"auto", background:"inherit", flexWrap:'wrap'}}>
        {listOfCharts.map((chart, index) =>
        chart.type === 'value'?
          <MainContainer index={index} width={chart.width} title={chart.title} type={chart.type} listOfCharts={listOfCharts} setListOfCharts={setListOfCharts} option={chart.option}/>
        :chart.type === 'line'?
          <MainContainer index={index} width={chart.width} title={chart.title} type={chart.type} listOfCharts={listOfCharts} setListOfCharts={setListOfCharts} option={chart.option}/>
        :null
      )} 
        {(listOfCharts) && <></>}
      </Box>
      <FormDialog title="Add Visualization" method='add' open={open} setOpen={setOpen} listOfCharts={listOfCharts} setListOfCharts={setListOfCharts} type='add' listCols={columnTest}/>
      <input type='file' ref={textFileInputRef} onChange={handleFileChange} accept='text/csv' hidden/>
    </div>
  )
}

export default Dashboard