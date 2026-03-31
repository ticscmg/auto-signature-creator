import { useRef, useState, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SignatureForm from "@/components/SignatureForm";
import SignaturePreview from "@/components/SignaturePreview";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [data, setData] = useState({
    nome: "",
    filial: "",
    cargo: "",
    telefone: "",
    email: "",
    endereco: "",
    cidade: ""
  });

  const handleDownload = useCallback(async () => {
    if (!previewRef.current) return;
    try {
      const dataUrl = await toPng(previewRef.current, {
        width: 1250,
        height: 350,
        pixelRatio: 2
      });
      const link = document.createElement("a");
      link.download = `assinatura-${data.nome || "gmv"}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Assinatura baixada com sucesso!");
    } catch {
      toast.error("Erro ao gerar imagem. Tente novamente.");
    }
  }, [data.nome]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between py-5 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold text-sm tracking-widest">
                GMV
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">
                Gerador de Assinatura
              </h1>
              <p className="text-xs text-muted-foreground">
                Preencha os dados e baixe sua assinatura para o Outlook
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">
          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-base font-semibold text-foreground mb-5">
              Dados do colaborador
            </h2>
            <SignatureForm data={data} onChange={setData} />
            <Button
              onClick={handleDownload}
              className="w-full mt-6 gap-2"
              size="lg">
              
              <Download className="w-4 h-4" />
              Baixar Assinatura (PNG)
            </Button>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-primary-foreground">
              Pré-visualização
            </h2>
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm overflow-x-auto">
              <div style={{ minWidth: 1250 }}>
                <SignaturePreview ref={previewRef} data={data} />
              </div>
            </div>
            <p className="text-xs text-primary-foreground">
              A imagem será gerada em 1250×350px com alta resolução (2x) para
              ficar nítida no Outlook.
            </p>
          </div>
        </div>
      </main>
      {/* Welcome Popup */}
      <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent
          className="max-w-md border-none shadow-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <DialogHeader className="pt-8 pb-6">
            <DialogTitle className="text-2xl font-bold text-primary-foreground text-center">
              Bem-vindo ao Gerador de Assinatura
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;