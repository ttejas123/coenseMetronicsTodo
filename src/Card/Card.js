import React from 'react';

function Card(prop){
	console.log(prop)
	const width ={
		width: "18rem"
	}
	return(
	<> 
		<div className = "cards">
			<div className="card" style={width}>
			  <img className="card-img-top" src={prop.imgsrc} alt="employee of coense" />
			  <div className="card-body">
			    <h5 className="card-title">{prop.title}</h5>
			    <p className="card-text">{prop.sname}</p>
			    <a href={prop.link} className="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
		</div>
    </>);
}

export default Card;