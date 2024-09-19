import {
  createProducer,
  updateProducer,
  deleteProducer,
  listProducers,
} from "../controllers/ProducersController";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { documentValidation } from "../controllers/Utils";

jest.mock("../data-source");
jest.mock("../controllers/Utils");

const producersRepo = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  merge: jest.fn(),
  remove: jest.fn(),
};

AppDataSource.getRepository = jest.fn().mockReturnValue(producersRepo);

describe("Producer Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  describe("createProducer", () => {
    it("should return 400 if document is invalid", async () => {
      (documentValidation as jest.Mock).mockResolvedValue(false);

      req.body = {
        documentId: "invalid",
        totalArea: 100,
        arableArea: 40,
        vegetationArea: 30,
      };

      await createProducer(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Missing documentId" });
    });

    it("should return 400 if area validation fails", async () => {
      (documentValidation as jest.Mock).mockResolvedValue(true);

      req.body = {
        documentId: "valid",
        totalArea: 100,
        arableArea: 80,
        vegetationArea: 30,
      };

      await createProducer(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message:
          "Invalid area values. Total area must be greater than arable area and vegetation area",
      });
    });
  });
});
