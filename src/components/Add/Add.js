import { Box, Button, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { borderColor } from '@mui/system';

const StyledModal = styled(Modal)({
  display: 'flex', justifyContent: 'center', alignItems: 'center'
})
const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip onClick={e => setOpen(true)}
        title='add' sx={{ position: 'fixed', top: '530px', left: '100px' }}>
        <Fab color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width='400px' height='300px' bgcolor='white' borderRadius={2}>
          <Typography id="modal-modal-title" variant="h5" padding="16px 8px" fontWeight={300} alignItems="center">
            New Post
          </Typography>
          <TextField sx={{padding:'10px', width:"90%", borderColor:'GrayText'}}
          id="standard-multiline-static"
          placeholder={`What's on your mind`}
          multiline
          rows={4}
          variant="standard"
        />
          <Button variant='contained' sx={{ width: '70%', margin: '2px', marginY: '20px' }}>CREATE</Button>
          <Button variant='outlined' sx={{ width: '28%', color:'gray'}}>DISCARD</Button>
        </Box>
      </StyledModal>

    </>
  )
}

export default Add