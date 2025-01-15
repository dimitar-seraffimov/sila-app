import Navigation from "./Navigation";
import { cn } from "@/components/lib/clsx-utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Navigation />
      <main
        className={cn(
          "flex-1 pb-24 md:pb-8 px-4 md:px-8 pt-8 md:overflow-y-auto",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;