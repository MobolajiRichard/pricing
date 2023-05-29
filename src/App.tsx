
import './App.css'

function App() {

  return (
    <div className='bg-gray-100 w-full'>
<table className='w-full'>
  <thead>
  <tr >
    <th>
      <div className='font-semibold'>
        <div className='flex items-center'>
          <p className=' w-32 h-10 p-2 border-2 border-red-700 rounded-tl-lg rounded-bl-lg'>Foreigner</p>
          <p className=' w-32 h-10 p-2 border-2 border-gray-300 text-gray-300 rounded-tr-lg rounded-br-lg '>Native</p>
        </div>
        <div className='flex flex-col items-start'>
          <p className='text-md text-gray-300 mb-2 mt-4'>Class duration</p>
          <div className='bg-white h-12 mb-4 rounded-md px-4 flex items-center w-full'>
          <select className='w-full'>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
          </div>
          <p className='text-md text-gray-300 mb-2'>Number classes</p>

        <div className='bg-white h-12 mb-4 rounded-md px-4 flex items-center w-full'>
        <select className='w-full'>
        <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        </div>
       
        </div>
       
      </div>
    </th>
    <th className='p-2'>
      <div className='font-normal flex flex-col items-center w-full'>
        <p className='border-b border-red-200 border-dashed font-bold mb-4 w-full'>Regular</p>
        <div className='flex items-center text-sm'>
          <p>1400$</p>
          <p className='border border-black px-[4px] py-[1px] rounded-full font-bold ml-2'>-40%</p>
        </div>
        <p className='text-red-700 text-4xl font-bold my-2'>960£</p>
        <p className='text-sm'>per class</p>
      </div>
    </th>
    <th className='p-2'>
    <div className='font-normal flex flex-col items-center w-full'>
        <p className='border-b border-red-200 border-dashed font-bold mb-4 w-full'>Regular</p>
        <div className='flex items-center text-sm'>
          <p>1400$</p>
          <p className='border border-black px-[4px] py-[1px] rounded-full font-bold ml-2'>-40%</p>
        </div>
        <p className='text-red-700 text-4xl font-bold my-2'>960£</p>
        <p className='text-sm'>per class</p>
      </div>
    </th>
    <th className='p-2'>
    <div className='font-normal flex flex-col items-center w-full'>
        <p className='border-b border-red-200 border-dashed font-bold mb-4 w-full'>Regular</p>
        <div className='flex items-center text-sm'>
          <p>1400$</p>
          <p className='border border-black px-[4px] py-[1px] rounded-full font-bold ml-2'>-40%</p>
        </div>
        <p className='text-red-700 text-4xl font-bold my-2'>960£</p>
        <p className='text-sm'>per class</p>
      </div>
    </th>
  </tr>
  </thead>
<tbody>
<tr>
    <td>Flexible schedule</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>Reschedule class</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>Free consultations</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>Internal credits</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>Bonus program</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>Referral program</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td className='text-start'>Total bundle costs</td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
<tr>
    <td>
      <div>
        <p className='font-semibold mb-2'>Or, get a trial class:</p>
        <button className='bg-orange-500 py-2 px-12 rounded-3xl font-semibold text-md'>Pay 500 $</button>
      </div>
    </td>
    <td>b</td>
    <td>b</td>
    <td>b</td>
  </tr>
</tbody>
</table>
    </div>
  )
}

export default App
