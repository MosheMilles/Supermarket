import './categoriesBar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




export default function CategoriesBar({ categories,filterByCategory}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display:'flex' }}
          >
            {categories.map(category => 
            // {
            //   return (
                <Box className='category' key={category} sx={{ display: 'flex', flexDirection: 'row', borderLeft:1, p:2 }} onClick={e=>{filterByCategory(e.target.textContent)}}>{category}</Box>
              // )
            // }
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



