import React from 'react';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from '@mui/material';
// import CardContent from '@mui/material';
// import CardContent from '@mui/material/CardContent';

function SingleValue(props) {
  const {column, cal} = props;
  return (
    <div className='text-3xl font-bold text-center text-dark-blue'>{column} {cal}</div>
  )
}

export default SingleValue