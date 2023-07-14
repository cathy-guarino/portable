
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Result } from './Result'
import { useSearchQuery } from '../app/appApi';
import { setLastSearch } from '../app/appSlice';

export function Search() {
  const dispatch = useDispatch();

  const lastSearch = useSelector((state) => state.app.lastSearch)
  const [searchQuery, setSearchQuery] = useState(lastSearch)
  const { data, error, isLoading, refetch } = useSearchQuery(searchQuery);

  useEffect(() => {
    dispatch(setLastSearch(searchQuery))
  }, [searchQuery])

  const displaySearch = 
    <div className="py-12 border-b border-gray-100 bg-gray-50 mb-12">
      <div className="flex max-w-xl mx-auto space-x-6">
        <div className="relative rounded-md shadow-sm  bg-gray-50 w-full">

          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
            placeholder="Search..."
          />
        </div>
          
      </div>
    </div>
  
  const displayEmptyState = 
    <div className="text-gray-500 text-center flex-col space-y-3">
      <div>No results found</div>
      <button
        onClick={() => setSearchQuery('')}
        type="button"
        className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Reset
      </button>
    </div>

  const displayResults = data && 
    <div className="">
      {data.response.results.length === 0 && displayEmptyState}

      <ul role="list" className="divide-y divide-gray-200 max-w-xl mx-auto">
        {data.response.results.map((result) => (
          <li key={result.id} onClick={() => console.log(result)} className="px-4 py-4 sm:px-0">
            <Result result={result}/>
          </li>
        ))}
      </ul>
    </div>

  const displayLoading = 
    <div className="text-3xl text-gray-300 max-w-xl mx-auto text-center">
      <FontAwesomeIcon icon={faSpinner} spin/>
    </div>
  
  return (
    <>
    {displaySearch}
    {displayResults}
    {isLoading && displayLoading}
    </>);
    
}