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
            tabs: "#828DA9"
         },
         tabs: {
            main: "#FF00FF"
         }
      },
      typography: {
         fontFamily: 'Merriweather',
      },
   });

   theme = responsiveFontSizes(theme);

   return (
      <>
         <ThemeProvider theme={theme}>
            <Box
               sx={{
                  height: "82vh",
                  boxSizing: "border-box",
                  pb: 2,
                  pl: 2,
                  pr: 2,
               }}
            >
            {/*boxSizing:'border-box no redimensina un contenedor al aplicar un padding*/}

               <Box
                  sx={{
                     height: "100%",
                     pt: 2,
                     pb: 2,
                     boxSizing: "border-box",
                     display: "flex",
                     bgcolor: "background.main",
                     borderRadius: 3,
                  }}
               >

                  <Tabs
                     value={value}
                     onChange={handleChange}
                     textColor="primary"
                     indicatorColor="primary"
                     aria-label="tabs"
                     orientation="vertical"
                  >
                     <Tab
                        label="Encuesta"
                        icon={<PollOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none", color: "text.tabs"}}
                     />
                     <Tab
                        label="Resultados Individuales"
                        icon={<PentagonOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none", color: "text.tabs"}}
                     />
                     <Tab
                        label="Resultados Generales"
                        icon={<AnalyticsOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none", color: "text.tabs"}}
                     />
                  </Tabs>

                  <TabPanel
                     value={value}
                     index={0}
                     sx={{ 
                        bgcolor: "salmon",
                        height: "100%", 
                        width: "100%", 
                        overflow: "auto" 
                     }}
                  >
                     <TabEncuesta />
                  </TabPanel>

                  <TabPanel
                     value={value}
                     index={1}
                     sx={{
                        //bgcolor: "green",
                        height: "100%",
                        width: "100%",
                        overflow: "auto",
                     }}
                  >
                     <TabResultadosIndividuales />
                  </TabPanel>

                  <TabPanel
                     value={value}
                     index={2}
                     sx={{
                        bgcolor: "violet",
                        height: "100%",
                        width: "100%",
                        overflow: "auto",
                     }}
                  >
                     Item Three
                  </TabPanel>

               </Box>
            </Box>
         </ThemeProvider>

      </>
   );

};

export default Navigation;
