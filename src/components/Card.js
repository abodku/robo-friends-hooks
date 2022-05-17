import React from 'react';

const Card=({name,id,us,email})=>{
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt={us} src={`https://robohash.org/${id}?200x200`}/>

			<h2>{name}</h2>
			<p>{email}</p>
		</div>

		)
}

export default Card