import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Flex,
    IconButton,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import "../App.css";

function Navbar() {
    const [fix, setFix] = useState(false);
    const [display, setDisplay] = useState("none");

    return (
        <Center>
            <Box
                bg="primary.600"
                boxShadow="md"
                color="white"
                p={5}
                w="80%"
                className={`rounded-lg flex items-center font-Poppins ${
                    fix
                        ? "fixed top-5 z-50 overflow-hidden transition  delay-150"
                        : "navbar"
                }`}
            >
                <Text fontSize="2xl" color="#00ffcc" className="p-2 mr-auto">
                    Lucas Gotz
                </Text>
                <UnorderedList display={["none", "none", "flex", "flex"]}>
                    <Flex align="center" justify="center" gap={2}>
                        <a
                            className="p-2 border-b-2 border-b-gray-600 custom-underline"
                            href="#about-me"
                        >
                            About me
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 custom-underline"
                            href="#skills"
                        >
                            Skills
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 custom-underline"
                            href="#projects"
                        >
                            Projects
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 custom-underline"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </Flex>
                </UnorderedList>
                <Flex
                    w="100vw"
                    bgColor="primary.600"
                    zIndex={20}
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                    display={display}
                >
                    <Flex justify="flex-end">
                        <IconButton
                            _hover={{
                                backgroundColor: "primary.500",
                                color: "primary.600",
                            }}
                            bgColor="primary.600"
                            mt={2}
                            mr={4}
                            aria-label="Close Menu"
                            size="lg"
                            icon={<CloseIcon />}
                            onClick={() => setDisplay("none")}
                        />
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <a
                            className="p-2 border-b-2 border-b-gray-600 hover:border-b-cyan-500 hover:cursor-pointer"
                            href="#about-me"
                            onClick={() => setDisplay("none")}
                        >
                            About me
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 hover:border-b-cyan-500 hover:cursor-pointer"
                            href="#skills"
                            onClick={() => setDisplay("none")}
                        >
                            Skills
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 hover:border-b-cyan-500 hover:cursor-pointer"
                            href="#projects"
                            onClick={() => setDisplay("none")}
                        >
                            Projects
                        </a>
                        <a
                            className="p-2  border-b-2 border-b-gray-600 hover:border-b-cyan-500 hover:cursor-pointer"
                            href="#contact"
                            onClick={() => setDisplay("none")}
                        >
                            Contact
                        </a>
                    </Flex>
                </Flex>
                <IconButton
                    bgColor="primary.600"
                    color="white"
                    _hover={{
                        bgColor: "primary.500",
                        color: "black",
                    }}
                    aria-label="Open Menu"
                    size="lg"
                    icon={<HamburgerIcon boxSize={6} />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={() => setDisplay("flex")}
                />
            </Box>
        </Center>
    );
}

export default Navbar;
