import { useState } from "react";

import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

import TabEncuesta from "./TabEncuesta";
import TabResultadosIndividuales from "./TabResultadosIndividuales";
import TabResultadosGenerales from "./TabResultadosGenerales";

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
            {value === index && 
               <>
                  {children}
               </>
            }
         </Box>
      );
   }

   var theme = createTheme({
      palette: {
         primary: {
            main: "#FF9F00"
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
            //boxSizing:'border- box no redimensiona un contenedor al aplicar un padding
            className='box-border px-3 pb-3'
            sx={{
               height: "87vh",
            }}
         >
         
            <Box
               className='bg-tabsbg3 h-full flex rounded-xl'
            >
               <ThemeProvider theme={theme}>
                  <Tabs
                     value={value}
                     onChange={handleChange}
                     textColor="primary"
                     indicatorColor="primary"
                     aria-label="tabs"
                     orientation="vertical"
                     className="py-2 box-content"
                  >
                     <Tab
                        label="Encuesta"
                        icon={<PollOutlinedIcon />}
                        iconPosition="top"
                        className='text-apple normal-case'
                     />
                     <Tab
                        label="Resultados Individuales"
                        icon={<PentagonOutlinedIcon />}
                        iconPosition="top"
                        className='text-apple normal-case'
                     />
                     <Tab
                        label="Resultados Generales"
                        icon={<AnalyticsOutlinedIcon />}
                        iconPosition="top"
                        className='text-apple normal-case'
                     />
                  </Tabs>

                  <TabPanel
                     className='h-full w-full overflow-auto p-2'
                     value={value}
                     index={0}
                  >
                     <TabEncuesta />
                  </TabPanel>

                  <TabPanel
                     className='h-full w-full overflow-auto px-2 pb-2'
                     value={value}
                     index={1}
                  >
                     <TabResultadosIndividuales />
                  </TabPanel>

                  <TabPanel
                     className='h-full w-full overflow-auto px-2 pb-2'
                     value={value}
                     index={2}
                  >
                     <TabResultadosGenerales />
                  </TabPanel>

               </ThemeProvider>

            </Box>

         </Box>
         
      </>
   );

};

export default Navigation;