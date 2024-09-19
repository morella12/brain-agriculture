import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Producer } from "../entity/producers.entity";
import { documentValidation } from "./Utils";

const producersRepo = AppDataSource.getRepository(Producer);

export const listProducers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const producers = await producersRepo.find();
    res.json(producers);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createProducer = async (req: Request, res: Response) => {
  const { documentId, totalArea, arableArea, vegetationArea } = req.body;
  const documentIsValid = await documentValidation(documentId);
  const areaIsValid = await validationArea(
    arableArea,
    vegetationArea,
    totalArea
  );

  if (!documentIsValid) {
    return res.status(400).json({ message: "Missing documentId" });
  }

  if (!areaIsValid) {
    return res
      .status(400)
      .json({
        message:
          "Invalid area values. Total area must be greater than arable area and vegetation area",
      });
  }

  try {
    const newProducers = producersRepo.create({ ...req.body });
    await producersRepo.save(newProducers);
    res.status(201).json(newProducers);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProducer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { documentId, totalArea, arableArea, vegetationArea } = req.body;
  const documentIsValid = await documentValidation(documentId);
  const areaIsValid = await validationArea(
    arableArea,
    vegetationArea,
    totalArea
  );

  if (!documentIsValid) {
    return res.status(400).json({ message: "Missing documentId" });
  }

  if (!areaIsValid) {
    return res
      .status(400)
      .json({
        message:
          "Invalid area values. Total area must be greater than arable area and vegetation area",
      });
  }

  try {
    const producer = await producersRepo.findOneBy({ id });

    if (!producer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    producersRepo.merge(producer, { ...req.body });

    await producersRepo.save(producer);
    res.json(producer);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProducer = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const producer = await producersRepo.findOneBy({ id });

    if (!producer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    await producersRepo.remove(producer);
    res.status(204).json({ message: "Successfully removed producer" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const validationArea = (arableArea, vegetationArea, totalArea) => {
  if (arableArea + vegetationArea > totalArea) {
    return false;
  }
  return true;
};
