import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';

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
      typography: {
         fontFamily: 'Merriweather'
      }
   });

   theme = responsiveFontSizes(theme);

   const HEIGHTBUSQUEDA = "12%"
   const HEIGHTRESULTADO = "88%"
   const HEIGHTINDVTITULO = "15%"
   const HEIGHTINDVPENT = "85%"

   return (
      
      <>
         <ThemeProvider theme={theme}>

            <Box 
               className="px-2 box-border flex items-center"
               sx={{ 
                  height: HEIGHTBUSQUEDA,
               }}
            >
               <Grid
                  container
                  className="h-1/2"
               >   
                  <Grid 
                     item 
                     xs={12} 
                     md={3}
                     className="h-full"
                  >
                     <Box 
                        className="h-full rounded-xl flex content-start items-center bg-white"
                     > 
                        <InputBase 
                           className="pl-2 flex-1 text-sm"
                           placeholder="Número de Cédula..." 
                        />
                        <IconButton 
                           className="p-1"
                           aria-label="search" 
                           onClick={() => {}}>
                           <SearchIcon />
                        </IconButton>
                     </Box >
                  </Grid>
               </Grid>
            </Box>

            <Box 
               className="px-2 pb-2 box-border"
               sx={{ 
                  height: HEIGHTRESULTADO
               }}
            > 
               <Box 
                  className="h-full bg-indivbg"
               > 
                  <Box 
                     className="flex items-center w-full p-2"
                     sx={{ 
                        height: HEIGHTINDVTITULO,
                     }}
                  >
                     <Box 
                        className="w-full"
                     >
                        <Typography 
                           className="text-colordocente pb-1"
                           variant="h6" 
                           component="div"
                        >
                           Nombre del Docente
                        </Typography>
                        <Divider />
                     </Box>
                  </Box>

                  <Grid 
                     container 
                     sx={{ 
                        height: HEIGHTINDVPENT
                     }}
                  >
                     <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        className="h-full px-2 pb-2"
                     >  
                        <Box 
                           className="flex items-center font-light text-indvtitulo"
                           sx={{
                              height: '10%'
                           }}
                        >
                           <Typography className="font-bold" variant="subtitle1">Pentágono de Competencias</Typography>
                        </Box>
                        <Box 
                           className="bg-white"
                           sx={{
                              height: '90%'
                           }}
                        >
                           <RadarChart />
                        </Box>
                     </Grid>

                     <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        className="h-full px-2 pb-2"
                     >
                        <Box 
                           className="flex items-center font-light text-indvtitulo"
                           sx={{
                              height: '10%'
                           }}
                        >
                           <Typography className="font-bold" variant="subtitle1">Interpretación</Typography>
                        </Box>

                        <Grid 
                           className="overflow-auto"
                           container 
                           sx={{ 
                              height:'90%'
                           }}
                        >
                           <Grid 
                              item 
                              xs={12} 
                              md={6} 
                              className="h-2/5 pb-3 pr-3"
                           >
                              <Accordion competencia={"Competencia Pedagógica"} momento={1} interpret={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                           </Grid>
                           <Grid 
                              item 
                              xs={12} 
                              md={6} 
                              className="h-2/5 pb-3 pr-3"
                           >
                              <Accordion competencia={"Competencia Comunicativa"} momento={2} interpret={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                           </Grid>
                           <Grid 
                              item 
                              xs={12} 
                              md={6} 
                              className="h-2/5 pb-3 pr-3"
                           >
                              <Accordion competencia={"Competencia de Gestión"} momento={3} interpret={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                           </Grid>
                           <Grid 
                              item 
                              xs={12} 
                              md={6} 
                              className="h-2/5 pb-3 pr-3"
                           >
                              <Accordion competencia={"Competencia Investigativa"} momento={1} interpret={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                           </Grid>
                           <Grid 
                              item 
                              xs={12} 
                              md={6} 
                              className="h-2/5 pr-3"
                           >
                              <Accordion competencia={"Competencia Tecnológica"} momento={2} interpret={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                           </Grid>
                        </Grid>

                     </Grid>
                  </Grid>

               </Box >
            </Box>

         </ThemeProvider>

      </>

   )
}

export default TabResultadosIndividuales