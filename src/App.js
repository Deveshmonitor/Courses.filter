import React, { useEffect, useState } from 'react'
import Filter from './Filter';
import Spiner from './Spiner';
import { filterData, apiUrl } from './Data'
import Cards from './Cards'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const [courses, setCourses] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title)

    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(apiUrl)
                const output = await response.json();
                setCourses(output.data);
                console.log(output);
            }
            catch (error) {
                toast.error("network error")
            }
            setLoading(false)
        }
        fetchData();
    }, []);
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <div className='text-xl text-center font-bold text-secondary py-4 bg-third'>Top Courses</div>
                <Filter filterData={filterData} category={category} setCategory={setCategory} />
                {Loading ? (<Spiner />) : (<Cards courses={courses} category={category}/>)}
                <ToastContainer />
            </div>
        </>


    )
}

export default App;