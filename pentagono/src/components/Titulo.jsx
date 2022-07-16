import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";

const Titulo = () => {

   var theme = createTheme({
      typography: {
         fontFamily: 'Merriweather',
      },
   });

   theme = responsiveFontSizes(theme);
   
   return (
      <>
         <Box 
            sx={{
               height:'13vh',
               p:1
            }}
         >

            <ThemeProvider theme={theme}>
               <Stack 
                  justifyContent="center"
                  spacing={0.5}
                  className='h-full'
               >
                  <Typography className="text-titulo w-full font-normal" variant="h4" align="center" component="div">
                     Pentágono de Competencias TIC
                  </Typography>
                  <Typography className="text-subtitulo w-full font-light text-base" variant="subtitle2" align="center" component="div">
                     Evaluación de los momentos para las cinco competencias
                  </Typography>
               </Stack>
            </ThemeProvider>

         </Box>
      </>
   )
}

export default Titulo