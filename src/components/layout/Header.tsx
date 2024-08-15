import LogoIcon from "@/assets/logo.svg";
import Navbar from "./Navbar";
import GradientButton from "../ui/GradientButton";

export default function Header() {
  return (
    <header className="py-5 md:border-none overflow-x-clip sticky top-0 backdrop-blur-sm md:backdrop-blur-none border-b border-white/15">
      <nav className="container">
        <div className="flex justify-between items-center md:border md:max-w-2xl md:mx-auto md:border-white/15 md:py-2.5 md:backdrop-blur-sm md:px-5 md:rounded-full">
          <figure className="border size-10 rounded-full inline-flex justify-center items-center border-white/15">
            <LogoIcon className="size-8" />
          </figure>
          <Navbar />
          <GradientButton
            initial="close"
            animate="open"
            className="hidden md:block"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 250, damping: 25 },
              },
              close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
            }}
          >
            Join waitlist
          </GradientButton>
        </div>
      </nav>
    </header>
  );
}
