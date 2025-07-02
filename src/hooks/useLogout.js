import { useAuthContext } from './useAuthContext'
import { Navigate } from 'react-router-dom'

export const useLogout = () => {
  const { dispatch } = useAuthContext()


  const logout = () => {
    
    localStorage.removeItem('user')

   
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}