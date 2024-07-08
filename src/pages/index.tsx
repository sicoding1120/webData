import React, { useEffect, useState } from 'react'

const Index = () => {
  const [data,setData] = useState([])

  const fecthData = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setData(data)
    } catch (err) {
      if(err) throw err
    }
}

  useEffect(() => {
    fecthData();
  }, [])



  return (
    <div>
      {data.map((items:any, index) => (
        <div className='text-lg' key={index}>{items.nama}</div>
      ))}
    </div>
  )
}

export default Index