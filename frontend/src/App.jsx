import './App.css'
import Navbar from './components/Navbar'
import { Provider } from "react-redux"
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import MainRoutes from './AllRoutes/MainRoutes'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <MainRoutes/>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
