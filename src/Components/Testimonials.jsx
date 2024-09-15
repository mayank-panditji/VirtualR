import React from 'react'
import { testimonials } from '../constants'
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
const Testimonials = () => {
  return (
    <div className='mt-10 tracking-wide'>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        What prople are saying
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial,index)=>(
            <div key={index}  className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
               <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className='flex mt-8 items-start'>
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                  <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
                </div>
                </div> 
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
