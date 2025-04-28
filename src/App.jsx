import React from 'react'
import ContentGenerator from '../src/Pages/ContentGenerator.jsx'
import OutputPreview from './Pages/OutputPreview.jsx'
import FeatureSection from './Pages/FeatureSection.jsx'
const App = () => {
  return (
    <div>

    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <ContentGenerator/>
  <OutputPreview/>
  <FeatureSection/>
  
  </div>
  )
}

export default App