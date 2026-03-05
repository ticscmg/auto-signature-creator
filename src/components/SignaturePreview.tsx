import { forwardRef } from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface SignatureData {
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
}

const SignaturePreview = forwardRef<HTMLDivElement, { data: SignatureData }>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: 1250,
          height: 350,
          display: "flex",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        {/* Left panel - dark green */}
        <div
          style={{
            width: 320,
            background: "linear-gradient(180deg, #003D2E 0%, #00261C 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px 20px",
            position: "relative",
          }}
        >
          {/* Photo circle */}
          <div
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              overflow: "hidden",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"
                fill="rgba(255,255,255,0.4)"
              />
            </svg>
          </div>
          {/* GMV Logo text */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: 6,
              marginTop: 4,
            }}
          >
            GMV
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 10,
              letterSpacing: 3,
              marginTop: 4,
              textTransform: "uppercase",
            }}
          >
            Grupo GMV
          </div>
        </div>

        {/* Gold separator line */}
        <div
          style={{
            width: 4,
            background: "linear-gradient(180deg, #D4A843 0%, #B8922F 100%)",
          }}
        />

        {/* Right panel - info */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 50px",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#003D2E",
              marginBottom: 4,
              lineHeight: 1.2,
            }}
          >
            {data.nome || "Seu Nome"}
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#D4A843",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 28,
            }}
          >
            {data.cargo || "Seu Cargo"}
          </div>

          {/* Separator */}
          <div
            style={{
              width: 60,
              height: 2,
              background: "#D4A843",
              marginBottom: 24,
            }}
          />

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.telefone && (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#003D2E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: 15, color: "#444" }}>{data.telefone}</span>
              </div>
            )}
            {data.email && (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#003D2E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: 15, color: "#444" }}>{data.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SignaturePreview.displayName = "SignaturePreview";

export default SignaturePreview;
