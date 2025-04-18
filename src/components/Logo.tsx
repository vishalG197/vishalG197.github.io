
import { Code2 } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <div className="relative">
        <Code2 className="w-6 h-6 text-pink-500 animate-spin-slow" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      </div>
      <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        VishalG
      </span>
    </div>
  );
};

export default Logo;
