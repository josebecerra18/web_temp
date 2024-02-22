import {allCategoriesObj} from '../components/ListaDeCategorias';

const CategoriesButtons = () => {
  return (
    <div className='bg-gray-100 flex justify-center align-middle pt-4 pb-4'>
        {allCategoriesObj.map(val => (
            <button className='pl-3 pr-3 pt-2 pb-2 ml-3' style={{borderWidth:2,whiteSpace: 'nowrap', borderColor: 'lightgray', borderRadius: '20px', color: 'gray', backgroundColor: 'white'}}>
                {val.categoryNameProfileEN}
            </button>
        ))}
    </div>
  )
}

export default CategoriesButtons