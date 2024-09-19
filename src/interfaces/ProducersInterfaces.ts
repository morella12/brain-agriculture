export enum Crops {
  SOJA = 'Soja',
  MILHO = 'Milho',
  ALGODAO = 'Algodão',
  CAFE = 'Café',
  CANADEACUCAR = 'Cana de Açucar'
};

export interface ProducersInterface extends Document {
  documentId: string;
  nameProducer: string;
  nameFarm: string;
  city: string;
  state: string;
  totalArea: string;
  arableArea: string;
  vegetationArea: string;
  cultivatedCrops: Crops;
};
