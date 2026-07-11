import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card } from "../ui/card";
import ContactForm from "../ContactForm";
const Contact = () => {
  return (
    <section className="container mx-auto px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex gap-4 mb-8">
            <Button variant={"outline"} size={"icon"} asChild>
              <a href="https://github.com/princepal09" target="_blank">
                <FaGithub className="w-5 h-5" />
              </a>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <a href="https://linkedin.com/in/princepal09" target="_blank">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <a href="mailto:princepal262501@gmail.com" target="_blank">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <Card className="px-6 py-6">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-20"
        >
          <img
            src={"/contact.svg"}
            alt="Contact Illustrations"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
