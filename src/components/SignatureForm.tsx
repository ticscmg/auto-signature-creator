import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignatureData {
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
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
          placeholder="João da Silva"
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
          placeholder="Gerente Comercial"
          value={data.cargo}
          onChange={(e) => update("cargo", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-sm font-medium text-foreground">
          Telefone
        </Label>
        <Input
          id="telefone"
          placeholder="(11) 99999-9999"
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
          placeholder="joao@gmv.com.br"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          className="bg-card border-border"
        />
      </div>
    </div>
  );
};

export default SignatureForm;
