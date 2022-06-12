import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Titulo from './Titulo';
import Navigation from './Navigation';

const Delete = () => {
   return (
      <>
         <Grid 
            container
            direction="column"
            
            sx={{height: '100%'}}
            >

            <Grid item xs={3}>
               <Titulo/>
            </Grid>
            <Grid item xs={9}>
               <Navigation/>
            </Grid>
         </Grid>
      </>
   )
}

export default Delete