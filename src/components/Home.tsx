import React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaRocket } from 'react-icons/fa'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box
      // bg="#f0f2f5" // Removed background color
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white" // Set default text color to white
    >
      <Container maxW="container.md" py={20} textAlign="center">
        <VStack gap={8}>
          <Heading
            as="h1"
            size="2xl"
            fontWeight="extrabold"
            // color="purple.600" // Remove specific heading color to inherit white
          >
            Vibe Check
          </Heading>
          <Text fontSize="xl" maxW="lg">
            Discover your true vibe in this fun and interactive quiz!
          </Text>
          <Box>
            <Button
              colorScheme="pink"
              size="lg"
              mt={4}
              px={8}
              fontSize="xl"
              fontWeight="bold"
              borderRadius="full"
              boxShadow="lg"
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out'
              }}
              onClick={() => navigate('/quiz')}
              color="white" // Set button text color to white
            >
              Start Your Vibe Check <Box as="span" ml="2"><FaRocket /></Box>
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 