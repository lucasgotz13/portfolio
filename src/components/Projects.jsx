import {
    Card,
    CardBody,
    Center,
    Container,
    Grid,
    GridItem,
    HStack,
    Image,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";

import { FaGithub, FaCode } from "react-icons/fa";

import { Link } from "@chakra-ui/react";

function Projects() {
    return (
        <>
            <br id="projects" className="mt-5" />
            <Container mt="20" data-aos="fade-down" maxW="xl">
                <Center>
                    <Text
                        color="#00ffcc"
                        fontSize="5xl"
                        fontFamily="Poppins"
                        as="b"
                    >
                        Projects
                    </Text>
                </Center>
                <Center>
                    <Grid
                        templateColumns={[
                            "none",
                            "none",
                            "none",
                            "repeat(2, 1fr)",
                        ]}
                        templateRows={{
                            base: "repeat(2, 1fr)",
                            sm: "repeat(4, 1fr)",
                            md: "repeat(4, 1fr)",
                            lg: "repeat(2, 1fr)",
                        }}
                        gap={10}
                        mt={20}
                    >
                        <GridItem w="100%">
                            <Card
                                w={["md"]}
                                bg="primary.600"
                                data-aos="fade-down"
                            >
                                <CardBody>
                                    <Image
                                        src="../assets/portfolio-thumbnail.png"
                                        alt="Portfolio"
                                        h={"300"}
                                    />
                                    <Center>
                                        <Stack mt={4} color="white">
                                            <Text
                                                fontFamily="Poppins"
                                                fontSize={20}
                                                as="b"
                                                align="center"
                                            >
                                                Portfolio
                                            </Text>
                                            <Text
                                                fontFamily="Poppins"
                                                align="center"
                                            >
                                                React | Chakra UI | TailwindCSS
                                            </Text>
                                            <Center>
                                                <HStack gap={2}>
                                                    <Tooltip
                                                        label="Link to repository"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://github.com/lucasgotz13/portfolio"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5s ease",
                                                            }}
                                                        >
                                                            <FaGithub
                                                                size={24}
                                                            ></FaGithub>
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip
                                                        label="Link to demo"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://lucasgotz13.github.io/E-Commerce-CH"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5s ease",
                                                            }}
                                                        >
                                                            <FaCode
                                                                size={24}
                                                            ></FaCode>
                                                        </Link>
                                                    </Tooltip>
                                                </HStack>
                                            </Center>
                                        </Stack>
                                    </Center>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem w="100%">
                            <Card
                                w={["md"]}
                                bg="primary.600"
                                data-aos="fade-down"
                            >
                                <CardBody>
                                    <Image
                                        src="../assets/E-Commerce.png"
                                        alt="E-Commerce"
                                        h={300}
                                    />
                                    <Center>
                                        <Stack mt={4} color="white">
                                            <Text
                                                fontFamily="Poppins"
                                                fontSize={20}
                                                as="b"
                                                align="center"
                                            >
                                                E-Commerce
                                            </Text>
                                            <Text
                                                fontFamily="Poppins"
                                                align="center"
                                            >
                                                HTML | CSS | JS
                                            </Text>
                                            <Center>
                                                <HStack gap={2}>
                                                    <Tooltip
                                                        label="Link to repository"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://github.com/lucasgotz13/E-Commerce-CH"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5s ease",
                                                            }}
                                                        >
                                                            <FaGithub
                                                                size={24}
                                                            ></FaGithub>
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip
                                                        label="Link to demo"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://lucasgotz13.github.io/E-Commerce-CH"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5 ease",
                                                            }}
                                                        >
                                                            <FaCode
                                                                size={24}
                                                            ></FaCode>
                                                        </Link>
                                                    </Tooltip>
                                                </HStack>
                                            </Center>
                                        </Stack>
                                    </Center>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem w="100%">
                            <Card
                                w={["md"]}
                                bg="primary.600"
                                data-aos="fade-down"
                            >
                                <CardBody>
                                    <Image
                                        src="../assets/CoolGamers2.png"
                                        alt="E-Commerce"
                                        h={300}
                                    />
                                    <Center>
                                        <Stack mt={4} color="white">
                                            <Text
                                                fontFamily="Poppins"
                                                fontSize={20}
                                                as="b"
                                                align="center"
                                            >
                                                CoolGamers
                                            </Text>
                                            <Text
                                                fontFamily="Poppins"
                                                align="center"
                                            >
                                                React.js | TailwindCSS | Chakra
                                                UI | Firebase
                                            </Text>
                                            <Center>
                                                <HStack gap={2}>
                                                    <Tooltip
                                                        label="Link to repository"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://github.com/lucasgotz13/E-Commerce-CoolGamers-Gotz"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5s ease",
                                                            }}
                                                        >
                                                            <FaGithub
                                                                size={24}
                                                            ></FaGithub>
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip
                                                        label="Link to demo"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://e-commerce-cool-gamers-gotz.vercel.app/"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5 ease",
                                                            }}
                                                        >
                                                            <FaCode
                                                                size={24}
                                                            ></FaCode>
                                                        </Link>
                                                    </Tooltip>
                                                </HStack>
                                            </Center>
                                        </Stack>
                                    </Center>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem w="100%">
                            <Card
                                w={["md"]}
                                bg="primary.600"
                                data-aos="fade-down"
                            >
                                <CardBody>
                                    <Image
                                        src="../assets/holiday-calculator.jpeg"
                                        alt="E-Commerce"
                                        h={300}
                                    />
                                    <Center>
                                        <Stack mt={4} color="white">
                                            <Text
                                                fontFamily="Poppins"
                                                fontSize={20}
                                                as="b"
                                                align="center"
                                            >
                                                Holiday calculator
                                            </Text>
                                            <Text
                                                fontFamily="Poppins"
                                                align="center"
                                            >
                                                React | TailwindCSS | TypeScript
                                            </Text>
                                            <Center>
                                                <HStack gap={2}>
                                                    <Tooltip
                                                        label="Link to repository"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://github.com/lucasgotz13/Holiday-calculator"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5s ease",
                                                            }}
                                                        >
                                                            <FaGithub
                                                                size={24}
                                                            ></FaGithub>
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip
                                                        label="Link to demo"
                                                        openDelay={200}
                                                    >
                                                        <Link
                                                            href="https://holiday-calculator.vercel.app/"
                                                            target="_blank"
                                                            _hover={{
                                                                color: "#00ffcc",
                                                                transition:
                                                                    "all 0.5 ease",
                                                            }}
                                                        >
                                                            <FaCode
                                                                size={24}
                                                            ></FaCode>
                                                        </Link>
                                                    </Tooltip>
                                                </HStack>
                                            </Center>
                                        </Stack>
                                    </Center>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </Grid>
                </Center>
            </Container>
        </>
    );
}

export default Projects;
