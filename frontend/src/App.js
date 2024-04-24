import './App.css'
import Navbar from './components/Navbar'
import { Provider } from "react-redux"
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import MainRoutes from './AllRoutes/MainRoutes'
import Footer from './components/Footer'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#131a22',
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
            {/* <Footer /> */}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
