import 'swiper/css'
import 'swiper/css/navigation'

import { ReactNode } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import { Container, GradientEffect } from './styles'

interface SliderProps {
  slides: ReactNode[]
}

export function Slider({ slides = [] }: SliderProps) {
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: true,
    modules: [Navigation],
    breakpoints: {
      420: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3.5,
      },
    },
  }

  return (
    <Container>
      <Swiper {...swiperOptions}>
        <GradientEffect slot="container-start" />
        <GradientEffect slot="container-end" />

        {slides.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
