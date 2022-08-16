import { useState, useRef } from "react";

import Box from "@mui/material/Box";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PrintIcon from '@mui/icons-material/Print';

import RadarChart from "./RadarChart";
import { responsiveFontSizes } from "@mui/material";

const CARR_ARQYURB = [
   { title: 'ARQUITECTURA' },
   { title: 'ARQUITECTURA - REDISEÑO' }
];

const CARR_ARTES = [
   { title: 'ARTES ESCENICAS - REDISEÑO' },
   { title: 'COMUNES - DANZA Y TEATRO' },
   { title: 'DANZA - TEATRO' },
   { title: 'ARTES MUSICALES' },
   { title: 'ARTES MUSICALES - REDISEÑO' },
   { title: 'ARTES VISUALES' },
   { title: 'ARTES VISUALES - REDISEÑO' },
   { title: 'DISEÑO' },
   { title: 'DISEÑO GRAFICO - REDISEÑO' }
];

const CARR_CIAG = [
   { title: 'AGRONOMÍA - REDISEÑO' },
   { title: 'INGENIERÍA AGRONÓMICA' },
   { title: 'MEDICINA VETERINARIA' },
   { title: 'MEDICINA VETERINARIA Y ZOOTECNIA' }
];

const CARR_CIHOSP = [
   { title: 'GASTRONOMÍA' },
   { title: 'GASTRONOMÍA - REDISEÑO' },
   { title: 'HOSPITALIDAD Y HOTELERIA' },
   { title: 'HOTELERIA' },
   { title: 'TURISMO' },
   { title: 'TURISMO - REDISEÑO' }
];

const CARR_CIECO = [
   { title: 'ADMINISTRACION DE EMPRESAS-DUAL-REDISEÑO' },
   { title: 'EMPRESAS' },
   { title: 'ADMINISTRACION DE EMPRESAS' },
   { title: 'ADMINISTRACION DE EMPRESAS-REDISEÑO' },
   { title: 'CONTABILIDAD Y AUDITORIA' },
   { title: 'CONTABILIDAD Y AUDITORIA - REDISEÑO' },
   { title: 'ECONOMIA' },
   { title: 'ECONOMIA - REDISEÑO' },
   { title: 'MARKETING' },
   { title: 'MERCADOTECNIA' },
   { title: 'SOCIOLOGIA' },
   { title: 'SOCIOLOGIA-REDISEÑO' }
];

const CARR_CIMED = [
   { title: 'ENFERMERIA' },
   { title: 'ENFERMERIA - REDISEÑO' },
   { title: 'ESTIMULACION TEMPRANA EN SALUD' },
   { title: 'FISIOTERAPIA - REDISEÑO' },
   { title: 'TERAPIA FISICA' },
   { title: 'FONOAUDIOLOGIA' },
   { title: 'FONOAUDIOLOGIA - REDISEÑO' },
   { title: 'IMAGENOLOGIA' },
   { title: 'IMAGENOLOGIA Y RADIOLOGIA' },
   { title: 'LABORATORIO CLINICO' },
   { title: 'LABORATORIO CLINICO - REDISEÑO' },
   { title: 'MEDICINA' },
   { title: 'MEDICINA Y CIRUGIA' },
   { title: 'NUTRICION Y DIETETICA' },
   { title: 'NUTRICION Y DIETETICA - REDISEÑO' }
];

const CARR_CIQUIM = [
   { title: 'BIOQUIMICA Y FARMACIA' },
   { title: 'BIOQUIMICA Y FARMACIA -REDISEÑO' },
   { title: 'INGENIERIA AMBIENTAL' },
   { title: 'INGENIERIA AMBIENTAL - REDISEÑO' },
   { title: 'INGENIERIA INDUSTRIAL' },
   { title: 'INGENIERIA INDUSTRIAL - REDISEÑO' },
   { title: 'INGENIERIA QUIMICA' },
   { title: 'INGENIERIA QUIMICA - REDISEÑO' }
];

