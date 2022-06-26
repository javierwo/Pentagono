import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import Accordion from "./Accordion";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";

import { useState } from "react";

import RadarChart from "./RadarChart";

const TabResultadosIndividuales = (props) => {

   var theme = createTheme({
      palette: {
         type: 'light',
         background: {
            main: "#F7F7F7",
         },
         primary: {
            main: "#191C25"
         },
         secondary: {
            main: "#FF0000"
         },
         text: {
            primary: "#191C25",
            secondary: "#40495D",
            tabs: "#828DA9",
            resultDocente: "#919191"
         },
         tabs: {
            main: "#FF00FF"
         }
      },
      typography: {
         fontFamily: 'Merriweather',
         //fontSize: 13
      },
   });

   theme = responsiveFontSizes(theme);

   const heightCharts = '80%';
   const heightBusqueda = "7%";
   const heightResultDocents = "13%";
   const heightInterpretacion = "19%";

   return (
      
      <>
         <ThemeProvider theme={theme}>

            <Grid
               container
               //rowSpacing={{ xs: 1, sm: 2, md: 1 }}
               //columnSpacing={{ xs: 1, sm: 2, md: 1 }}
               sx={{ 
                  height: "100%", 
                  boxSizing: "border-box",
                  //bgcolor: "salmon"
               }}
            >   

               <Grid 
                  item 
                  xs={12} 
                  md={12}
                  sx={{ 
                     height: heightBusqueda,
                     boxSizing: "border-box",
                     pl: 1,
                     pr: 1, 
                     //bgcolor: "violet"
                  }}
               >

                  <Grid
                     container
                     sx={{ 
                        height: "100%", 
                        boxSizing: "border-box"
                     }}
                  >   

                     <Grid 
                        item 
                        xs={12} 
                        md={2}
                        sx={{ 
                           height: '100%',
                        }}
                     >

                        <Box 
                           sx={{ 
                              bgcolor: 'white', 
                              height: '100%',
                              borderRadius: 3,
                              display: 'flex',
                              direction: 'column',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              bgcolor: 'white',
                              fontSize: 5
                           }}
                        > 
                           <InputBase sx={{ ml: 1, flex: 1}} placeholder="Número de Cédula"/>
                           <IconButton sx={{ p: "8px" }} aria-label="search" onClick={() => {}}>
                              <SearchIcon />
                           </IconButton>
                        </Box >

                     </Grid>

                  </Grid>

               </Grid>


               <Grid 
                  item 
                  xs={12}
                  md={12}
                  sx={{ 
                     height: heightResultDocents,
                     pl: 1,
                     pr: 1,
                     pb: 0.5,
                     //bgcolor: 'red',
                     display: 'flex',
                     direction: 'row',
                     alignItems: 'flex-end'
                  }}
               >

                  <Box 
                     sx={{ 
                        //bgcolor: 'green',
                        width: "100%"

                     }}
                  >
                     <Typography 
                        variant="subtitle2" 
                        component="div"
                        sx={{
                           fontWeight: 400,
                           fontSize: 20, 
                           color: "text.resultDocente"
                        }}
                     >
                        Resultados de Nombre del Docente
                     </Typography>
                     <Divider />
                  </Box>
                  
               </Grid>



               <Grid 
                  item 
                  xs={12}
                  md={6}
                  sx={{ 
                     height: heightCharts,
                     p: 1,
                     //bgcolor: 'green'
                  }}
               >

                  
                  
                  <Paper 
                     elevation={0} 
                     sx={{ 
                        height: "100%",
                        borderRadius: 3,
                        bgcolor: "white"
                     }}
                  >
                     <Box 
                        sx={{ 
                           height: "100%" 
                        }}
                     >
                        <RadarChart />
                     </Box>
                  </Paper>
               </Grid>

               <Grid 
                  xs={12}
                  md={6}
                  sx={{ 
                     height: heightCharts,
                     p: 1,
                     display: 'flex',
                     flexDirection: 'column',
                     //justifyContent: 'space-between',
                     gap:1.5
                     //bgcolor: 'salmon'
                  }}
               >

                  <Accordion competencia={"Competencia Pedagógica"} momento={1}/>
                  <Accordion competencia={"Competencia Comunicativa"} momento={2}/>
                  <Accordion competencia={"Competencia de Gestión"} momento={3}/>
                  <Accordion competencia={"Competencia Investigativa"} momento={1}/>
                  <Accordion competencia={"Competencia Tecnológica"} momento={2}/>

               </Grid>


            </Grid>

         </ThemeProvider>
      </>

   )
}

export default TabResultadosIndividuales