import { css } from "@emotion/react"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, useLocation } from "react-router-dom"
import queryString from 'query-string'

const SuppList = () => {
  const{ search } = useLocation()
  const selectedIdFromSearch = queryString.parse(search).selectedIdFromSearch

  useFirestoreConnect([
    { collection: 'supplements' },
  ])

  const [selectedSupplementsId, setSelectedSupplementsId] = useState(selectedIdFromSearch)

  const supplements = useSelector(state => state.firestore.ordered.supplements)


  return (
    <>
      {isLoaded(supplements)
      ? supplements.map(supplement => {
        const { title, price, description, id } = supplement
        return (
          <div
            className={selectedSupplementsId === id ? 'selected' : 'unselected'}
            key={id}  
            title={title}
            price={price}
            description={description}
            onClick={() => setSelectedSupplementsId(id)}
          >
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        )
        
      })
      : (<h3>Loading...</h3>)
     }
    </>
  )
}

export default SuppList;