import './App.css';

import Titulo from './components/Titulo';
import Navigation from './components/Navigation';
import Delete from './components/Delete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {

	return (

		<Grid 
			container
			direction="column"
			sx={{height: '100%'}}
		>

			<Grid item xs={2}>
				<Titulo/>
			</Grid>

			<Grid item xs={10}>
				<Navigation/>
			</Grid>

		</Grid>
		
	);
}

export default App;
