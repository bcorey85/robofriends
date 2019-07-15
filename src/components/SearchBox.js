import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input type='search' placeholder='search robots' className='pa3 b--green ba bg-lightest-blue' onChange={searchChange} />
        </div>
    ) 
}

export default SearchBox