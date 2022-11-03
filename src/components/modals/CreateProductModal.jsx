import { useState } from 'react'
import { Form } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createProduct } from '../../features/products/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { BsPlusLg } from 'react-icons/bs'
import Spinner from '../Spinner'

const CreateProductModal = () => {
  const { loading } = useSelector((state) => state.product)
  const [modal, toggleModal] = useState(false)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const submitForm = (data) => {
    dispatch(createProduct(data))
    toggleModal(!modal)
  }
  return (
    <div>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={() => toggleModal(!modal)}
      >
        <BsPlusLg />
        <span className='sr-only'>Icon description</span>
      </button>
      {modal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
              <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                <button
                  type='button'
                  className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                  data-modal-toggle='authentication-modal'
                  onClick={() => toggleModal(!modal)}
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
                <div className='py-6 px-6 lg:px-8'>
                  <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                    Create Product
                  </h3>
                  <Form className='space-y-6' onSubmit={handleSubmit(submitForm)}>
                    <div>
                      <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        placeholder='Apple MacBook'
                        required
                        {...register('name')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='price'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Price
                      </label>
                      <input
                        type='text'
                        name='price'
                        id='price'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        placeholder='100000'
                        required
                        {...register('price')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='description'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Description
                      </label>
                      <input
                        type='text'
                        name='description'
                        id='description'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        placeholder='MackBook Pro'
                        required
                        {...register('description')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='inventory'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Inventory
                      </label>
                      <input
                        type='text'
                        name='inventory'
                        id='inventory'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        placeholder='10'
                        required
                        {...register('inventory')}
                      />
                    </div>
                    <button
                      type='submit'
                      className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      {loading ? (
                        <>
                          <Spinner />
                        </>
                      ) : (
                        'Create'
                      )}
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  )
}

export default CreateProductModal
