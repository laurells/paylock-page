import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar } from "./snackbar";

interface SnackbarContextType {
  showSnackbar: (message: string, type?: "success" | "error") => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");
  const showSnackbar = useCallback((msg: string, t: "success" | "error" = "success") => {
    setMessage(msg);
    setType(t);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar message={message} type={type} open={open} onClose={() => setOpen(false)} />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
} 