import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Titulo = () => {
   return (
      <>
         <Box 
            sx={{
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               justifyContent: 'space-evenly', 
               height:'100%'
            }}
         >
            <Typography variant="h3" align="center" component="div">
               Pentágono de Competencias TIC
            </Typography>

            <Typography variant="subtitle1" align="center" component="div">
               Evaluación de los momentos para las cinco competencias xxx
            </Typography>
         </Box>
      </>
   )
}

export default Titulo