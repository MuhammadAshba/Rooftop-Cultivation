import React from 'react'

function PaymentHistory() {
  return (
    <>


      <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
        <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Your Payment History</h2>
      </div>



      <table class="border-separate border border-slate-400 m-auto  md:mt-8">
        <thead>
          <tr>
            <th class="border border-slate-300 p-2 md:px-9">Payment id</th>
            <th class="border border-slate-300 p-2 md:px-9">Sender name</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment date</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment method</th>
            <th class="border border-slate-300 p-2 md:px-9">Order Number</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>

          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>


        </tbody>
      </table>


    </>
  )
}

export default PaymentHistory