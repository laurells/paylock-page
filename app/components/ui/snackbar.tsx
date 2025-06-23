import React from "react";

export function Snackbar({
  message,
  type = "success",
  open,
  onClose,
}: {
  message: string;
  type?: "success" | "error";
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .snackbar-mobile-top-right {
            bottom: auto !important;
            left: auto !important;
            top: 1.5rem !important;
            right: 1.5rem !important;
          }
        }
      `}</style>
      <div
        className={`fixed bottom-6 left-6 px-6 py-3 rounded shadow-lg z-50 transition-all snackbar-mobile-top-right
          ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
        onClick={onClose}
        role="alert"
      >
        {message}
      </div>
    </>
  );
} 