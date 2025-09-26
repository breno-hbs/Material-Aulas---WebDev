import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoFifa } from "@/components/GraficoFifa";
import { GraficoPizza } from "@/components/GraficoPizza";
import { Button } from "@/components/ui/button"

export default function Relatorios() {

  function handleClick(){
    alert("Clicou!");
  }
  
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <Button onClick={handleClick}>Click me</Button>
      <div className="grid grid-cols-3">
      <GraficoBarras/>
      <GraficoPizza/>
      <GraficoFifa/>
      </div>
    </div>
    
  );
}
