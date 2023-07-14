import React from 'react';
import { useDispatch } from 'react-redux';
import { selectArticle } from '../app/appSlice';

export function Result({ result }) {
  const dispatch = useDispatch();

  const handleClick = () => 
    dispatch(selectArticle({id: result.id, title: result.webTitle}))

  const transformDate = date => new Date(date).toLocaleDateString('en-GB')
  
return (
  <div 
    onClick={() => handleClick()} 
    className="flex group cursor-pointer">
    <div>

      <div className="text-xs text-indigo-900 bg-indigo-50 rounded-md py-0.5 px-2 inline">
        {result.sectionName}
      </div>

      <h4 className="text-xl font-bold group-hover:text-indigo-700 mt-2 mb-1">
        {result.webTitle}
      </h4>

      <p className='text-sm text-gray-400 mb-2 group-hover:text-gray-500'>
        {result.fields.trailText}
      </p>

      <p className='text-sm text-gray-400'>
        {transformDate(result.webPublicationDate)}
      </p>

    </div>
  </div>
);
}

