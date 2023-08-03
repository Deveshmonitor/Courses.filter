import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify'

function Card(Props) {
    let course = Props.course

    const [like, setLike] = useState(false)
    const [likecourse, setLikecourse] = useState([])

    function clickHandler() {
        if (likecourse.includes(course.id)) {
            setLikecourse((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            if (likecourse.length == 0) {
                setLikecourse([course.id]);
            }
            else {
                setLikecourse((prev) => [...prev, course.id])
            }
            toast.success("LIked")
        }
        // logic 
        setLike(!like);
    }
    return (
        <div className='w-[250px] rounded-lg h-[300px] bg-fifth bg-opacity-70 my-3 flex flex-col overflow-hidden'>
            <div className='relative'>
                <img className='w-full' src={course.image.url} />

                <div>
                    <button onClick={clickHandler} className='absolute grid text-xl place-items-center right-2 -bottom-1 h-[30px] w-[30px] bg-fourth rounded-full '>
                        {like ? (<FcLike />) : (<FcLikePlaceholder />)}
                    </button>
                </div>
            </div>
            <div className='py-4 px-2 text-fourth '>
                <p className='mt-2 font-bold '>{course.title}</p>
                <p className='text-[0.9rem]  opacity-80'>{
                         course.description.length >100 ?
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                }
                </p>
            </div>
        </div>
    )
}

export default Card