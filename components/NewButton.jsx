import React, { useEffect } from "react";

export default function DonatePopup({ open, onClose }) {
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://cdn.raisely.com/v3/public/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <style>
        {`
          .raisely-donate {
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
          .raisely-donate * {
            max-width: 100% !important;
          }
        `}
      </style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            width: "90vw",
            maxWidth: "1200px",
            height: "80vh",
            overflowY: "auto",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              fontSize: "30px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ✕
          </button>

          <div
            className="raisely-donate"
            data-campaign-path="zandmco"
            data-width="100%"
            data-height="100%"
          />
        </div>
      </div>
    </>
  );
}
