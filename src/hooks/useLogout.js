import { useAuthContext } from './useAuthContext'
import { Navigate } from 'react-router-dom'

export const useLogout = () => {
  const { dispatch } = useAuthContext()


  const logout = () => {
    
    localStorage.removeItem('user')

   
    dispatch({ type: 'LOGOUT' })
    // Redirect to the login page
    return <Navigate to="/login" replace />
  }

  return { logout }
}