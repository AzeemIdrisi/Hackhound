import React from 'react'
// import Chart from '../../component/Chart'

export default function Admin() {
    const [file,setFile]=useState([])
    const [Accept,setAccept]=useState(false)
    const GetData = async()=>{
        await axios({
        method: "get",
        url: "http://localhost:8000/getDATA",
      }).then(data=>{
        setFile(data.data.subject_Name)
      })
    }
    GetData();
    function handleData(){
        console.log(file)
        setAccept(true)

    }
  return (
    <div className='w-screen h-screen grid place-items-center text-gray-5'>
        {Accept && file.map((data)=>{
            return(
                <div>
                    <h1>{data}</h1>
                </div>
            )
        })}
        <button onClick={handleData}>Get Data</button>
    </div>
  )
}
