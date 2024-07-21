import React from 'react'
import "./HomePage.css"
const HomePage=()=>{
	return(
<div>

<section  className='-z-50 banner relative flex flex-col justify-center itself'>
<div className='w-[50w]z-10 text center'>
<p className='text-2xl lg:text-7xl font-bold z-10 py-5'>Zosh Food</p>
<p className='z=10 text-gray-300 text-xl'>Taste the Convenience :Food,Fast</p>

		
		</div>
		<div className="cover absolute top-0 left-0 right-0"></div>
		<div className="fadout"></div>
		</section>
		
		<section className="p-10 lg:py-10 lg-px-20">
		<div className="">
		<p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top</p>
		</div>
		<MultipleItem/>
		</section>
		
		<section className="px-5 lg:px-20">
		<div>
		<h1 className="text-2xl font-semibold text-gray-400-py-3">
		order from our handpicked favourites</h1>
		<div className="flex flex-wrap items-center justify-around">
		{restaurants.map((item,index)=><RestaurantCard item={item} index={index}/>)}
		</div>
		</div>
		</section>
		</div>
	)
}
export default HomePage