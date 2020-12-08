import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Button, Img } from './style'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            console.log('yesh')
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`./detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='img' />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='27' /> {likes} likes!
          </Button>
        </>
      }

    </Article>
  )
}
