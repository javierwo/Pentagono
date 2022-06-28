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
import { Divider } from "@mui/material";

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
   let CHIP;

   switch (props.momento) {
      case 1:
         COLORMOMENTO = COLORMOMENTO1;
         MOMENTO = "Momento Innovador"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento1 text-xs"/>
      break;
      
      case 2:
         COLORMOMENTO = COLORMOMENTO2;
         MOMENTO = "Momento Integrador"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento2 text-xs"/>
      break;
      
      case 3:
         COLORMOMENTO = COLORMOMENTO3;
         MOMENTO = "Momento Explorador"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento3 text-xs"/>
      break;

      default:
         COLORMOMENTO = "BLACK"
         MOMENTO = "Momento"
   } 

   switch (props.competencia) {
      case "Competencia Pedagógica":
         ICONO = <SchoolIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </SchoolIcon>
      break;
      
      case "Competencia Comunicativa":
         ICONO = <GroupsIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </GroupsIcon>
      break;
      
      case "Competencia de Gestión":
         ICONO = <EngineeringIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </EngineeringIcon>
      break;

      case "Competencia Investigativa":
         ICONO = <ContentPasteSearchIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </ContentPasteSearchIcon>
      break;

      case "Competencia Tecnológica":
         ICONO = <ComputerIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </ComputerIcon>
      break;

      default:
         ICONO = <SchoolIcon fontSize="medium" sx={{ color: COLORMOMENTO}}> </SchoolIcon>
   } 

   var theme = createTheme({
      typography: {
         fontFamily: 'Merriweather',
      }
   });

   theme = responsiveFontSizes(theme);

   return (

      <>
         <Box
            className="h-full bg-white p-2"
         >

            <motion.div
               key="card"
               onClick={() => setIsOpen(!isOpen)}
               //animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
               //whileHover={{ scale: 1.01 }}
               className="h-full"
            >

               <Box
                  className="flex items-center justify-between"
                  sx={{
                     height: '30%'
                  }}
               >
                  {CHIP}
                  {ICONO}
               </Box>

               <ThemeProvider theme={theme}>
                  <Box 
                     className="flex items-center"
                     sx={{
                        height: '30%'
                     }}
                  >
                     <Typography 
                        variant="subtitle1" 
                        component="div"
                        className="text-subtitulo"
                     >
                        {props.competencia}
                     </Typography>
                  </Box>

                  <Divider />

                  <Box
                     className="overflow-auto"
                     sx={{
                        height: '40%'
                     }}
                  >
                     <Typography 
                        variant="body1" 
                        component="div"
                        className="text-colorinterpret pt-2 text-xs"
                     >
                        {props.interpret}
                     </Typography>
                  </Box> 

               </ThemeProvider>
               
            </motion.div>

            {/**
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
            */}
         </Box>
            
      </>
   );
};

export default Accordion;