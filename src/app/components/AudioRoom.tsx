'use client';
import { useEffect } from "react";

import { useState, useRef } from 'react';

const AudioRoom = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [audioErrors, setAudioErrors] = useState<Set<number>>(new Set());
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  useEffect(() => {
    // Generate random heights for waveform visualization on client side
    const heights = Array.from({ length: 20 }, () => Math.random() * 20 + 8);
    setWaveformHeights(heights);
  }, []);

  const audioClips = [
    {
      id: 1,
      title: 'Our YouTube Channel',
      sender: '',
      duration: '0:39',
      audio: '/assets/audio/audio.mp3',
      description: 'You were coming to leave me at the station aur hum bakchodi kr rhe the.'
    },
    {
      id: 2,
      title: 'Just chill',
      sender: '',
      duration: '0:15',
      audio: '/assets/audio/audio (1).mp3',
      description: 'Mein roti banate wakt chill karta hua mera bf.'
    },
    {
      id: 3,
      title: 'Iskcon it is',
      sender: '',
      duration: '0:30',
      audio: '/assets/audio/audio (2).mp3',
      description: 'Mein bani teri radha💃🏻'
    }
  ];

  const handlePlay = (id: number) => {
    // Don't try to play if audio file is missing
    if (audioErrors.has(id)) {
      return;
    }

    // Stop all other audio
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && audio !== audioRefs.current[id]) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audioRefs.current[id];
    if (audio) {
      if (playingId === id) {
        audio.pause();
        setPlayingId(null);
      } else {
        audio.play().catch(() => {
          // If play fails, mark as error
          setAudioErrors(prev => new Set(prev).add(id));
        });
        setPlayingId(id);
      }
    }
  };

  const handleTimeUpdate = (id: number) => {
    const audio = audioRefs.current[id];
    if (audio && audio.ended) {
      setPlayingId(null);
    }
  };

  const handleAudioError = (id: number) => {
    setAudioErrors(prev => new Set(prev).add(id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 gradient-text">
          Audio Room
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audioClips.map((clip) => (
          <div key={clip.id} className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.784L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.784z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1">{clip.title}</h3>
              <p className="text-sm text-blue-300"> {clip.sender}</p>
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">{clip.description}</p>

            {/* Audio player */}
            <div className="space-y-4">
              {/* Waveform visualization */}
              <div className="flex items-center justify-center space-x-1 h-8">
                {waveformHeights.map((height, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      playingId === clip.id && !audioErrors.has(clip.id)
                        ? 'bg-gradient-to-t from-blue-500 to-purple-500 animate-pulse' 
                        : 'bg-gray-600'
                    }`}
                    style={{
                      height: `${height}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Audio controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handlePlay(clip.id)}
                  disabled={audioErrors.has(clip.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                    audioErrors.has(clip.id)
                      ? 'bg-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {playingId === clip.id && !audioErrors.has(clip.id) ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                <div className="text-sm text-gray-400">
                  {audioErrors.has(clip.id) ? 'Audio not available' : `Duration: ${clip.duration}`}
                </div>
              </div>

              {/* Hidden audio element */}
              <audio
                ref={(el) => audioRefs.current[clip.id] = el}
                src={clip.audio}
                onTimeUpdate={() => handleTimeUpdate(clip.id)}
                onEnded={() => setPlayingId(null)}
                onError={() => handleAudioError(clip.id)}
                preload="metadata"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Audio room footer */}
      <div className="text-center mt-12">
        <p className="text-gray-400 text-sm">
          
        </p>
        {audioErrors.size > 0 && (
          <p className="text-yellow-400 text-xs mt-2">
           
          </p>
        )}
      </div>
    </div>
  );
};

export default AudioRoom; 