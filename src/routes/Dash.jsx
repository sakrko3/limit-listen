import CreateProductModal from '../components/modals/CreateProductModal'
import ProductTable from '../components/ProductTable'
import { useSelector } from 'react-redux'

const Dash = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <div className='min-h-screen container mx-auto'>
      <div className='grid grid-rows gap-4 pt-32'>
        <div className='grid justify-items-stretch grid-cols-2'>
          <div>
            <p className='font-light	text-3xl'>
              Hello!
              <span> {user.first_name} </span>
              <span>{user.last_name}</span>
            </p>
            <p>
              You are logged in as {user.role == 1 ? 'Admin' : user.role == 2 ? 'Manager' : 'Staff'}
            </p>
            <p className='font-light text-gray-500 dark:text-gray-400'>
              You can perform following tasks:
            </p>
            <p className='font-light text-gray-500 dark:text-gray-400'>
              {user.role == 1 ? 'View, Edit, Create' : user.role == 2 ? 'View, Edit' : 'View'}
            </p>
          </div>
          <div className='justify-self-end'>
            {user.role == 1 ? (
              <>
                <CreateProductModal />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default Dash
