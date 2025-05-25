'use client';

import React from 'react';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const YouTubeSection = () => {
  const videos = [
    {
      thumbnail: '/images/youtube/video-mapping-process.jpg.png',
      title: '파워튜닝 과정 살펴보기',
      description: '전문가가 설명하는 파워튜닝의 A to Z',
      link: 'https://www.youtube.com/watch?v=FiCDF4_LeS8'
    },
    {
      thumbnail: '/images/youtube/video-tractor-tuning.jpg.png',
      title: '트랙터 튜닝 성능 비교',
      description: '튜닝 전후 성능 비교 영상',
      link: 'https://www.youtube.com/watch?v=Tja6-uboTyw'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              영상으로 보는 파워튜닝
            </h2>
            <p className="text-xl text-gray-600">
              실제 작업 과정과 성능 향상 결과를 확인해보세요
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaPlay className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-red-600 mb-2">
                    <FaYoutube className="w-6 h-6" />
                    <span className="font-semibold">YouTube</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection; 