export interface Credit {
  id: string;
  clienteId: string;
  monto: number;
  tasaInteres: number;
  fechaInicio: Date;
  duracionMeses: number;
  confiabilidad: number;
}
