import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.id == 0) {
      navigate('/login')
    }
  }, [navigate, user])

  return <Outlet />
}

export default ProtectedRoute
