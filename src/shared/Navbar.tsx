// src/shared/Navbar.tsx
import {
  Flex,
  Text,
  IconButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Outlet, Link } from "react-router-dom";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      height="100vh"
      bg="#7fd4ff"
      position="relative"
      paddingLeft="1em"
      paddingRight="1em"
    >
      {/* Navbar en haut */}
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="60px"
        align="center"
        justify="space-evenly"
        px="20px"
        borderBottom="3px solid black"
      >
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem as={Link} to="">
              </MenuItem>
              <MenuItem as={Link} to="/contact">
                Contact
              </MenuItem>
              <MenuItem as={Link} to="/project">
                Projets
              </MenuItem>
              <MenuItem as={Link} to="/cv">
                CV
              </MenuItem>
              <MenuItem as={Link} to="/nba">
                NBA Project
              </MenuItem>
              <MenuItem as={Link} to="/calendar">
                Calendar Project
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Text as={Link} to="" fontWeight="bold">
              <FontAwesomeIcon icon={faAsterisk} />
            </Text>
            <Text as={Link} to="/contact" fontWeight="bold">
              Contact
            </Text>
            <Text as={Link} to="/project" fontWeight="bold">
              Projets
            </Text>
            <Text as={Link} to="/cv" fontWeight="bold">
              Cv
            </Text>
          </>
        )}
      </Flex>

      {/* Navbar gauche */}
      {!isMobile && (
        <Flex
          position="absolute"
          top="60px"
          left="0"
          bottom="0"
          width="60px"
          align="center"
          justify="center"
          borderRight="3px solid black"
        >
          <Text
            as={Link}
            to="/nba" // Lien vers la page des projets
            fontWeight="bold"
            transform="rotate(-90deg)"
            whiteSpace="nowrap"
          >
            NBA Project
          </Text>
        </Flex>
      )}

      {/* Navbar droite */}
      {!isMobile && (
        <Flex
          position="absolute"
          top="60px"
          right="0"
          bottom="0"
          width="60px"
          align="center"
          justify="center"
          borderLeft="3px solid black"
        >
          <Text
            as={Link}
            to="/calendar" // Lien vers la page des projets
            fontWeight="bold"
            transform="rotate(90deg)"
            whiteSpace="nowrap"
          >
            Calendar Project
          </Text>
        </Flex>
      )}

      {/* Contenu principal : Outlet pour afficher les pages */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        textAlign="center"
        marginTop="60px" // Espace pour la navbar du haut
      >
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default Navbar;
