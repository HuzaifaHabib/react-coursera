import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Loading from './loadingComponent'

function RenderCard({ item, isLoading, errmess }) {

  if (isLoading) {
    return (
      <Loading />
    );
  }
  else if (errmess) {
    return(
    <h4>{errmess}</h4>
    )
  }
  else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    )
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} isLoading={props.dishesLoading}
            errMess={props.dishesErrmess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
      {/* {console.log(props.leader.name)} */}
    </div>
  );
}

export default Home;   