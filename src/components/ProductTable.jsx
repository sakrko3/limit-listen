import UpdateInventoryModal from './modals/UpdateInventoryModal'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../features/products/productActions'
import Spinner from './Spinner'

const ProductTable = () => {
  const { user, access, loading } = useSelector((state) => state.user)
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    if (access && user.role != 0 && loading == false) {
      dispatch(getProducts())
    }
  }, [access, user, dispatch])

  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Product name
            </th>
            <th scope='col' className='py-3 px-6'>
              Price
            </th>
            <th scope='col' className='py-3 px-6'>
              Description
            </th>
            <th scope='col' className='py-3 px-6'>
              Inventory
            </th>
            {user.role != 3 ? (
              <>
                <th scope='col' className='py-3 px-6'>
                  <span className='sr-only'>Action</span>
                </th>
              </>
            ) : (
              ''
            )}
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            products.map((product) => (
              <tr
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                key={product.id}
              >
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {product.name}
                </th>
                <td className='py-4 px-6'>{product.price}</td>
                <td className='py-4 px-6'>{product.description}</td>
                <td className='py-4 px-6'>{product.inventory}</td>
                {user.role != 3 ? (
                  <>
                    <td className='py-4 px-6'>
                      <UpdateInventoryModal id={product.id} />
                    </td>
                  </>
                ) : (
                  ''
                )}
              </tr>
            ))
          ) : (
            <Spinner />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
