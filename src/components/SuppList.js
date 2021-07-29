import { useState } from 'react'
import React from 'react'
// import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link, useLocation } from "react-router-dom"
import queryString from 'query-string'
import withContext from "./withContext"
import Supplement from "./Supplement"

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
    <main>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {supplements && supplements.length ? (
            supplements.map((supplement, stock, price, description, index) => (
              <Supplement
              supplement={supplement}
              price={price}
              stock={stock}
              description={description}
              key={index}
              
              addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No supplements found!
              </span>
            </div>
          )}
        </div>
      </div>

        {/* <h1
        css={css`
        text-align: center;`}>Current Supplements</h1>
        <div
        >
        {supplements && supplements.length ? (
          supplements.map((supplement, stock, price, description, index) => (
            <div class='card'>
            <Supplement
            supplement={supplement}
            price={price}
            stock={stock}
            description={description}
            key={index}
            
            addToCart={props.context.addToCart}
            />
            </div>
            ))
            ) : ( 
              <p>No Supplements Found</p>
              )}
              </div> */}
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
            {/* <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p> */}
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