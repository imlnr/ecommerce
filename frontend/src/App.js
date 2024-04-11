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
        <Provider store={store}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Navbar />
            <MainRoutes />
          </ThemeProvider>
      </BrowserRouter>
        </Provider>
    </>
  )
}

export default App
