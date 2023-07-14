
import React, { useState, useEffect } from 'react'
import { useGetItemQuery } from '../app/appApi';
import { selectArticle } from '../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export function Reader({id, title}) {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetItemQuery(id);

  const displayBack = 
    <div className="py-12 border-b border-gray-100 bg-gray-50 mb-12">
      <div className="relative max-w-xl mx-auto bg-gray-50">
        <div onClick={() => dispatch(selectArticle({id: false, title: null}))}
          className="text-gray-300 hover:text-gray-500 cursor-pointer text-2xl">
            <FontAwesomeIcon icon={faArrowLeft}/>
        </div>
      </div>
    </div>

  const displayArticle = 
    <article className="prose prose-md max-w-xl mx-auto">
      {title && <h1>{title}</h1>}
      {data && 
        <>
        {title ?? <h1>{data.response.content.webTitle}</h1>}
        <div dangerouslySetInnerHTML={{ __html: data.response.content.fields.body }}></div>
        </>}
    </article>

  const displayLoading = 
    <div className="text-3xl text-gray-300 max-w-xl mx-auto text-center mt-10">
      <FontAwesomeIcon icon={faSpinner} spin/>
    </div>

  return (
    <>
      {displayBack}
      {displayArticle}
      {isLoading && displayLoading}
    </>);
}