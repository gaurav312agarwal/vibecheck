// import React, { useState, type ChangeEvent } from 'react' // Removed unused React import
import { useState, type ChangeEvent } from 'react'
import {
  Box,
  // Button, // Removed unused import
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { RadioGroup, Radio } from '@/components/ui/radio'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    id: 1,
    question: "What's your ideal weekend activity?",
    options: [
      { value: 'a', label: 'Exploring new places' },
      { value: 'b', label: 'Chilling at home' },
      { value: 'c', label: 'Hanging with friends' },
      { value: 'd', label: 'Learning something new' },
    ],
  },
  {
    id: 2,
    question: 'Pick your power color:',
    options: [
      { value: 'a', label: 'Electric Blue' },
      { value: 'b', label: 'Sunny Yellow' },
      { value: 'c', label: 'Forest Green' },
      { value: 'd', label: 'Fiery Red' },
    ],
  },
  {
    id: 3,
    question: 'Choose your spirit animal:',
    options: [
      { value: 'a', label: 'Dolphin - Playful & Intelligent' },
      { value: 'b', label: 'Owl - Wise & Mysterious' },
      { value: 'c', label: 'Lion - Bold & Confident' },
      { value: 'd', label: 'Panda - Chill & Friendly' },
    ],
  },
  {
    id: 4,
    question: "What's your go-to snack for a movie night?",
    options: [
      { value: 'a', label: 'Popcorn' },
      { value: 'b', label: 'Chips and dip' },
      { value: 'c', label: 'Candy' },
      { value: 'd', label: 'Fruit platter' },
    ],
  },
  {
    id: 5,
    question: 'Which social media platform do you use the most?',
    options: [
      { value: 'a', label: 'Instagram' },
      { value: 'b', label: 'TikTok' },
      { value: 'c', label: 'Twitter' },
      { value: 'd', label: 'YouTube' },
    ],
  },
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const navigate = useNavigate()

  const handleAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results and navigate to results page
      const result = calculateResult(newAnswers)
      navigate('/results', { state: { result } })
    }
  }

  const calculateResult = (answers: string[]) => {
    // Simple scoring system - can be made more complex
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const maxVibe = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    
    const vibes = {
      a: 'Adventurous Explorer',
      b: 'Creative Dreamer',
      c: 'Social Butterfly',
      d: 'Intellectual Innovator',
    }

    return vibes[maxVibe as keyof typeof vibes]
  }

  return (
    <Box
      // bgGradient="linear(to-br, teal.500, green.300)" // Removed gradient background
      // bg="#f0f2f5" // Removed background color
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={10}
      color="gray.800" // Set default text color to dark
    >
      <Container maxW="container.md" bg="white" p={8} borderRadius="lg" boxShadow="lg">
        <VStack gap={8}> {/* Changed spacing to gap */}
          {/* <Progress // Temporarily removed */}
            {/* value={(currentQuestion / questions.length) * 100} */}
            {/* size="sm" */}
            {/* width="100%" */}
            {/* colorScheme="purple" */}
          {/* /> */}
          <Heading size="lg" textAlign="center" color="purple.600"> {/* Set heading color */}
            {questions[currentQuestion].question}
          </Heading>
          {/* Use RadioGroup and Radio from the snippet */}
          <RadioGroup onChange={handleAnswer} value={answers[currentQuestion]}>
            <Stack gap={4}> {/* Changed spacing to gap */}
              {questions[currentQuestion].options.map((option) => (
                <Radio
                  key={option.value}
                  value={option.value}
                  // size="lg" // Removed size prop
                  colorScheme="purple"
                >
                  <Text fontSize="lg" color="gray.800">{option.label}</Text> {/* Set text color explicitly */}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </VStack>
      </Container>
    </Box>
  )
}

export default Quiz 