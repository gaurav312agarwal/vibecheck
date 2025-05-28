import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTwitter, FaRedo } from 'react-icons/fa'
import { toaster } from '@/components/ui/toaster'

const MotionBox = motion(Box)

const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    if (location.state?.result) {
      setResult(location.state.result)
    } else {
      navigate('/')
    }
  }, [location.state, navigate])

  const shareResult = () => {
    const text = `I just took the Vibe Check quiz and my vibe is: ${result}! Take the quiz to discover your vibe: ${window.location.origin}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  const restartQuiz = () => {
    navigate('/quiz')
  }

  return (
    <Container maxW="container.md" py={20} textAlign="center" color="white">
      <VStack gap={8}>
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            size="2xl"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
          >
            Your Vibe is:
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Text fontSize="4xl" fontWeight="bold" color="white">
            {result}
          </Text>
        </MotionBox>

        <VStack gap={4}>
          <Button
            colorScheme="twitter"
            size="lg"
            onClick={shareResult}
            color="white"
          >
            <Box as="span" mr="2"><FaTwitter /></Box>
            Share on Twitter
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            onClick={restartQuiz}
            color="white"
          >
            <Box as="span" mr="2"><FaRedo /></Box>
            Take Quiz Again
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}

export default Results 