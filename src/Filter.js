import React from 'react'


function Filter(Props) {

    let filterData = Props.filterData;
    let category = Props.category;
    let setCategory = Props.setCategory;

    function FilterHandler(title){
        setCategory(title)

    }

  return (
    <div className='flex flex-wrap bg-third bg-opacity-50 justify-center items-center'>

    {filterData.map((data) => (
        <button 
        className=
        {`text-md  text-secondary font-medium bg-third rounded-md  
        text-center m-4 px-2 py-1 hover:bg-opacity-70
         ${category === data.title ?
             "border-fourth border-2"
         : "border-transparent" }
         `}
         key={data.id} onClick={() => FilterHandler(data.title)} >{data.title}</button>

    ))

}
        
    </div>
  )
}

export default Filter