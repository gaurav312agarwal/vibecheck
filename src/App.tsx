import React from 'react'
// import { ChakraProvider, CSSReset } from '@chakra-ui/react' // Removed direct import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Home from './components/Home'
import { Provider } from '@/components/ui/provider' // Import Provider from snippets
import { Toaster } from '@/components/ui/toaster' // Import Toaster component

function App() {
  return (
    <Provider> {/* Use Provider from snippets */}
      {/* CSSReset might need to be handled differently in v3 with snippets, leaving it out for now */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
      <Toaster /> {/* Render Toaster component */}
    </Provider>
  )
}

export default App
