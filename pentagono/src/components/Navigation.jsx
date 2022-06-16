import { useState } from "react";

import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

   const theme = createTheme({
      palette: {
         primary: {
            main: "#FD353C",
         },
         secondary: {
            main: "#f50057",
         },
         text: {
            primary: "#ffffff",
         },
      },
      typography: {
         fontSize: 15,
      },
   });

   return (
      <>
         <Box
            sx={{
               height: "82vh",
               boxSizing: "border-box",
               p: 2,
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
                  bgcolor: "#FAFBFB",
                  borderRadius: 3,
               }}
            >

               <ThemeProvider theme={theme}>
                  <Tabs
                     value={value}
                     onChange={handleChange}
                     textColor="secondary"
                     indicatorColor="primary"
                     aria-label="tabs"
                     orientation="vertical"
                  >
                     <Tab
                        label="Encuesta"
                        icon={<PollOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none" }}
                     />
                     <Tab
                        label="Resultados Individuales"
                        icon={<PentagonOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none" }}
                     />
                     <Tab
                        label="Resultados Generales"
                        icon={<AnalyticsOutlinedIcon />}
                        iconPosition="top"
                        sx={{ textTransform: "none" }}
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
               </ThemeProvider>
            </Box>
         </Box>
      </>
   );

};

export default Navigation;
