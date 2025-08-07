const LetterRoom = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 gradient-text">
          The Letter Room
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Words written from the heart, preserved in the stars
        </p>
      </div>

      <div className="relative">
        {/* Parchment background */}
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-yellow-50/5 opacity-30" />
          
          {/* Letter content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">My Dearest</h3>
              <p className="text-gray-400">August 08, 2024</p>
            </div>

            <div className="font-serif text-lg leading-relaxed text-gray-200 space-y-6">
              <p>
                Ladies and Gentlemen,<br></br>
                Fighting out of his 19,<br></br>
                Weighing 74 kgs of pure sweetness, <br></br>
                Standing 5 feet 6 inches of complete love,<br></br>
                With a professional record of 20+ makeouts,<br></br>
                The undisputed champion of my heart,<br></br>
                Hailing from the 8th floor of Ambedkar Bhavan,<br></br>
                Known for his bone crushing comedy and sarcastic comments,<br></br>
                With a heart of gold and a smile that could light up the darkest of nights,<br></br>
                And a voice that could melt the coldest of hearts,<br></br>
                Stepping into the 20s, <br></br>
                Is the one and only,<br></br>
                The best boyfriend in the whole world,<br></br>
                Amrit (my sweetie) Dhillon!!!!
              </p>

              <p>
                I know you're not a fighter, but you're the best fighter in the whole world. If I would have been there I would have with hugs and covered your face with kisses. But lets keep them for the next time.
              </p>

              <p>
                Happy birthday to the best boyfriend in the whole world. I love you so much and I hope you have a great birthday.
              </p>

              <div className="text-right mt-8">
                <p className="text-white font-medium">With all my love,</p>
                <p className="text-gray-400">Forever yours</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-blue-500/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-purple-500/30 rounded-full" />
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-blue-500/50 rounded-full" />
            <div className="absolute top-1/3 right-8 w-3 h-3 bg-purple-500/50 rounded-full" />
          </div>
        </div>

        {/* Floating elements around the letter */}
        <div className="absolute -top-4 -left-4 w-4 h-4 bg-blue-500/20 rounded-full animate-float" />
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -right-8 w-3 h-3 bg-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default LetterRoom; 