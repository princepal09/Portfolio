import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  interface IMenuItem {
    label: string;
    href: string;
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const menuItems: IMenuItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed  p-5 top-0 right-0 left-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to={"/"} className={"text-xl font-bold text-primary"}>
            Prince Pal
          </Link>

          {/* Desktop Menu  */}

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item: IMenuItem) => (
              <a
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                key={item?.href}
                href={item?.href}
              >
                {item?.label}
              </a>
            ))}

            <Button asChild variant="default" size='lg' className="gap-2">
                <a href="/PRINCE_RESUME.pdf" download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
          </nav>

          {/* Mobile Menu Button  */}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t mt-3 bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item: IMenuItem) => (
                <a
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                  key={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={item?.href}
                >
                  {item?.label}
                </a>
              ))}

              <Button asChild variant="default" size="sm" className="gap-2">
                <a href="/PRINCE_RESUME.pdf" download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
