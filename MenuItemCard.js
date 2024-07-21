import React from 'react'
const MenuItem=()=>{
	const handleAddItemToCart=()=>{
		console.log("handle add item to cart")
	}
	return(
		<div className='p-5 lg:flex items-center justify-between box'>
		<div className='lg:flex items-centre lg:space-x-5'>
		<img className='w-[7 rem]object-cover' src="" alt=""/>
		
		<div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
		<p className='font-semibold text-xl'>{'pizza'}</p>
		<p>Rs{'399'}</p>
		<p className='text-gray-400'>{'Rice,Sambar,Papad'}</p>
		
		</div>
		</div><div>
		<Button onClick={handleAddItemToCart}>Add To Cart</Button>
		</div>
		</div>
	);
		
};
export default MenuItemCard