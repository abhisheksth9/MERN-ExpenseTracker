const Modal = ({ children, isOpen, onClose, title }) => {

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm'>
      <div className='relative p-4 w-full max-w-2xl'>        
        <div className='relative bg-white text-gray-900 rounded-2xl shadow-xl'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b border-gray-300'>
            <h3 className='text-lg font-semibold text-gray-900'>
              {title}
            </h3>
            <button
              type='button'
              className='w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hover:text-black transition'
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className='p-4 md:p-5 space-y-4 text-gray-800 dark:text-gray-300'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal