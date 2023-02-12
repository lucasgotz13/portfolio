import {
    Container,
    Text,
    Center,
    Card,
    CardBody,
    Flex,
    Box,
    Link,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contact() {
    return (
        <Container mt={20}>
            <Center>
                <Text
                    color="#00ffcc"
                    fontSize={{
                        base: "4xl",
                        sm: "5xl",
                    }}
                    fontFamily="Poppins"
                    as="b"
                >
                    Contact me!
                </Text>
            </Center>
            <Card p={10} bg="primary.600">
                <CardBody color="white">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text fontSize="lg" mb={2}>
                            <EmailIcon mr={6} boxSize={6} />
                            lucasgotz13@gmail.com
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text fontSize="lg" mb={2}>
                            <PhoneIcon mr={6} boxSize={6} />
                            +54 11 6919-7097
                        </Text>
                    </Box>
                </CardBody>
                <Flex
                    mt={2}
                    align="center"
                    justify="space-evenly"
                    color="white"
                >
                    <Link
                        href="https://www.linkedin.com/in/lucas-gotz-6599b6243/"
                        target="_blank"
                        _hover={{
                            color: "#0072b1",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <FaLinkedin size="40px"></FaLinkedin>
                    </Link>
                    <Link
                        href="mailto:lucasgotz13@gmail.com"
                        target="_blank"
                        _hover={{
                            color: "#DB4437",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <SiGmail size="40px"></SiGmail>
                    </Link>
                    <Link
                        href="https://twitter.com/Fideoz_"
                        target="_blank"
                        _hover={{
                            color: "#00acee",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <FaTwitter size="40px" id="contact"></FaTwitter>
                    </Link>
                </Flex>
            </Card>
        </Container>
    );
}

export default Contact;
