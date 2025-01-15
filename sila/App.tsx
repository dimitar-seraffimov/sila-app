import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/screens/main_screens/Dashboard";
import Exercises from "@/screens/main_screens/Exercises";
import History from "@/screens/main_screens/History";
import NewWorkout from "@/screens/action_screens/NewWorkout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/history" element={<History />} />
            <Route path="/new-workout" element={<NewWorkout />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;