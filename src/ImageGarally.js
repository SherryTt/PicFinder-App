import React from 'react'

const ImageGarally = ({ fetchData }) => {
  return (
	<div>
		<div className='images-wrapper'>
			{fetchData.map((data) => (
				<div className='image'>
					<a href={data.pageURL} target='_blank'>
				<img 
				src={data.largeImageURL} 
				alt=""
				/>
					</a>
			</div>
			) )}
		</div>
	</div>
  );
};

export default ImageGarally