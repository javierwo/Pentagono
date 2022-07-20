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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Acordion = (props) => {

   const COLORMOMENTO1 = "#03045e";
   const COLORMOMENTO2 = "#0077b6";
   const COLORMOMENTO3 = "#00b4d8";

   let COLORFONDO;

   let COLORMOMENTO; 
   let MOMENTO; 
   let ICONO;
   let CHIP;

   switch (props.momento) {
      case 1:
         COLORMOMENTO = COLORMOMENTO1;
         MOMENTO = "Momento Innovador"
         COLORFONDO = "#E6F3F1"
         //COLORFONDO = "#f9f9f9"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento1 text-xs"/>
      break;
      
      case 2:
         COLORMOMENTO = COLORMOMENTO2;
         MOMENTO = "Momento Integrador"
         COLORFONDO = "#E6FFE6"
         //COLORFONDO = "#f9f9f9"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento2 text-xs"/>
      break;
      
      case 3:
         COLORMOMENTO = COLORMOMENTO3;
         MOMENTO = "Momento Explorador"
         COLORFONDO = "#E6FFE6"
         //COLORFONDO = "#f9f9f9"
         CHIP = <Chip label={MOMENTO} size="small" className="text-white bg-momento3 text-xs"/>
      break;

      default:
         COLORMOMENTO = "BLACK"
         MOMENTO = "Momento"
   } 

   switch (props.competencia) {
      case "Competencia Pedagógica":
         ICONO = <SchoolIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </SchoolIcon>
      break;
      
      case "Competencia Comunicativa":
         ICONO = <GroupsIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </GroupsIcon>
      break;
      
      case "Competencia de Gestión":
         ICONO = <EngineeringIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </EngineeringIcon>
      break;

      case "Competencia Investigativa":
         ICONO = <ContentPasteSearchIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </ContentPasteSearchIcon>
      break;

      case "Competencia Tecnológica":
         ICONO = <ComputerIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </ComputerIcon>
      break;

      default:
         ICONO = <SchoolIcon fontSize="medium" sx={{ color: COLORMOMENTO, marginRight: 1}}> </SchoolIcon>
   } 

   return (

      <>
         <Box>
            <Accordion
               square
               className="shadow-none border-l-4"
               sx={{borderColor: COLORMOMENTO, bgcolor: COLORFONDO}}
            >
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Box>
                     <Box className="text-white text-sm">
                        {ICONO}
                        {CHIP}
                     </Box>
                     <Box className="text-colordocente text-lg pt-1 font-thin">
                        {props.competencia}
                     </Box>
                  </Box>
               </AccordionSummary>
               <AccordionDetails>
                  {props.interpret}
               </AccordionDetails>
            </Accordion>
         </Box>
      </>
   );
};

export default Acordion;