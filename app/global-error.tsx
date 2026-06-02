"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            background: "#0B1121",
            color: "#F8FAFC",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "480px" }}>
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#3B82F6",
                margin: "0 0 16px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              500
            </h1>
            <p style={{ fontSize: "18px", color: "#64748B", margin: "0 0 32px" }}>
              Something went wrong.
            </p>
            <button
              onClick={reset}
              style={{
                padding: "12px 24px",
                background: "#3B82F6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
