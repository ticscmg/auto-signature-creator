import { forwardRef } from "react";

interface SignatureData {
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
}

const SignaturePreview = forwardRef<HTMLDivElement, { data: SignatureData }>(
  ({ data }, ref) => {
    const bluePrimary = "#1a5091";
    const blueDark = "#143d6e";

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
          position: "relative",
        }}
      >
        {/* Left panel - white with info */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px 40px",
            background: "#ffffff",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: 2,
              lineHeight: 1.2,
            }}
          >
            {data.nome || "Seu Nome"}
          </div>
          <div
            style={{
              fontSize: 15,
              color: bluePrimary,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            {data.cargo || "Seu Cargo"}
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {data.telefone && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* WhatsApp icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill={bluePrimary}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span style={{ fontSize: 14, color: "#333" }}>{data.telefone}</span>
              </div>
            )}
            {data.email && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill={bluePrimary}
                  />
                </svg>
                <span style={{ fontSize: 14, color: "#333" }}>{data.email}</span>
              </div>
            )}
            {(data.endereco || data.cidade) && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={bluePrimary} style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <div style={{ fontSize: 14, color: "#333", lineHeight: 1.4 }}>
                    {data.endereco || "Endereço"}
                  </div>
                  <div style={{ fontSize: 14, color: "#333", lineHeight: 1.4 }}>
                    {data.cidade || "Cidade/UF – CEP"}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Brand logos row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 22,
              paddingTop: 14,
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "#333", letterSpacing: 1 }}>BH OUTLET</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#333", letterSpacing: 1 }}>SÓ MARCAS</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#333", letterSpacing: 1 }}>OIAPOQUE</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#333", letterSpacing: 1 }}>AUTO SHOPPING</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#333", letterSpacing: 1 }}>SHOPPING DO AVIÃO</span>
          </div>
        </div>

        {/* Diagonal blue panel on the right */}
        <div
          style={{
            width: 350,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Diagonal clip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: -60,
              background: bluePrimary,
              clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* GMV geometric logo */}
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
              {/* Three chevrons stacked */}
              <path d="M60 10 L95 40 L60 40 L25 40 Z" fill="#ffffff" />
              <path d="M60 30 L95 60 L60 60 L25 60 Z" fill="rgba(255,255,255,0.7)" />
              <path d="M60 50 L95 80 L60 80 L25 80 Z" fill="rgba(255,255,255,0.4)" />
            </svg>
            <div
              style={{
                color: "#ffffff",
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: 6,
                marginTop: 8,
              }}
            >
              GMV
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SignaturePreview.displayName = "SignaturePreview";

export default SignaturePreview;
