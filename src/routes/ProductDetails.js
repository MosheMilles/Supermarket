import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function ProductDetails( {open, closeDialog }) {
    console.log(open)
   
    return (
        <Dialog  open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <Button onClick={closeDialog}>חזור</Button>
         
        </Dialog>
    );
}
export default ProductDetails;

