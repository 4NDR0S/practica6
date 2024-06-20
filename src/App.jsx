import React from 'react'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import NewContainer from './components/NewContainer'
import ArticlesContainer from './components/ArticlesContainer'

export default function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <div className='sm:flex lg:gap-8'>
        <MainComponent />
        <NewContainer />
      </div>
      <ArticlesContainer/>
    </main>
  )
}
