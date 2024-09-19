#  Brain Agricultura 🇧🇷


## Estrutura do Projeto
*  **Backend:** Node.js com TypeScript, Postgres para armazenar os dados, Jest para testes.

## Requisitos
* Node.js v14+ e npm v6+

## Configuração e Execução do Backend
* Clonando o repositpotório
```bash
git clone https://github.com/morella12/brain-agriculture
cd brain-agriculture
```

* Instalar Dependências
```bash
npm install
```
ou
```bash
yarn install
```
* Executando
```bash
npm run dev
```
ou
```bash
yarn dev
```

* Executando os Testes
```bash
npm test
```
ou
```bash
yarn test
```

* Rotas internas

* Rotas externas


# Brain Agricultura 🇺🇸

## Project Structure
* **Backend:** Node.js with TypeScript, Postgres for data storage, Jest for testing.

## Requirements
* Node.js v14+ and npm v6+

## Backend Setup and Execution

### Cloning the Repository
```bash
git clone https://github.com/morella12/brain-agriculture
cd brain-agriculture
```

* Installing Dependencies
```bash
npm install
```
or
```bash
yarn install
```
* Running the Backend
```bash
npm run dev
```
or
```bash
yarn dev
```

* Running Tests
```bash
npm test
```
or
```bash
yarn test
```

# API Endpoints

### GetProducers (GET)

- **Endpoint**: `http://localhost:3000/api/producers`
- **Método**: `GET`

#### Exemplo de Request
```bash
GET http://localhost:3000/api/producers
```

### PostProducer (POST)

- **Endpoint**: `http://localhost:3000/api/producers`
- **Método**: `POST`

#### Exemplo de Request
```bash
POST http://localhost:3000/api/producers
```
```bash
{
  "documentId": "276.510.910-94",
  "nameProducer": "John Doe",
  "nameFarm": "Fazenda Sol Nascente",
  "city": "Cidade 1",
  "state": "MG",
  "totalArea": 100.5,
  "arableArea": 60.0,
  "vegetationArea": 40.5,
  "cultivatedCrops": "Soja"
}
```

### DeleteProducer (DELETE)

- **Endpoint**: `http://localhost:3000/api/producers/:id`
- **Método**: `DELETE`

#### Exemplo de Request
```bash
DELETE http://localhost:3000/api/producers/ad5de091-8f9b-4adc-b4ed-d1b9ee7acbde
```
### EditProducer (PUT)

- **Endpoint**: `http://localhost:3000/api/producers/:id`
- **Método**: `PUT`

#### Exemplo de Request
```bash
PUT http://localhost:3000/api/producers/fbac3dda-834c-4e30-a0cd-f08b4df5332a
```
```bash
{
  "documentId": "20.619.660/0001-62",
  "nameProducer": "Lucas Silva",
  "nameFarm": "Fazenda Vale Verde",
  "city": "Cidade 8",
  "state": "SC",
  "totalArea": 140.0,
  "arableArea": 90.0,
  "vegetationArea": 50.0,
  "cultivatedCrops": ["Café"]
}
```