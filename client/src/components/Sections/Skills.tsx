import { technologies, type ITech } from "@/constants";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

const Skills = () => {
  return (

    <section id="skills" className="container mx-auto px-10 py-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">Skills</span> {" "}
            & Technologies
        </h2>
        
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      {" "}
      
      {technologies?.map((tech: ITech, idx: number) => (
        <Card key={idx} className="p-4 flex flex-col items-center border justify-center hover:border-primary transition-colors" >
         <img alt={tech?.name} src={tech?.logo} height={48} width={48} className="mb-2 pt-7" />
         <span className="text-sm font-medium">{tech?.name}</span>
        </Card>
      ))}
    </motion.div>
    </section>
    
  );
};

export default Skills;
