import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import RadarChart from "./RadarChart";

const TabResultadosIndividuales = () => {

   const height = '100%';

   return (
      <Grid
         container
         //rowSpacing={{ xs: 1, sm: 2, md: 1 }}
         columnSpacing={{ xs: 1, sm: 2, md: 1 }}
         sx={{ 
            height: "100%", 
            boxSizing: "border-box",
            p:1
         }}
      >   

         <Grid 
            item 
            xs={6}
            sx={{ 
               height: {height} , 
            }}
         >
            <Paper 
               elevation={2} 
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
            item xs={6}
            sx={{ 
               height: {height}, 
            }}
         >
            <Paper 
               elevation={2} 
               sx={{ 
                  height: "100%", 
                  color: "black", 
                  borderRadius: 3
               }}
            >
               <Box>Interpretación</Box>
            </Paper>
         </Grid>

      </Grid>
   )
}

export default TabResultadosIndividuales