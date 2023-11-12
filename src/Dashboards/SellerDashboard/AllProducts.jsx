import React from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';


function AllProducts() {
  return (
    <>
    <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
     <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>All Products</h2>
    </div>

  

<table class="border-separate border border-slate-400 m-auto  md:mt-8">
  <thead>
    <tr>
      
      <th class="border border-slate-300 p-3 md:px-12">Product name</th>
      <th class="border border-slate-300 p-3 md:px-12">Product Price</th>
      <th class="border border-slate-300 p-3 md:px-12">Category</th>
      <th class="border border-slate-300 p-3 md:px-12">Stock</th>
      <th class="border border-slate-300 p-3 md:px-12">Action</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td class="border border-slate-300 p-3 md:px-12">Pine palant</td>
      <td class="border border-slate-300 p-3 md:px-12">1600</td>
      <td class="border border-slate-300 p-3 md:px-12">Indoor plant</td>
      <td class="border border-slate-300 p-3 md:px-12">12</td>
      <td class="border border-slate-300 p-3 md:px-12">
      < RiDeleteBin6Line className="inline text-xl text-red-600" /> &nbsp;
      < FaRegEdit className="inline text-xl text-blue-800" /> 
      </td>
    </tr>
  
  </tbody>
</table>

    
    </>
  )
}

export default AllProducts