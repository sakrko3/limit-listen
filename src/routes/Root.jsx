import { useEffect, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { getUserDetails } from '../features/users/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Root = () => {
  const { user, access } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user.id == 0 && access) {
      dispatch(getUserDetails())
    }
  }, [user, access, dispatch])
  return (
    <Fragment>
      <div id='nav'>
        <Navbar />
      </div>
      <Outlet />
      <div id='footer'>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Root
