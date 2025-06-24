'use client'

import Layout from './components/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'


const slides = [
  { image: '/images/korean.png', title: 'Korean Folk Tale' },
  { image: '/images/read.png', title: 'Read Learn Quiz' },
]

export default function HomePage() {
  return (
    <Layout>
      {/* Swiper section */}
      
<Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 4000, // 4 seconds
    disableOnInteraction: false
  }}
>
  {slides.map((slide, i) => (
    <SwiperSlide key={i}>
      <div className="relative w-full h-100">
        <Image
          src={slide.image}
          alt={slide.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bottom-0 w-full  bg-black bg-opacity-50 text-white text-center py-2 text-xl font-bold opacity-50">
          {slide.title}
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      {/* Main content */}
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-12">
        {/* Popular Stories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Stories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border p-4 rounded shadow hover:shadow-md">
              <Image
                src="/images/gumiho.jpg"
                alt="The Fox Spirit"
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">The Fox Spirit</h3>
              <p className="text-sm text-gray-500">AR Level 3</p>
            </div>
          </div>
        </section>

        {/* Read by Level */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Read by Level</h2>
          <div className="flex space-x-4">
            {[2, 3, 4, 5, 6].map(level => (
              <a
                key={level}
                href={`/books?level=${level}`}
                className="border px-4 py-2 rounded hover:bg-blue-50"
              >
                AR Level {level}
              </a>
            ))}
          </div>
        </section>

        {/* Why ReadBuddy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Why ReadBuddy?</h2>
          <p className="text-gray-600 max-w-xl">
            We bring Korean folktales to life in simple English. Great for young readers, learners, or anyone who loves a good story.
          </p>
        </section>
      </div>
    </Layout>
  )
}
