import React, {useState, useEffect} from 'react';

const Navigation = () => {
  const [date, setDate] = useState(Date.now().toString());
  const [dateChange, setDateChange] = useState(false);
  console.log(date);

  useEffect(()=> {
    setDateChange(true);
  },[date]);
  console.log(dateChange);
  return (
    <nav className='font-display bg-primary'>
      <div
        className='container mx-auto flex justify-between items-center h-20 px-12'>
        <h3 className='text-white'>Digital Solutions by Don</h3>
        <form>
          <input type='date' value={date} onChange={e=>setDate(e.target.value)}
                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </form>
        <p className='text-white'>Images provided by Nasa</p>
      </div>
    </nav>);
};

export default Navigation;