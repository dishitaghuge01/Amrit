import Image from 'next/image';

const MemoryLane = () => {
  const memories = [
    {
      id: 1,
      date: 'January 3, 2022',
      title: 'First Vaccine',
      description: 'We waited forever in that vaccine line, but honestly, it didn’t even feel that long because you were there. We played ice hockey (I won ofc😎), joked around, and turned the most boring wait into something I still smile about.',
      image: '/assets/photos/fvaccine.jpg',
      position: 'left'
    },
    {
      id: 2,
      date: 'February 1, 2022',
      title: 'Second Vaccine',
      description: 'The second shot was way quicker maybe cause I kinda didn’t want it to end so soon. We saw Rao sir, we laughed about it, and somehow ended up back at school just to hang out a little longer. I think we used the vaccine as an excuse to squeeze in one more mini date 😉 and I’d do it all over again',
      image: '/assets/photos/svaccine.jpg',
      position: 'right'
    },
    {
      id: 3,
      date: 'February 5, 2022',
      title: 'First Date',
      description: 'Our first date? I was late (ofc), but you still smiled like nothing mattered. We went to Freezing Point and had the sweetest milkshake ever (just like you) Then came the walk under the stars, totally perfect and magical. And when you dropped me home, I didnt want it to end.',
      image: '/assets/photos/date.jpg',
      position: 'left'
    },
    {
      id: 4,
      date: 'March 16, 2022',
      title: 'The day we held hands',
      description: 'it was Sahils birthday. We were on the train back, and you quietly reached for my hand. We just stood there, saying nothing, like the moment was too soft to break. No words, no fuss, just fingers laced and hearts racing. You didn’t let go the whole way home, and honestly, I didn’t want you to.',
      image: '/assets/photos/hands.jpg',
      position: 'right'
    },
    {
      id: 5,
      date: 'June 24, 2023',
      title: 'First and only sleepover',
      description: 'Our first (and only) sleepover was straight out of a movie. You showed up soaked from the rain, dripping at my doorstep like some dramatic Bollywood hero. You made butter chicken, and somehow it tasted like magic. We watched Rab Ne Bana Di Jodi, then fell asleep next to each other, it was honestly the best night ever. And when you dropped me at the station at 4 AM, ugh, I’ve never hated mornings more.',
      image: '/assets/photos/sleepover.jpg',
      position: 'left'
    },
    {
      id: 6,
      date: 'July 20, 2023',
      title: 'Big Day',
      description: 'The day of Ratan and Shiv’s farewell. You were dropping me off from Pizza Hut, and even though I was already late, you took the longest route possible (suspiciously on purpose). And somewhere along that ride, I said it out loud. No big speeches, just a honest little confession. And just like that, we found our way back to each other.',
      image: '/assets/photos/proposal.jpg',
      position: 'right'
    },
    {
      id: 7,
      date: 'August 11,2023',
      title: 'First Kiss',
      description: 'We were celebrating your birthday two days late thanks to my lovely pink eye. We went to watch Oppenheimer, in the middle of all the science and chaos, it happened. Our first kiss. Quiet, electric, kind of perfect. And then we just kept kissing like the world outside didn’t exist. Pretty sure the bomb wasn’t the only thing exploding that night.',
      image: '/assets/photos/kiss.jpg',
      position: 'left'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 gradient-text">
          Memory Lane
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A timeline of our most precious moments, each one a star in our constellation
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full" />

        {memories.map((memory) => (
          <div key={memory.id} className={`relative mb-16 ${memory.position === 'left' ? 'left-timeline' : 'right-timeline'}`}>
            <div className={`flex items-center ${memory.position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#0d0d2b] z-10" />
              
              {/* Content */}
              <div className={`w-5/12 ${memory.position === 'left' ? 'pr-8' : 'pl-8'}`}>
                <div className="glass rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-sm text-blue-300 font-medium mb-2">{memory.date}</div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-white">{memory.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{memory.description}</p>
                  
                  {/* Actual image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={memory.image}
                      alt={memory.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryLane; 