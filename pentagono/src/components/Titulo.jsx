import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Titulo = () => {
   return (
      <>
         <Box 
            sx={{
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               justifyContent: 'space-evenly', 
               height:'18vh'
            }}
         >
            <Typography variant="h3" align="center" component="div">
               Pentágono de Competencias TIC
            </Typography>

            <Typography variant="subtitle1" align="center" component="div" sx={{width: '50%'}}>
               <Divider>Evaluación de los momentos para las cinco competencias xxx</Divider>
            </Typography>
         </Box>
      </>
   )
}

export default Titulo