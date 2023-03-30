import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'

function Favorites({myFavorites}) {
  return (
    <div>
      {myFavorites.map(ch=>
        <Card
          onClose={ch.onClose}
              id={ch.id}
              key={ch.id}
              name={ch.name}
              status={ch.status}
              species={ch.species}
              gender={ch.gender}
              origin={ch.origin}
              image={ch.image}
        />
      )}
    </div>
  )
}
function mapStateToProps(state){
  return{
    myFavorites:state.myFavorites
  }
}
export default connect(mapStateToProps)(Favorites)