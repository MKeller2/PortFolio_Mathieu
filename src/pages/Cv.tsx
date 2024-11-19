import { Box, Text, Image, VStack, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, ReactNode } from "react";
import { keyframes } from "@emotion/react"; // Import from @emotion/react
import AsteriskIcon from "../shared/AsteriskIcon";

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen } = useDisclosure();

  // Define the slide-in keyframes
  const slideIn = keyframes`
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  `;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onOpen(); // Triggers the animation
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onOpen]);

  return (
    <Box
      ref={ref}
      animation={isOpen ? `${slideIn} 0.6s ease-out forwards` : undefined}
      opacity={0}
      mb={4}
      p={4}
      bg="whiteAlpha.800"
      borderRadius="md"
      boxShadow="lg"
    >
      {children}
    </Box>
  );
}

export default function ProfilePage() {
  return (
    <VStack spacing={8} w="full" align="center">
      {/* Header banner */}
      <Box
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        position="relative"
        paddingTop="120px"
      >
        {/* Star icon (replace with your desired image) */}
        <AsteriskIcon />

        <Text fontSize="2xl" fontWeight="bold" color="white">
          Mathieu KELLER
        </Text>

        {/* Profile photo */}
        <Image
          src="/path-to-your-photo.jpg" // Replace with actual path
          alt="Profile Photo"
          boxSize="70px"
          borderRadius="full"
          objectFit="cover"
          border="2px solid white"
        />
      </Box>

      {/* Content sections with slide-in effect */}
      <Section>
        <Text fontSize="xl" fontWeight="bold">Compétences</Text>
        <Text>Frontend, ReactJS, TypeScript, VueJS, etc...</Text>
      </Section>

      <Section>
        <Text fontSize="xl" fontWeight="bold">Formation</Text>
        <Text>Epitech promotion 2024, échanges internationaux, etc...</Text>
      </Section>

      <Section>
        <Text fontSize="xl" fontWeight="bold">Expériences professionnelles</Text>
        <Text>Développeur Frontend chez AlphaOmega, Pratico, etc...</Text>
      </Section>

      <Section>
        <Text fontSize="xl" fontWeight="bold">Hobbys</Text>
        <Text>Sport, cinéma, jeux vidéo...</Text>
      </Section>
    </VStack>
  );
}