const CARR_FILO = [
   { title: 'CULTURA FISICA' },
   { title: 'CULTURA FISICA (OBLIGATORIAS)' },
   { title: 'PEDAGOGIA DE LA ACTIVIDAD FISICA Y DEPORTE' },
   { title: 'FILOSOFIA SOCIOLOGIA Y ECONOMIA' },
   { title: 'PEDAGOGIA DE LAS ARTES Y HUMANIDADES' },
   { title: 'HISTORIA Y GEOGRAFIA' },
   { title: 'PEDAGOGIA HISTORIA Y CIENCIAS SOCIALES' },
   { title: 'LENGUA Y LITERATURA INGLESA' },
   { title: 'PEDAGOGIA DE LOS IDIOMAS NACIONALES Y EXTRANJEROS' },
   { title: 'LENGUA, LITERATURA Y LENGUAJES AUDIOVISUALES' },
   { title: 'PEDAGOGIA DE LA LENGUA Y LITERATURA' },
   { title: 'MATEMATICAS Y FISICA' },
   { title: 'PEDAGOGIA DE LAS CIENCIAS EXPERIMENTALES' },
   { title: 'CINE - REDISEÑO' },
   { title: 'CINE Y AUDIOVISUALES' },
   { title: 'COMUNICACION - REDISEÑO' },
   { title: 'LICENCIATURA EN CIENCIAS DE LA COMUNICACION SOCIAL' },
   { title: 'EDUCACION BASICA - REDISEÑO' },
   { title: 'EDUCACION GENERAL BASICA' },
   { title: 'EDUCACION INICIAL - NUEVA' },
];

const CARR_ING = [
   { title: 'COMPUTACION REDISEÑO' },
   { title: 'INGENIERIA DE SISTEMAS' },
   { title: 'ELECTRICIDAD' },
   { title: 'INGENIERIA ELECTRICA' },
   { title: 'INGENIERIA CIVIL' },
   { title: 'INGENIERIA CIVIL - REDISEÑO' },
   { title: 'INGENIERIA EN ELECTRONICA Y TELECOMUNICACIONES' },
   { title: 'TELECOMUNICACIONES' }
];

const CARR_JURIS = [
   { title: 'DERECHO' },
   { title: 'DERECHO - REDISEÑO' },
   { title: 'GENERO Y DESARROLLO - REDISEÑO' },
   { title: 'LICENCIATURA EN GENERO Y DESARROLLO' },
   { title: 'ORIENTACION FAMILIAR' },
   { title: 'ORIENTACION FAMILIAR - REDISEÑO' },
   { title: 'TRABAJO SOCIAL' },
   { title: 'TRABAJO SOCIAL - REDISEÑO' }
];

const CARR_ODON = [
   { title: 'ODONTOLOGIA' },
   { title: 'ODONTOLOGIA - REDISEÑO' }
];

const CARR_PSIC = [
   { title: 'PSICOLOGIA CLINICA' },
   { title: 'PSICOLOGIA SOCIAL' },
   { title: 'PSICOLOGIA' },
   { title: 'PSICOLOGIA EDUCATIVA' }
];

const CARR_GRAD = [
   { title: 'INGLES - INSTITUTO UNIVERSITARIO DE LENGUAS' }
];

const FACULTADES = [
   { title: 'ARQUITECTURA Y URBANISMO', carr: CARR_ARQYURB },
   { title: 'ARTES', carr: CARR_ARTES },
   { title: 'CIENCIAS AGROPECUARIAS', carr: CARR_CIAG },
   { title: 'CIENCIAS DE LA HOSPITALIDAD', carr: CARR_CIHOSP },
   { title: 'CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS', carr: CARR_CIECO },
   { title: 'CIENCIAS MÉDICAS', carr: CARR_CIMED },
   { title: 'CIENCIAS QUÍMICAS', carr: CARR_CIQUIM },
   { title: 'FILOSOFÍA, LETRAS Y CIENCIAS DE LA EDUCACIÓN', carr: CARR_FILO },
   { title: 'INGENIERÍA', carr: CARR_ING },
   { title: 'JURISPRUDENCIA Y CIENCIAS POLITICAS Y SOCIALES', carr: CARR_JURIS },
   { title: 'ODONTOLOGÍA', carr: CARR_ODON },
   { title: 'PSICOLOGÍA', carr: CARR_PSIC },
   { title: 'GRADO - INSTITUTO UNIVERSITARIO DE LENGUAS', carr: CARR_GRAD }
];


