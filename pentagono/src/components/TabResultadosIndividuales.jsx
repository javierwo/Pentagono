import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Acordion from "./Acordion";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material/styles";

import { useState } from "react";
import axios from "axios";

import RadarChart from "./RadarChart";

const HEIGHTBUSQUEDA = "10%";
const HEIGHTRESULTADO = "90%";
const HEIGHTINDVTITULO = "15%";
const HEIGHTINDVPENT = "85%";

const TabResultadosIndividuales = (props) => {
	var theme = createTheme({
		typography: {
			fontFamily: "Merriweather",
		},
	});

	theme = responsiveFontSizes(theme);

	//const [competencias, setCompetencias] = useState([0, 0, 0, 0, 0]);
	//const [nombre, setNombre] = useState("");
	
	const [open, setOpen] = useState(false);
	const [cedula, setCedula] = useState(null);
	const [exists, setExists] = useState(false);
	const [data, setData] = useState(null);
	const [mensaje, setMensaje] = useState(
		"Busque a un docente por el número de cédula."
	);

	/*
	async function graficar() {
		setOpen(true);
		const url =
			"https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=docente&cedula=" +
			cedula;
		const res = await fetch(url);
		const result = await res.json();
		try {
			setNombre(result[0]["Nombre"]);
			setCompetencias(result[0]["Pentagono"]);
			setOpen(false);
			console.log(competencias);
		} catch {
			setNombre("");
			setCompetencias([0, 0, 0, 0, 0]);
			setOpen(false);
			console.log("Error");
		}
	}
	*/

	function graph() {
		setOpen(true);
		console.log("data axios");
		const url =
			"https://script.google.com/macros/s/AKfycbwTaIb7E0zpGxOFQYaMEGGftnK1GWeULdcaZZ9Mo7if3UTGJV5k3FmEOM0TwIX8cyrS/exec?action=docente&cedula=" +
			cedula;

		axios
			.get(url)
			.then((response) => {
				if (response.data.length > 0) {
					//setNombre(response.data[0]["Nombre"]);
					//setCompetencias(response.data[0]["Pentagono"]);
					setData(response.data);
					console.log(response.data);
					setExists(true);
				} else {
					setExists(false);
					setMensaje("La búsqueda no generó ningún resultado.");
				}
				setOpen(false);
			})
			.catch((error) => {
				console.log(error);
				setMensaje(error.message);
				setOpen(false);
			});
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={open}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
				<Box
					className="flex items-center"
					sx={{
						height: HEIGHTBUSQUEDA,
					}}
				>
					<Grid container className="h-2/3">
						<Grid item xs={12} md={3} className="h-full">
							<Box className="h-full rounded-xl flex content-start items-center bg-white">
								<InputBase
									className="pl-2 flex-1 text-sm "
									placeholder="p. ej.: 0104748165"
									onChange={(event) => setCedula(event.target.value)}
								/>
								<IconButton
									className="p-1"
									aria-label="search"
									//onClick={() => { graficar(); }}>
									onClick={() => {
									graph();
									}}
								>
									<SearchIcon />
								</IconButton>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box
					className="px-2 pb-2 box-border bg-white"
					sx={{
						height: HEIGHTRESULTADO,
					}}
				>
					{!exists ? (
						<>
							<Box className="h-full flex items-center justify-center">
								<Typography variant="h6" className="text-colordocente">
									{mensaje}
								</Typography>
							</Box>
						</>
					) : (
						<>
							<Box className="h-full">
								<Box
									className="flex items-center w-full px-2"
									sx={{
										height: HEIGHTINDVTITULO,
									}}
								>
									<Box className="w-full ">
									<Box className="text-colordocente text-sm">Docente</Box>
									<Box className="text-black text-2xl font-semibold pb-1">
										{data[0]["Nombre"]}
									</Box>
									<Divider />
									</Box>
								</Box>
								<Grid
									container
									sx={{
										height: HEIGHTINDVPENT,
									}}
								>
									<Grid item xs={12} md={6} className="h-full p-2">
										<Box
											className="text-colordocente text-base font-semibold"
											sx={{
												height: "8%",
											}}
										>
											Pentágono de Competencias
										</Box>
										<Paper
											elevation={1}
											sx={{
												height: "92%",
											}}
										>
											<Box className="h-full rounded-xl bg-white">
												<RadarChart
													data={data}
													/*data={
														[
															{
																Nombre: "Arquitectura",
																Pentagono: [0.5, 1.5, 0.5, 2.5, 2.5]
															}, 
															{
																Nombre: "Ingeniería",
																Pentagono: [2.5, 0.5, 1.5, 1.5, 2.5]
															}, 
															{
																Nombre: "Medicina",
																Pentagono: [1.5, 0.5, 1.5, 2.5, 0.5]
															}, 
															{
																Nombre: "Filosofía",
																Pentagono: [0.5, 1.5, 0.5, 1.5, 2.5]
															}, 
														]
													}*/
													showTittle={false}
													isTeacher={false}
												/>
											</Box>
										</Paper>
									</Grid>
									<Grid item xs={12} md={6} className="h-full p-2">
										<Box
											className="text-colordocente text-base font-semibold"
											sx={{
												height: "8%",
											}}
										>
											Interpretación
										</Box>
										<Box
											className="text-colordocente overflow-auto"
											sx={{
												height: "92%",
											}}
										>
											<Stack
												spacing={1.5}
												justifyContent="space-between"
												className="h-full"
											>
												<Acordion
													competencia={"Competencia Pedagógica"}
													momento={data[0]["Pentagono"][0]}
													interpret={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
													}
												/>
												<Acordion
													competencia={"Competencia Comunicativa"}
													momento={data[0]["Pentagono"][1]}
													interpret={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
													}
												/>
												<Acordion
													competencia={"Competencia de Gestión"}
													momento={data[0]["Pentagono"][2]}
													interpret={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
													}
												/>
												<Acordion
													competencia={"Competencia Investigativa"}
													momento={data[0]["Pentagono"][3]}
													interpret={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
													}
												/>
												<Acordion
													competencia={"Competencia Tecnológica"}
													momento={data[0]["Pentagono"][4]}
													interpret={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
													}
												/>
											</Stack>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</>
					)}
				</Box>
			</ThemeProvider>
		</>
	);
};

export default TabResultadosIndividuales;