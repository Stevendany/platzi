import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './style'

function useCategoriesData () {
  const [categories, setCategories] = useState(mockCategories)
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    loading ? <img width='70px' src='https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif' alt='loading' />
      : <List fixed={fixed}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
        </List>
  )

  return (
    <>
      {renderList(showFixed)}
    </>
  )
}
