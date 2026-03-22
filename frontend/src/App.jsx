import './App.css'
import Home from './components/Home';
import DetailsDashboard from './components/DetailsDashboard';
import FullDetailCard from './components/FullDetailCard';
import ContactInfoForm from './components/ContactInfoForm';
import {Routes,Route} from 'react-router-dom';
import Authorization from './components/Authorization';
import ResetPassword from './components/ResetPassword';
import FullDetailsForm from './components/FullDetailsForm';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from './components/ProfilePage';
function App() {
 return (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dashboard/:group' element={
            <PrivateRoute>
              <DetailsDashboard />
            </PrivateRoute>
          }/>
      <Route path='/ContactInfoForm' element={
            <PrivateRoute>
              <ContactInfoForm/>
            </PrivateRoute>
              }/>
      <Route path='/Auth' element={<Authorization/>}/>
      <Route path='/ResetPassword' element={<ResetPassword/>}/>
      <Route path='/Form' element={
            <PrivateRoute>
              <FullDetailsForm/>
            </PrivateRoute>
            }/>
      <Route path='/Formee' element={<FullDetailCard/>}/>
      <Route path="/Profile" element={
            <PrivateRoute>
                <ProfilePage/>
            </PrivateRoute>
            }/>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
  </AuthProvider>
 )
}

export default App
