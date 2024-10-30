import { Box, Heading, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box textAlign="center" py={10} px={6} position="relative">
      {/* Icône Font Awesome avec taille ajustée */}
      <Box
        position="absolute"
        top="-450px"
        left="5px"
        fontSize="40rem" // Taille ajustée
        color="whiteAlpha.200" // Couleur plus subtile
      >
        <FontAwesomeIcon icon={faAsterisk} />
      </Box>

      <Heading as="h1" size="2xl" mb={6}>
        Bienvenue dans mon Portfolio
      </Heading>
      <p>Voici quelques-uns de mes projets, jetez un coup d'œil!</p>

      <Button colorScheme="teal" size="lg" as={Link} to="/project">
        Voir mes projets
      </Button>
      <p>This is my Home Page</p>
    </Box>
  );
}

export default Home;
