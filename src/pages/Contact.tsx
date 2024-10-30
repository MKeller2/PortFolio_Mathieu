import { Heading, Link } from "@chakra-ui/react";

function Contact() {
  return (
    <>
      <Heading mb={4}>Me contacter</Heading>
      <p>
        Par mail :{" "}
        <Link href="mailto:mathieu.amk@gmail.com" color="teal.500">
          mathieu.amk@gmail.com
        </Link>
      </p>
      <p>
        Par téléphone :{" "}
        <Link href="tel:+33609263513" color="teal.500">
          06.09.26.35.13
        </Link>
      </p>
    </>
  );
}

export default Contact;
