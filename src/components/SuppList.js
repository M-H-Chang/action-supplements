import { css } from "@emotion/react"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, useLocation } from "react-router-dom"
import queryString from 'query-string'
import withContext from "./SuppList"

const supplementColor = 'red'

const SuppList = (props) => {
  const { supplements } = props.context;
  const{ search } = useLocation()
  const selectedIdFromSearch = queryString.parse(search).selectedIdFromSearch

  useFirestoreConnect([
    { collection: 'supplements' },
  ])

  const [selectedSupplementId, setSelectedSupplementId] = useState(selectedIdFromSearch)

  // const supplements = useSelector(state => state.firestore.ordered.supplements)

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
        <h1>Current Supplements</h1>
        {supplements && supplements.length ? (
        supplements.map((supplement, index) => (
        <Supplement
          supplement={supplement}
          key={index}
          addToCart={props.context.addToCart}
        />
        ))
        ) : ( 
          <p>No Supplements Found</p>
        )}

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

export default withContext(SuppList);