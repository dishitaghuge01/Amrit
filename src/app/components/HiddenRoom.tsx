'use client';

import { useState } from 'react';

const HiddenRoom = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === '69426942') {
      setIsUnlocked(true);
      setPasswordError(false);
      setTimeout(() => {
        setShowSecret(true);
      }, 1000);
    } else {
      setPasswordError(true);
      setPassword('');
    }
  };

  const handleUnlock = () => {
    setShowPasswordInput(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 gradient-text">
          Hidden Room
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A secret space waiting to be discovered
        </p>
      </div>

      <div className="relative min-h-[500px] flex items-center justify-center">
        {/* Main content area */}
        <div className="text-center">
          {!isUnlocked ? (
            <div className="space-y-8">
              {/* Lock icon */}
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  A Secret Awaits
                </h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  There&apos;s something special hidden here, just for you. Are you ready to discover it?
                </p>

                {!showPasswordInput ? (
                  <button
                    onClick={handleUnlock}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
                  >
                    Unlock Surprise
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="max-w-md mx-auto">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                        placeholder="Enter password..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      {passwordError && (
                        <p className="text-red-400 text-sm mt-2">Incorrect password. Try again.</p>
                      )}
                    </div>
                    <button
                      onClick={handlePasswordSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => {
                        setShowPasswordInput(false);
                        setPassword('');
                        setPasswordError(false);
                      }}
                      className="block mx-auto px-6 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={`transition-all duration-1000 ${showSecret ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {showSecret && (
                <div className="space-y-8">
                  {/* Success animation */}
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/25 animate-bounce">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">
                      🎉 Surprise Unlocked! 🎉
                    </h3>
                    
                    {/* Secret message */}
                    <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-bold text-white mb-2">I wrote you a poem</h4>
                      </div>
                      
                      <div className="font-serif text-gray-200 leading-relaxed space-y-4">
                        <p>
                          And if I could write you a poem every second, I would,<br></br>
                          Each heartbeat would birth another verse, <br></br>
                          Each breath would carry whispered words, <br></br>
                          I would fill libraries with the way<br></br>
                          your eyes light up on seeing me each day,<br></br>
                          Write encyclopedias about<br></br>
                          How your lips curl up without a doubt<br></br>

                        </p>
                        <p>
                          A thousand poems about your morning kisses,<br></br>
                          Ten thousand more about the joy i miss<br></br>
                          When you are away, and then how my heart feels whole,<br></br>
                          The moment you are back to heal my soul.<br></br>
                        </p>
                        <p>
                          I&apos;d write in sand and write upon the rain,<br></br>
                          I&apos;d write on the walls to ease my loving pain,<br></br>
                          I&apos;d write on the clouds that drift across the sky,<br></br>
                          Just trying to explain the reason why.<br></br>
                        </p>
                        <p>
                          But even if I wrote for a thousand years,<br></br>
                          Even if my fingers never got tired,<br></br>
                          Even if the words flowed like a river,<br></br>
                          I could never capture<br></br>
                          The way you make eternity<br></br>
                          Feel like a single perfect moment,<br></br>
                          Or how a single perfect moment with you<br></br>
                          Feels like a eternity.<br></br>
                        </p>
                        <p>
                          So instead, I&apos;ll spend my lifetime<br></br>
                          Learning the poetry of your breathing,<br></br>
                          Memorizing the rhythm of your heartbeat<br></br>
                          Against my chest at 3AM.<br></br>
                          And when I am old and my voice shakes<br></br>
                          When my hands can barely hold a pen<br></br>
                          I&apos;ll still be writing poems,<br></br>
                          In the way I look at you.<br></br>
                          Still finding new words for forever<br></br>
                          In the simple act of choosing you<br></br>
                          Again<br></br>
                          And again<br></br>
                          And again<br></br>
                        </p>
                        <p className="text-center text-pink-300 font-medium">
                          I love you more than words can express ❤️
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsUnlocked(false);
                        setShowSecret(false);
                        setShowPasswordInput(false);
                        setPassword('');
                        setPasswordError(false);
                      }}
                      className="mt-8 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                    >
                      Lock Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500/20 rounded-full animate-float" />
        <div className="absolute top-1/4 right-0 w-6 h-6 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/4 w-5 h-5 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default HiddenRoom; 