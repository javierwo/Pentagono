import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const TabEncuesta = () => {
   return (
      <>
         <Box 
            className="h-full"
            component="div" 
         >
            <Paper 
               className="h-full rounded-xl bg-white overflow-hidden"
               elevation={0} 
            >
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdhmed4dbh18J5DuVOtuR2Ber3SzzOPthPQXfSUeDWHCI0G5Q/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </Paper>
         </Box >
      </>
   );
};

export default TabEncuesta;
