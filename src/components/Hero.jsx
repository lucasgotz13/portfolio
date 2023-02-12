import {
    Box,
    Container,
    Flex,
    Image,
    Spacer,
    Text,
    Icon,
    HStack,
    Center,
    Button,
} from "@chakra-ui/react";
import Aos from "aos";
import {
    FaBootstrap,
    FaCss3,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJs,
    FaNpm,
    FaReact,
    FaSass,
} from "react-icons/fa";
import { SiNotion, SiTailwindcss } from "react-icons/si";
function Hero() {
    return (
        <>
            <br id="about-me" />
            <Container mt="40" maxW="3xl">
                <Flex gap={10} alignItems="center">
                    <Box fontFamily="Poppins" boxSize="lg">
                        <Text
                            color="white"
                            fontSize={{
                                base: "3xl",
                                sm: "5xl",
                                md: "5xl",
                                lg: "5xl",
                            }}
                            mt="25%"
                        >
                            Hi, I'm{" "}
                            <span style={{ color: "#00ffcc" }}>Lucas</span>
                        </Text>
                        <Text
                            color="white"
                            fontSize={{
                                base: "lg",
                                sm: "xl",
                                md: "xl",
                                lg: "xl",
                            }}
                        >
                            {/* Tengo 17 años y soy fullstack developer. Actualmente
                            resido en Buenos Aires, Argentina */}
                            17y/o fullstack developer currently living in Buenos
                            Aires, Argentina.
                        </Text>
                        <Button mt={7} size="md" colorScheme="cyan">
                            Curriculum
                        </Button>
                    </Box>
                    <Spacer />
                    <Box boxSize="md">
                        <Image
                            src="../assets/WhatsApp Image 2023-01-25 at 5.03.06 PM.jpeg"
                            boxSize={{
                                base: "100px",
                                sm: "200px",
                                md: "300px",
                            }}
                            mt={{
                                base: "10",
                                md: "0",
                            }}
                            borderRadius="100%"
                        ></Image>
                    </Box>
                </Flex>
            </Container>
            <Container id="skills" maxW="3xl" data-aos="fade-down" mt={48}>
                <Center>
                    <Text
                        fontFamily="Poppins"
                        fontSize="5xl"
                        as="b"
                        color="#00ffcc"
                    >
                        Skills
                    </Text>
                </Center>
                <Text color="white" textAlign="center" fontSize="2xl" mt={5}>
                    Langauges
                </Text>
                <Center mt={5} data-aos="fade-down">
                    <HStack spacing={{ base: "8", sm: "24" }} flexWrap="wrap">
                        <Box>
                            <Icon
                                as={FaHtml5}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#e34c26"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaCss3}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#264de4"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaJs}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#f0db4f"
                            ></Icon>
                        </Box>
                    </HStack>
                </Center>
                <Text
                    color="white"
                    textAlign="center"
                    fontSize="2xl"
                    mt={5}
                    data-aos="fade-down"
                >
                    Libraries & Frameworks
                </Text>
                <Center mt={5} data-aos="fade-down">
                    <HStack
                        spacing={{ base: "8", sm: "24" }}
                        // display={{
                        //     sm: "flex",
                        //     md: "flex",
                        //     lg: "",
                        // }}
                    >
                        <Box maxW="sm">
                            <Icon
                                as={FaSass}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#cc6699"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={SiTailwindcss}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#3490dc"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaReact}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#61DBFB"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaBootstrap}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#563d7c"
                            ></Icon>
                        </Box>
                    </HStack>
                </Center>
                <Text
                    color="white"
                    textAlign="center"
                    fontSize="2xl"
                    mt={5}
                    data-aos="fade-down"
                >
                    Technologies
                </Text>
                <Center mt={5} data-aos="fade-down">
                    <HStack
                        spacing={{ base: "8", sm: "24" }}
                        display="flex"
                        justifyContent="center"
                        flexWrap="wrap"
                    >
                        <Box>
                            <Icon
                                as={FaNpm}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#cb3837"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaGitAlt}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#f34f29"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={FaGithub}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#f5f5f5"
                            ></Icon>
                        </Box>
                        <Box>
                            <Icon
                                as={SiNotion}
                                boxSize={{
                                    base: 10,
                                    sm: 10,
                                    md: 20,
                                    lg: 20,
                                    xl: 20,
                                }}
                                color="#000000"
                            ></Icon>
                        </Box>
                    </HStack>
                </Center>
            </Container>
        </>
    );
}

export default Hero;
