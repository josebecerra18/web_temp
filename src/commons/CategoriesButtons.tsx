import {allCategoriesObj} from '../components/ListaDeCategorias';

const CategoriesButtons = () => {
  return (
    <div className='bg-gray-100 flex  justify-center align-middle pt-4 pb-4'>
        {allCategoriesObj.map(val => (
            <button className='pl-3 pr-3 pt-2 pb-2 ml-3 border bg-white
             rounded-full border-purple-200 text-purple-600 text-sm font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent
             focus:outline-none focus:bg-red focus:text-white focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ' style={{whiteSpace: 'nowrap'}}>
                {val.categoryNameProfileEN}
            </button>
        ))}
    </div>
  )
}

export default CategoriesButtons

 