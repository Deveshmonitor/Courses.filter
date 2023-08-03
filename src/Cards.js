import React from 'react'
import Card from './Card';


function Cards(Props) {

    let courses = Props.courses
    let category =Props.category

    

    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
    
            })
            return allCourses;
        }
        else{
            //  specific data arrary dikhana hai 
            return courses[category];
        }
    
       
    }
    return (
         <>
         <div className='bg-third bg-opacity-50 min-h-screen'>
         <div className='w-[80%]  max-w-[1200px] flex flex-wrap justify-around   m-auto pt-8 ' >
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} />
                ))
            }
        </div>
         </div>
       
        </>
    )
}

export default Cards