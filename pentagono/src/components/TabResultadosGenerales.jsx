import { useState, useRef } from "react";

import Box from "@mui/material/Box";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const CARR_ARQYURB = [
   { title: 'ARQUITECTURA'},
   { title: 'ARQUITECTURA - REDISEÑO'}
];

const CARR_ARTES = [
   { title: 'ARTES ESCENICAS - REDISEÑO'},
   { title: 'COMUNES - DANZA Y TEATRO'},
   { title: 'DANZA - TEATRO'},
   { title: 'ARTES MUSICALES'},
   { title: 'ARTES MUSICALES - REDISEÑO'},
   { title: 'ARTES VISUALES'},
   { title: 'ARTES VISUALES - REDISEÑO'},
   { title: 'DISEÑO'},
   { title: 'DISEÑO GRAFICO - REDISEÑO'}
];

const CARR_CIAG = [
   { title: 'AGRONOMÍA - REDISEÑO'},
   { title: 'INGENIERÍA AGRONÓMICA'},
   { title: 'MEDICINA VETERINARIA'},
   { title: 'MEDICINA VETERINARIA Y ZOOTECNIA'}
];

const CARR_CIHOSP = [
   { title: 'GASTRONOMÍA'},
   { title: 'GASTRONOMÍA - REDISEÑO'},
   { title: 'HOSPITALIDAD Y HOTELERIA'},
   { title: 'HOTELERIA'},
   { title: 'TURISMO'},
   { title: 'TURISMO - REDISEÑO'}
];

const CARR_CIECO = [
   { title: 'ADMINISTRACION DE EMPRESAS-DUAL-REDISEÑO'},
   { title: 'EMPRESAS'},
   { title: 'ADMINISTRACION DE EMPRESAS'},
   { title: 'ADMINISTRACION DE EMPRESAS-REDISEÑO'},
   { title: 'CONTABILIDAD Y AUDITORIA'},
   { title: 'CONTABILIDAD Y AUDITORIA - REDISEÑO'},
   { title: 'ECONOMIA'},
   { title: 'ECONOMIA - REDISEÑO'},
   { title: 'MARKETING'},
   { title: 'MERCADOTECNIA'},
   { title: 'SOCIOLOGIA'},
   { title: 'SOCIOLOGIA-REDISEÑO'}
];

const CARR_CIMED = [
   { title: 'ENFERMERIA'},
   { title: 'ENFERMERIA - REDISEÑO'},
   { title: 'ESTIMULACION TEMPRANA EN SALUD'},
   { title: 'FISIOTERAPIA - REDISEÑO'},
   { title: 'TERAPIA FISICA'},
   { title: 'FONOAUDIOLOGIA'},
   { title: 'FONOAUDIOLOGIA - REDISEÑO'},
   { title: 'IMAGENOLOGIA'},
   { title: 'IMAGENOLOGIA Y RADIOLOGIA'},
   { title: 'LABORATORIO CLINICO'},
   { title: 'LABORATORIO CLINICO - REDISEÑO'},
   { title: 'MEDICINA'},
   { title: 'MEDICINA Y CIRUGIA'},
   { title: 'NUTRICION Y DIETETICA'},
   { title: 'NUTRICION Y DIETETICA - REDISEÑO'}
];

const CARR_CIQUIM = [
   { title: 'BIOQUIMICA Y FARMACIA'},
   { title: 'BIOQUIMICA Y FARMACIA -REDISEÑO'},
   { title: 'INGENIERIA AMBIENTAL'},
   { title: 'INGENIERIA AMBIENTAL - REDISEÑO'},
   { title: 'INGENIERIA INDUSTRIAL'},
   { title: 'INGENIERIA INDUSTRIAL - REDISEÑO'},
   { title: 'INGENIERIA QUIMICA'},
   { title: 'INGENIERIA QUIMICA - REDISEÑO'}
];

const CARR_FILO= [
   { title: 'CULTURA FISICA'},
   { title: 'CULTURA FISICA (OBLIGATORIAS)'},
   { title: 'PEDAGOGIA DE LA ACTIVIDAD FISICA Y DEPORTE'},
   { title: 'FILOSOFIA SOCIOLOGIA Y ECONOMIA'},
   { title: 'PEDAGOGIA DE LAS ARTES Y HUMANIDADES'},
   { title: 'HISTORIA Y GEOGRAFIA'},
   { title: 'PEDAGOGIA HISTORIA Y CIENCIAS SOCIALES'},
   { title: 'LENGUA Y LITERATURA INGLESA'},
   { title: 'PEDAGOGIA DE LOS IDIOMAS NACIONALES Y EXTRANJEROS'},
   { title: 'LENGUA, LITERATURA Y LENGUAJES AUDIOVISUALES'},
   { title: 'PEDAGOGIA DE LA LENGUA Y LITERATURA'},
   { title: 'MATEMATICAS Y FISICA'},
   { title: 'PEDAGOGIA DE LAS CIENCIAS EXPERIMENTALES'},
   { title: 'CINE - REDISEÑO'},
   { title: 'CINE Y AUDIOVISUALES'},
   { title: 'COMUNICACION - REDISEÑO'},
   { title: 'LICENCIATURA EN CIENCIAS DE LA COMUNICACION SOCIAL'},
   { title: 'EDUCACION BASICA - REDISEÑO'},
   { title: 'EDUCACION GENERAL BASICA'},
   { title: 'EDUCACION INICIAL - NUEVA'},
];

