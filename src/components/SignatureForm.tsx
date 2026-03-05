import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignatureData {
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
}

interface SignatureFormProps {
  data: SignatureData;
  onChange: (data: SignatureData) => void;
}

const SignatureForm = ({ data, onChange }: SignatureFormProps) => {
  const update = (field: keyof SignatureData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-sm font-medium text-foreground">
          Nome completo
        </Label>
        <Input
          id="nome"
          placeholder="Gustavo Barbosa de Souza"
          value={data.nome}
          onChange={(e) => update("nome", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cargo" className="text-sm font-medium text-foreground">
          Cargo
        </Label>
        <Input
          id="cargo"
          placeholder="Analista de TI Sênior V"
          value={data.cargo}
          onChange={(e) => update("cargo", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-sm font-medium text-foreground">
          Telefone (WhatsApp)
        </Label>
        <Input
          id="telefone"
          placeholder="31.9.9589-8283"
          value={data.telefone}
          onChange={(e) => update("telefone", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="gustavo.souza@gpmv.com.br"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="endereco" className="text-sm font-medium text-foreground">
          Endereço
        </Label>
        <Input
          id="endereco"
          placeholder="BR-356, 7515 – Belvedere"
          value={data.endereco}
          onChange={(e) => update("endereco", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cidade" className="text-sm font-medium text-foreground">
          Cidade / UF / CEP
        </Label>
        <Input
          id="cidade"
          placeholder="Belo Horizonte/MG – CEP 30320-765"
          value={data.cidade}
          onChange={(e) => update("cidade", e.target.value)}
          className="bg-card border-border"
        />
      </div>
    </div>
  );
};

export default SignatureForm;
