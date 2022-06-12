import { useState } from "react";

import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabEncuesta from "./TabEncuesta";

const Navigation = () => {

   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   function TabPanel(props) {
      const { children, value, index, ...other } = props;
      return (
         <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
         >

            {value === index && (
               <>{children}</>
            )}

         </Box>
      );
   }

   const theme = createTheme({
      palette: {
         primary: {
            main: '#FD353C',
         },
         secondary: {
            main: '#f50057',
         },
         text: {
            primary: '#ffffff',
         },
      },
      typography: {
         fontSize: 18
      },
   });

   return (
      <>
         <Box sx={{height:'96%', ml:2, mr:2, mt:1,}}>

            <Paper elevation={3} sx={{ height:'100%', bgcolor: '#FAFBFB'}}>

               <ThemeProvider theme={theme}>

                  <Box sx={{p:2, height: '85%'}}>

                     <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="primary"
                        aria-label="tabs"
                        
                     >
                        <Tab label="Encuesta" sx={{textTransform: 'none'}} />
                        <Tab label="Resultados Individuales" sx={{textTransform: 'none'}} />
                        <Tab label="Resultados Generales" sx={{textTransform: 'none'}} />

                     </Tabs>

                     <TabPanel value={value} index={0} sx={{bgcolor: 'salmon', height: '100%'}}>
                        <TabEncuesta />
                     </TabPanel>

                     <TabPanel value={value} index={1} sx={{bgcolor: 'yellow', height: '100%'}}>
                        Item Two
                     </TabPanel>

                     <TabPanel value={value} index={2} sx={{bgcolor: 'violet', height: '100%'}}>
                        Item Three
                     </TabPanel>

                  </Box>

               </ThemeProvider>
            </Paper>
         </Box>

      </>
   )
}

export default Navigation