import './styles/app.css';
import { Route,Routes } from "react-router-dom";
import ContextProvider from './context/ContextProvider';

// Pages
import VideoLayout from './components/Layouts/VideoLayout';
import DrawerLayout from './components/Layouts/DrawerLayout';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Staff from './pages/Staff';
import Ranks from './pages/Ranks';
import StaffList from './pages/Dashboard/StaffList/StaffList';
import Tickets from './pages/Dashboard/Tickets/Tickets';
import Ticket from './pages/Dashboard/Ticket/Ticket';
import ContactUs from './pages/ContactUs/ContactUs';

// MUI Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <div className="App">
                  <Routes>
                    <Route element={<VideoLayout />}>
                        <Route path="/" element={<Home />}>  </Route>
                        <Route path="/staff" element={<Staff />}>  </Route>
                        <Route path="/ranks" element={<Ranks />}>  </Route>
                        <Route path="/contact-us" element={<ContactUs />}>  </Route>
                        <Route path="/login" element={<Login />}>  </Route>
                    </Route>
                    <Route element={<DrawerLayout />}>
                      <Route path="/staff-list" element={<StaffList />}>  </Route>
                      <Route path="/tickets" element={<Tickets />}>  </Route>
                      <Route path="/tickets/:ticket_id" element={<Ticket />}>  </Route>
                    </Route>
                  </Routes>
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
