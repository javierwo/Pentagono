import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";
import Typography from '@mui/material/Typography';

import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ComputerIcon from '@mui/icons-material/Computer';

const Accordion = (props) => {

   const [isOpen, setIsOpen] = useState(false);

   const variants = {
      open: { opacity: 1, height: "auto"},
      collapsed: { opacity: 0, height: 0}
   }

   const COLORMOMENTO1 = "#6996D3";
   const COLORMOMENTO2 = "#4380D3";
   const COLORMOMENTO3 = "#05316D";

   let COLORMOMENTO; 
   let MOMENTO; 
   let ICONO;

   switch (props.momento) {
      case 1:
         COLORMOMENTO = COLORMOMENTO1;
         MOMENTO = "Momento Innovador"
      break;
      
      case 2:
         COLORMOMENTO = COLORMOMENTO2;
         MOMENTO = "Momento Integrador"
      break;
      
      case 3:
         COLORMOMENTO = COLORMOMENTO3;
         MOMENTO = "Momento Explorador"
      break;

      default:
         COLORMOMENTO = "BLACK"
         MOMENTO = "Momento"
   } 

   switch (props.competencia) {
      case "Competencia Pedagógica":
         ICONO = <SchoolIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </SchoolIcon>
      break;
      
      case "Competencia Comunicativa":
         ICONO = <GroupsIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </GroupsIcon>
      break;
      
      case "Competencia de Gestión":
         ICONO = <EngineeringIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </EngineeringIcon>
      break;

      case "Competencia Investigativa":
         ICONO = <ContentPasteSearchIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </ContentPasteSearchIcon>
      break;

      case "Competencia Tecnológica":
         ICONO = <ComputerIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </ComputerIcon>
      break;

      default:
         ICONO = <SchoolIcon fontSize="large" sx={{ color: COLORMOMENTO}}> </SchoolIcon>
   } 

   var theme = createTheme({
      palette: {
         type: 'light',
         primary: {
            main: COLORMOMENTO
         }
      },         
      text: {
         primary: "#191C25",
         secondary: "#40495D",
         tabs: "#828DA9",
         resultDocente: "#919191",
         tituloInterpretacion: "#FF0000",
         red: "#FF0000"
      },
      typography: {
         fontFamily: 'Merriweather',
         fontSize: 11
      },
   });

   theme = responsiveFontSizes(theme);

   return (

      <>

         <Box
            sx = {{
               height: '100%',
               //bgcolor:'white'
            }}
         >

            <motion.div
               key="question"
               onClick={() => setIsOpen(!isOpen)}
               //animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
               whileHover={{ scale: 1.01 }}
               className="h-full"
            >

               <Paper 
                  elevation={0} 
                  sx={{ 
                     borderRadius: 3,
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'row'
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
                        xs={3} 
                        md={2}
                        sx={{ 
                           height: '100%',
                        }}
                     >
                        <Box
                           sx={{
                              height:'100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                           }}
                        >
                           {ICONO}
                        </Box>
                     </Grid>

                     <Grid 
                        item 
                        xs={9} 
                        md={10}
                     >
                        <Stack 
                           direction="column"
                           justifyContent="center"
                           spacing={0.3}
                           className="h-full"
                        >
                           <Box>  
                              <ThemeProvider theme={theme}>
                                 <Chip label={MOMENTO} size="small" color="primary"/>
                              </ThemeProvider>
                           </Box>

                           <ThemeProvider theme={theme}>
                              <Typography 
                                 variant="h6" 
                                 component="div"
                                 sx={{
                                    color: "text.secondary"
                                 }}
                              >
                                 {props.competencia}
                              </Typography>
                           </ThemeProvider>
                           
                        </Stack>
                           
                     </Grid>

                  </Grid>

               </Paper> 

            </motion.div>

            <AnimatePresence 
               initial={false}>
               {isOpen && (
                  <motion.section
                     key="answer"
                     initial="collapsed"
                     animate="open"
                     exit="collapsed"
                     variants={variants}
                     transition={{ duration: 0.6, easeInOut: [0.98,-0.02,0.12,0.95] }}
                     //className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
                  >

                     <Box
                        sx = {{
                           bgcolor: 'white',
                           borderRadius: 3
                        }}
                     >
                        Yes i do
                     </Box>

                  </motion.section>
               )}

            </AnimatePresence>

         </Box>
            
      </>
   );
};

export default Accordion;