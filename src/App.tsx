
import './App.css'
import Table from './components/Table'

function App() {

  return (
<div className='flex flex-col items-center bg-[#f2f2f2] py-[2%] text-[#262626] md:px-[10%] min-h-screen w-full overflow-x-hidden'>
  <p className='text-center text-[32px] md:text-5xl font-fira leading-8 w-[50%] md:w-full'>Transparent pricing</p>
  <p className='text-center md:w-[46%] font-source mb-[50px] mt-[10px] px-[10%] md:px-0 leading-6'>On the “Regular” plan you will get the maximum savings,
On "Plus" there will be an opportunity to reschedule and cancel lessons,
and <br/> On "Flexi" you will be accompanied by a mentor.</p>
<Table/>
</div>
  )
}

export default App
