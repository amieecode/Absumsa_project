import React from 'react';
import EventsHero from '../Components/Events/EventsHero';
import EventsCard from '../Components/Events/EventsCard';


const Events = () => {
  return (
    <main className='mb-4 '>
      <EventsHero /> 
      <EventsCard />
      <button className="mx-auto flex items-end gap-x-2 font-bold text-secondary border-2 border-secondary px-6 py-2 rounded-lg">
                <span>Load More</span>
            </button>
    </main>
  )
}

export default Events;
