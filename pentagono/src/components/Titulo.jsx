import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";

const Titulo = () => {

   var theme = createTheme({
      palette: {
         type: 'light',
         background: {
            main: "#FBFBFB",
         },
         text: {
            primary: "#191C25",
            secondary: "#40495D",
            tertiary: "#FFFFFF"
         },
      },
      typography: {
         fontFamily: 'Merriweather',
      },
   });

   theme = responsiveFontSizes(theme);

   return (
      <>
         <Box 
            sx={{
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               justifyContent: 'space-evenly', 
               height:'18vh',
               boxSizing: "border-box",
               p:1
            }}
         >
            <ThemeProvider theme={theme}>
               <Typography variant="h3" align="center" component="div"  sx={{width: '100%', fontWeight: 400, color: 'text.primary'}}>
                  Pentágono de Competencias TIC
               </Typography>
               {/*#6e6e73*/}
               <Typography variant="subtitle2" align="center" component="div" sx={{fontSize: 17, width: '100%', fontWeight: 300, color: 'text.secondary'}}>
                  Evaluación de los momentos para las cinco competencias xxx
               </Typography>
            </ThemeProvider>
         </Box>
      </>
   )
}

export default Titulo