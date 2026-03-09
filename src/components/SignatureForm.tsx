import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FILIAIS_DATA: Record<string, { endereco: string; cidade: string }> = {
  "1. Matriz - CSC": { endereco: "BR-356, 7515 – Belvedere", cidade: "Belo Horizonte/MG – CEP 30320-765" },
  "2. Só Marcas BH Outlet": { endereco: "BR-356, 7515 – Belvedere", cidade: "Belo Horizonte/MG – CEP 30320-765" },
  "3. Só Marcas Contagem": { endereco: "Av. Cardeal Eugênio Pacelli, 1336 – Cidade Industrial", cidade: "Contagem/MG – CEP 32210-002" },
  "4. Só Marcas Guarulhos": { endereco: "Rod. Pres. Dutra, KM 222 - 3 – Jardim Santa Francisca", cidade: "Guarulhos/SP – CEP 07034-000" },
  "5. Shopping Oiapoque BH": { endereco: "Av. Oiapoque, 156 – Centro", cidade: "Belo Horizonte/MG – CEP 30111-070" },
  "6. Shopping Oiapoque Contagem": { endereco: "Mario Vital, 168 – Eldorado", cidade: "Contagem/MG – CEP 32315-160" },
  "7. Shopping do Avião": { endereco: "Avenida Babita Camargos, 1295 – Cidade Industrial", cidade: "Contagem/MG – CEP 32210-180" },
  "8. Shopping Tupinambás": { endereco: "Rio Grande do Sul, 189 – Centro", cidade: "Belo Horizonte/MG – CEP 30170-110" },
  "9. Tupinambás Motos": { endereco: "Avenida do Contorno, 11320 – Centro", cidade: "Belo Horizonte/MG – CEP 30110-042" },
};

const FILIAIS = Object.keys(FILIAIS_DATA);

interface SignatureData {
  nome: string;
  filial: string;
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
    if (field === "filial" && FILIAIS_DATA[value]) {
      onChange({ ...data, filial: value, endereco: FILIAIS_DATA[value].endereco, cidade: FILIAIS_DATA[value].cidade });
    } else {
      onChange({ ...data, [field]: value });
    }
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-sm font-medium text-foreground">
          Nome completo
        </Label>
        <Input
          id="nome"
          placeholder="Mário Valadares de Resende Costa"
          value={data.nome}
          onChange={(e) => update("nome", e.target.value)}
          className="bg-card border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="filial" className="text-sm font-medium text-foreground">
          Filial
        </Label>
        <Select value={data.filial} onValueChange={(value) => update("filial", value)}>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="Selecione a filial" />
          </SelectTrigger>
          <SelectContent>
            {FILIAIS.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="cargo" className="text-sm font-medium text-foreground">
          Cargo
        </Label>
        <Input
          id="cargo"
          placeholder="Presidente"
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
          placeholder="31.9.9999-9999"
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
          placeholder="mario.valadares@gpmv.com.br"
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
