const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-800">
        {content}
      </p>
      
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert