import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AsteriskIcon from "../shared/AsteriskIcon";

function Home() {
  return (
    <>
      <AsteriskIcon width={600} height={600} />
      <Box textAlign="center" py={10} px={6} position="relative">
        <Heading as="h1" size="2xl" mb={6}>
          Bienvenue dans mon Portfolio
        </Heading>
        <p>Voici quelques-uns de mes projets, jetez un coup d'œil!</p>

        <Button colorScheme="teal" size="lg" as={Link} to="/project">
          Voir mes projets
        </Button>
        <p>This is my Home Page</p>
      </Box>
    </>
  );
}

export default Home;
