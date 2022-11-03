import { Form, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/users/userActions'

const Register = () => {
  const { success, loading, user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  useEffect(() => {
    if (user.id != 0) navigate('/')
    if (success) navigate('/login')
  }, [navigate, user, success])
  const submitForm = (data) => {
    data.email = data.email.toLowerCase()
    data.role = parseInt(data.role)
    dispatch(registerUser(data))
  }
  return (
    <div className=' min-h-screen flex justify-center items-center'>
      <div className='p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <Form className='space-y-6' onSubmit={handleSubmit(submitForm)}>
          <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
            Sign up to our platform
          </h5>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@company.com'
              required
              {...register('email')}
            />
          </div>
          <div>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              First Name
            </label>
            <input
              type='text'
              name='first_name'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='Harry'
              required
              {...register('first_name')}
            />
          </div>
          <div>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Last Name
            </label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='Singh'
              required
              {...register('last_name')}
            />
          </div>
          <div>
            <label
              htmlFor='roles'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Select an option
            </label>
            <select
              id='roles'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              {...register('role')}
            >
              <option value='3'>Staff</option>
              <option value='2'>Manager</option>
              <option value='1'>Admin</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
              {...register('password')}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Confirm password
            </label>
            <input
              type='password'
              id='re_password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
              {...register('re_password')}
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            disabled={loading}
          >
            Create account
          </button>
          <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
            Registered?{' '}
            <Link to='/login' className='text-blue-700 hover:underline dark:text-blue-500'>
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register