const CARR_ING= [
   { title: 'COMPUTACION REDISEÑO'},
   { title: 'INGENIERIA DE SISTEMAS'},
   { title: 'ELECTRICIDAD'},
   { title: 'INGENIERIA ELECTRICA'},
   { title: 'INGENIERIA CIVIL'},
   { title: 'INGENIERIA CIVIL - REDISEÑO'},
   { title: 'INGENIERIA EN ELECTRONICA Y TELECOMUNICACIONES'},
   { title: 'TELECOMUNICACIONES'}
];

const CARR_JURIS= [
   { title: 'DERECHO'},
   { title: 'DERECHO - REDISEÑO'},
   { title: 'GENERO Y DESARROLLO - REDISEÑO'},
   { title: 'LICENCIATURA EN GENERO Y DESARROLLO'},
   { title: 'ORIENTACION FAMILIAR'},
   { title: 'ORIENTACION FAMILIAR - REDISEÑO'},
   { title: 'TRABAJO SOCIAL'},
   { title: 'TRABAJO SOCIAL - REDISEÑO'}
];

const CARR_ODON= [
   { title: 'ODONTOLOGIA'},
   { title: 'ODONTOLOGIA - REDISEÑO'}
];

const CARR_PSIC= [
   { title: 'PSICOLOGIA CLINICA'},
   { title: 'PSICOLOGIA SOCIAL'},
   { title: 'PSICOLOGIA'},
   { title: 'PSICOLOGIA EDUCATIVA'}
];

const CARR_GRAD= [
   { title: 'INGLES - INSTITUTO UNIVERSITARIO DE LENGUAS'}
];

const FACULTADES = [
   { title: 'ARQUITECTURA Y URBANISMO', carr: CARR_ARQYURB},
   { title: 'ARTES', carr: CARR_ARTES},
   { title: 'CIENCIAS AGROPECUARIAS', carr: CARR_CIAG},
   { title: 'CIENCIAS DE LA HOSPITALIDAD', carr: CARR_CIHOSP},
   { title: 'CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS', carr: CARR_CIECO},
   { title: 'CIENCIAS MÉDICAS', carr: CARR_CIMED},
   { title: 'CIENCIAS QUÍMICAS', carr: CARR_CIQUIM},
   { title: 'FILOSOFÍA, LETRAS Y CIENCIAS DE LA EDUCACIÓN', carr: CARR_FILO},
   { title: 'INGENIERÍA', carr: CARR_ING},
   { title: 'JURISPRUDENCIA Y CIENCIAS POLITICAS Y SOCIALES', carr: CARR_JURIS},
   { title: 'ODONTOLOGÍA', carr: CARR_ODON},
   { title: 'PSICOLOGÍA', carr: CARR_PSIC},
   { title: 'GRADO - INSTITUTO UNIVERSITARIO DE LENGUAS', carr: CARR_GRAD}
];

const PERIODOS = [
   { title: 'Marzo - Agosto 2022'},
   { title: 'Septiembre - Febrero 2023'},
];

const HEIGHTTIT = "8%"
const HEIGHTFILTROS = "10%"
const HEIGHTBOTONES = "10%"
const HEIGHTRESULTADO = "72%"

const TabResultadosGenerales = () => {

   const [facultad, setFacultad] = useState([]);

   //Obtiene las carreras de acuerdo a la facultad selecccionada
   const CARRERAS = [];
   facultad.forEach(function(fac) {
      fac['carr'].forEach(function(carr) {
         CARRERAS.push(carr)
      })
   })

   //Carreras de acuerdo a la facultad en el Autocomplete
   const [carrera, setCarreras] = useState(CARRERAS);

   const [periodo, setPeriodo] = useState([]);

   //Para guardar las carreras seleccionadas en el autocomplete
   const [carreraSelected, setCarrerasSelected] = useState([]);

   //Referencias para limpiar los valores en 
   const autoFacultadRef = useRef(null);
   const autoCarreraRef = useRef(null);
   const autoPeriodoRef = useRef(null);

   return (
      <>
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
                  setFacultad(newValue);
                  setCarreras(CARRERAS)
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
                  setCarrerasSelected(newValue)
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
                  setPeriodo(newValue);
               }}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     ref={autoPeriodoRef}
                     className="bg-white"
                     label="Filtro por Periodo Académico"
                     placeholder="Perdiodo Académico"
                  />
               )}
            />
         </Stack>

         <Stack 
            direction="row" 
            className="pt-1"
            spacing={2}
            alignItems="start"
            sx={{ 
               height: HEIGHTBOTONES,
            }}
         >
            <Button 
               variant="contained"
               startIcon={<SearchOutlinedIcon />}
               onClick={() => {
                  console.log(facultad)
                  console.log(carreraSelected)
                  console.log(periodo)
               }}
            >
               Buscar
            </Button>
            <Button 
               variant="outlined"
               startIcon={<CancelOutlinedIcon />}
               onClick={() => {
                  console.log("limpiando")
                  //setFacultad([]);
               }}
            >
               Limpiar Filtros
            </Button>
         </Stack>

         <Box 
            className="px-2 pb-2 box-border bg-white"
            sx={{ 
               height: HEIGHTRESULTADO
            }}
         > 
            resultados
         </Box>
      
      </>
   )
}

export default TabResultadosGenerales