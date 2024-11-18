import { StoreProvider } from "easy-peasy";
import { Toaster } from "./components/ui/sonner";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </StoreProvider>
  );
}