const HEIGHTTIT = "8%"
const HEIGHTFILTROS = "10%"
const HEIGHTBOTONES = "10%"
const HEIGHTRESULTADO = "72%"
const HEIGHTINDVPENT = "85%"


const TabResultadosGenerales = () => {
   const [competencias, setCompetencias] = useState([0, 0, 0, 0, 0]);
   const [open, setOpen] = useState(false)
   //Para llenar el combo de los periodos existentes
   const [PERIODOS, setPERIODOS] = useState([]);
   const [llenarPeriodos, setLlenarPeriodos] = useState(true);

   async function getPeriodos() {
      const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=periodos"
      const res = await fetch(url);
      const result = await res.json();
      var resPeriodos = [];
      for (var i = 0; i < result[0]['Periodos'].length; i++) {
         resPeriodos.push({ title: result[0]['Periodos'][i] })
      }
      setPERIODOS(resPeriodos)
      setLlenarPeriodos(false)
   }
   if (llenarPeriodos) {
      getPeriodos()
   }
   //actualiza cant facultades
   async function actFacultades(num) {
      setFacultadCount(num)
      console.log("Facus actualizadas", facultadCount)
      return (facultadCount)
   }
   //actualiza cant carreras
   async function actCarreras(num) {
      setCarreraCount(num)
      console.log("Carr actualizadas", carreraCount)
      return (carreraCount)
   }
   //actualiza cant periodos
   async function actPeriodos(num) {
      setPeriodoCount(num)
      console.log("Per actualizadas", periodoCount)
      return (periodoCount)
   }
   //actualiza conteos
   async function actConteos() {
      console.log("faclen:", facultad.length, "carlen:", carreraSelected.length, "perlen:", periodo.length)
      var actualizaCar
      var actualizaPer
      var actualizaFac
      if (facultad.length == 0) {
         actualizaFac = await actFacultades('-')
      } else {
         actualizaFac = await actFacultades(facultad.length);
      }

      if (carreraSelected.length == 0) {
         actualizaCar = await actCarreras('-');
      } else {
         actualizaCar = await actCarreras(carreraSelected.length);
      }
      if (periodo.length == 0) {
         actualizaPer = await actPeriodos('-');
      } else {
         actualizaPer = await actPeriodos(periodo.length);
      }
      console.log("fac:", actualizaFac, "car:", actualizaCar, "per:", actualizaPer)
      return (actualizaFac, actualizaCar, actualizaPer)
   }

   //suma arrays termino a termino
   function sumaArrays(array1, array2) {
      var arraySumado = []
      for (var i = 0; i < array1.length; i++) {
         arraySumado[i] = array1[i] + array2[i]
      }
      return arraySumado
   }
   //actualiza valores pentagono
   async function setDatos(comps) {
      setCompetencias(comps)
      setOpen(false)
      return competencias
   }
   //grafica pentagono
   async function graficar() {
      //const actConteo = await actConteos()
      //console.log("actConteo:", actConteo)
      const consulta = await consultar()
      const resumen = consulta[0]
      const numDocentes = consulta[1]
      var valores = []
      console.log(resumen)
      if (JSON.stringify(resumen) !== JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
         if (resumen[0] >= resumen[1] && resumen[0] >= resumen[2]) {
            valores[0] = 2.5
         } else if (resumen[1] > resumen[0] && resumen[1] >= resumen[2]) {
            valores[0] = 1.5
         } else if (resumen[2] > resumen[1] && resumen[2] > resumen[0]) {
            valores[0] = 0.5
         }

         if (resumen[3] >= resumen[4] && resumen[3] >= resumen[5]) {
            valores[1] = 2.5
         } else if (resumen[4] > resumen[3] && resumen[4] >= resumen[5]) {
            valores[1] = 1.5
         } else if (resumen[5] > resumen[4] && resumen[5] > resumen[3]) {
            valores[1] = 0.5
         }

         if (resumen[6] >= resumen[7] && resumen[6] >= resumen[8]) {
            valores[2] = 2.5
         } else if (resumen[7] > resumen[6] && resumen[7] >= resumen[8]) {
            valores[2] = 1.5
         } else if (resumen[8] > resumen[7] && resumen[8] > resumen[6]) {
            valores[2] = 0.5
         }

         if (resumen[9] >= resumen[10] && resumen[9] >= resumen[11]) {
            valores[3] = 2.5
         } else if (resumen[10] > resumen[9] && resumen[10] >= resumen[11]) {
            valores[3] = 1.5
         } else if (resumen[11] > resumen[10] && resumen[11] > resumen[9]) {
            valores[3] = 0.5
         }

         if (resumen[12] >= resumen[13] && resumen[12] >= resumen[14]) {
            valores[4] = 2.5
         } else if (resumen[13] > resumen[12] && resumen[13] >= resumen[14]) {
            valores[4] = 1.5
         } else if (resumen[14] > resumen[13] && resumen[14] > resumen[12]) {
            valores[4] = 0.5
         }
         const comps = await setDatos(valores)
         setDocenteCount(numDocentes.length)
      } else {
         const comps = await setDatos([0, 0, 0, 0, 0])
      }

   }

   //consulta los datos
   async function consultar() {
      setOpen(true)
      console.log("llegamos", facultadCount, periodoCount, carreraCount)
      var resumen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var numDocentes = []
      if (facultadCount != '-' && carreraCount == '-') {
         if (periodoCount != '-') {
            for (var i = 0; i < facultadCount; i++) {
               for (var j = 0; j < periodoCount; j++) {
                  const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=facultadPeriodo&facultad=" + facultad[i].title + "&periodo=" + periodo[j].title
                  const res = await fetch(url);
                  const result = await res.json();
                  try {
                     console.log(sumaArrays(resumen, result[0]['Pentagono']))
                     resumen = sumaArrays(resumen, result[0]['Pentagono'])
                     numDocentes = numDocentes.concat(result[0]['Docentes'])
                  } catch {
                     console.log("Error")
                  }
               }
            }
         } else {
            for (var i = 0; i < facultadCount; i++) {
               const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=facultad&facultad=" + facultad[i].title
               const res = await fetch(url);
               const result = await res.json();
               try {
                  console.log(sumaArrays(resumen, result[0]['Pentagono']))
                  resumen = sumaArrays(resumen, result[0]['Pentagono'])
                  numDocentes = numDocentes.concat(result[0]['Docentes'])
               } catch {
                  console.log("Error")
               }
               console.log(facultad[i].title)
            }
         }
      } else if (carreraCount != '-') {
         if (periodoCount != '-') {
            for (var i = 0; i < carreraCount; i++) {
               for (var j = 0; j < periodoCount; j++) {
                  const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=carreraPeriodo&carrera=" + carreraSelected[i].title + "&periodo=" + periodo[j].title
                  const res = await fetch(url);
                  const result = await res.json();
                  try {
                     console.log(sumaArrays(resumen, result[0]['Pentagono']))
                     resumen = sumaArrays(resumen, result[0]['Pentagono'])
                     numDocentes = numDocentes.concat(result[0]['Docentes'])
                  } catch {
                     console.log("Error")
                  }
               }
            }
         } else {
            for (var i = 0; i < carreraCount; i++) {
               const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=carrera&carrera=" + carreraSelected[i].title
               const res = await fetch(url);
               const result = await res.json();
               try {
                  console.log(sumaArrays(resumen, result[0]['Pentagono']))
                  resumen = sumaArrays(resumen, result[0]['Pentagono'])
                  numDocentes = numDocentes.concat(result[0]['Docentes'])
               } catch {
                  console.log("Error")
               }
            }
         }
      } else {
         for (var j = 0; j < periodoCount; j++) {
            const url = "https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=periodo&periodo=" + periodo[j].title
            const res = await fetch(url);
            const result = await res.json();
            try {
               console.log(sumaArrays(resumen, result[0]['Pentagono']))
               resumen = sumaArrays(resumen, result[0]['Pentagono'])
               numDocentes = numDocentes.concat(result[0]['Docentes'])
            } catch {
               console.log("Error")
            }
         }
      }
      const dataArr = new Set(numDocentes);
      let numdocsinrep = [...dataArr];
      return [resumen, numdocsinrep]
   }

   //Array de las facultades seleccionadas en el Autocomplete
   const [facultad, setFacultad] = useState([]);

   //Obtiene las carreras de acuerdo a la facultad selecccionada
   const CARRERAS = [];
   facultad.forEach(function (fac) {
      fac['carr'].forEach(function (carr) {
         CARRERAS.push(carr)
      })
   })

   //Carreras de acuerdo a la facultad en el Autocomplete (no es necesario)
   //const [carrera, setCarreras] = useState(CARRERAS);

   const [periodo, setPeriodo] = useState([]);

   //Para guardar las carreras seleccionadas en el autocomplete
   const [carreraSelected, setCarrerasSelected] = useState([]);

   //Referencias para limpiar los valores en 
   const autoFacultadRef = useRef(null);
   const autoCarreraRef = useRef(null);
   const autoPeriodoRef = useRef(null);

   //CONTADORES
   const [docenteCount, setDocenteCount] = useState('-');
   const [facultadCount, setFacultadCount] = useState('-');
   const [carreraCount, setCarreraCount] = useState('-');
   const [periodoCount, setPeriodoCount] = useState('-');

   return (
      <>
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <Box
            className="flex items-end"
            sx={{
               height: HEIGHTTIT,
            }}
         >
            <Box
               className="text-colordocente text-base font-semibold"
            >
               Filtros de Búsqueda
            </Box>
         </Box>

         <Stack
            direction="row"
            className="w-full"
            spacing={2}
            alignItems="center"
            sx={{
               height: HEIGHTFILTROS,
            }}
         >
            <Autocomplete
               multiple
               filterSelectedOptions
               limitTags={1}
               className="w-full"
               size="small"
               id="tags-facultad"
               options={FACULTADES}
               getOptionLabel={(option) => option.title}
               onChange={(event, newValue) => {
                  setFacultad(newValue); console.log("facultades:" + facultad)
                  //setCarreras(CARRERAS);
                  //setFacultadCount(facultad.length);
               }}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     ref={autoFacultadRef}
                     className="bg-white"
                     label="Filtro por Facultad"
                     placeholder="Facultades"
                  />
               )}
            />

            <Autocomplete
               multiple
               filterSelectedOptions
               limitTags={1}
               className="w-full"
               size="small"
               id="tags-carrera"
               options={CARRERAS}
               onChange={(event, newValue) => {
                  setCarrerasSelected(newValue); console.log("carreras:" + carreraSelected)
               }}
               getOptionLabel={(option) => option.title}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     ref={autoCarreraRef}
                     className="bg-white"
                     label="Filtro por Carrera"
                     placeholder="Carreras"
                  />
               )}
            />

            <Autocomplete
               multiple
               filterSelectedOptions
               limitTags={1}
               className="w-full"
               size="small"
               id="tags-periodo"
               options={PERIODOS}
               getOptionLabel={(option) => option.title}
               onChange={(event, newValue) => {
                  setPeriodo(newValue); console.log("periodos:" + periodo)
               }}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     ref={autoPeriodoRef}
                     className="bg-white"
                     label="Filtro por Periodo Académico"
                     placeholder="Periodo Académico"
                  />
               )}
            />
         </Stack>

         <Stack
            direction="row"
            className="pt-2"
            spacing={2}
            alignItems="start"
            sx={{
               height: HEIGHTBOTONES,
            }}
         >
            <Button
               size='small'
               variant="contained"
               startIcon={<SearchOutlinedIcon />}
               onClick={() => {
                  console.log(facultad);
                  console.log(carreraSelected);
                  console.log(periodo);
                  if (facultad.length == 0) {
                     setFacultadCount('-');
                  } else {
                     setFacultadCount(facultad.length);
                  }
                  if (carreraSelected.length == 0) {
                     setCarreraCount('-');
                  } else {
                     setCarreraCount(carreraSelected.length);
                  }
                  if (periodo.length == 0) {
                     setPeriodoCount('-');
                  } else {
                     setPeriodoCount(periodo.length);
                  }
               }}
            >
               Aplicar Filtros
            </Button>

            <Button
               size='small'
               variant="contained"
               startIcon={<PrintIcon />}
               onClick={() => { graficar(); }}
            >
               Graficar
            </Button>

            <Button
               size='small'
               variant="outlined"
               startIcon={<CancelOutlinedIcon />}
               onClick={() => {
                  console.log("limpiando")
                  const close = document.getElementsByClassName(
                     "MuiAutocomplete-clearIndicator"
                  );
                  if (close[2]!=null){
                     close[2].click();
                  }
                  if (close[1]!=null){
                     close[1].click();
                  }                  
                  if (close[0]!=null){
                     close[0].click();
                  }
               }}
            >
               Limpiar Filtros
            </Button>
         </Stack>

         <Box
            className="bg-white"
            sx={{
               height: HEIGHTRESULTADO
            }}
         >
            <Grid
               container
               className="h-full"
            >
               <Grid
                  item
                  xs={12}
                  md={6}
                  className="h-full p-3"
               >
                  <Paper
                     elevation={1}
                     className='h-full'
                  >
                     <Box
                        className="h-full rounded-xl bg-white"
                     >
                        <RadarChart competencias={competencias} showTittle={true} />
                     </Box>
                  </Paper>
               </Grid>

               <Grid
                  item
                  xs={12}
                  md={6}
                  className="h-full p-3"
               >
                  <Stack
                     spacing={2}
                     direction="column"
                     className="h-full"
                  >
                     <Stack
                        spacing={2}
                        direction="row"
                        className="h-full"
                     >
                        <Box
                           className="bg-tabsbg3 w-full h-full rounded-xl flex flex-col items-start justify-center px-2"
                        >
                           <Typography variant="subtitle1" align='left' className="font-thin">
                              Docentes
                           </Typography>
                           <Typography variant="h4" align='left' className="font-bold">
                              {docenteCount}
                           </Typography>
                        </Box>
                        <Box
                           className="bg-tabsbg3 w-full h-full rounded-xl flex flex-col items-start justify-center px-2"
                        >
                           <Typography variant="subtitle1" align='left' className="font-thin">
                              Facultades
                           </Typography>
                           <Typography variant="h4" align='left' className="font-bold">
                              {facultadCount}
                           </Typography>
                        </Box>
                     </Stack>

                     <Stack
                        spacing={2}
                        direction="row"
                        className="h-full"
                     >
                        <Box
                           className="bg-tabsbg3 w-full h-full rounded-xl flex flex-col items-start justify-center px-2"
                        >
                           <Typography variant="subtitle1" align='left' className="font-thin">
                              Carreras
                           </Typography>
                           <Typography variant="h4" align='left' className="font-bold">
                              {carreraCount}
                           </Typography>
                        </Box>
                        <Box
                           className="bg-tabsbg3 w-full h-full rounded-xl flex flex-col items-start justify-center px-2"
                        >
                           <Typography variant="subtitle1" align='left' className="font-thin">
                              Periodos
                           </Typography>
                           <Typography variant="h4" align='left' className="font-bold">
                              {periodoCount}
                           </Typography>
                        </Box>
                     </Stack>
                  </Stack>
               </Grid>
            </Grid>

         </Box>

      </>
   )
}

export default TabResultadosGenerales