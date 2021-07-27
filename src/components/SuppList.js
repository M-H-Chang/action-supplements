import { css } from "@emotion/react"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, useLocation } from "react-router-dom"
import queryString from 'query-string'
import { useGetAllSupplementsQuery } from "../store/supplementApi"

const supplementColor = 'red'

const SuppList = () => {
  const {
    data: allSupplements,
    error: allSupplementsError,
    isLoading: allSupplementsIsLoading
  } = useGetAllSupplementsQuery();

  const{ search } = useLocation()
  const selectedIdFromSearch = queryString.parse(search).selectedIdFromSearch

  useFirestoreConnect([
    { collection: 'supplements' },
  ])

  const [selectedSupplementId, setSelectedSupplementId] = useState(selectedIdFromSearch)

  const supplements = useSelector(state => state.firestore.ordered.supplements)

  if (allSupplementsIsLoading) return <div>Loading...</div>;
  if (allSupplementsError) return <div>Unable to load supplements.</div>
  return (
    <main
    

    css={css`
        div {
          background: #eee;
          cursor: pointer;
          :hover, 
          :focus {
            color: salmon;
          }
        }
        h3 {
          color: ${supplementColor};
        }
      `}>
        <ul>
      {allSupplements.map((supplement, idx) => (
        <li key={idx}>
          <Link to={`/details/${supplement.id}`}>{supplement.name}</Link>
        </li>
      ))}
    </ul>
      {isLoaded(supplements)
      ? supplements.map(supplement => {
        const { title, description, price,  id } = supplement
        return (
          <div
            className={selectedSupplementId === id ? 'selected' : 'unselected'}
            key={id}  
            title={title}
            description={description}
            price={price}
            onClick={() => setSelectedSupplementId(id)}
          >
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        )
        
      })
      : (<h3>Loading...</h3>)
     }
     <Link to='/supplements/new'>New Supplement</Link>
    </main>
  )
}

export default SuppList;