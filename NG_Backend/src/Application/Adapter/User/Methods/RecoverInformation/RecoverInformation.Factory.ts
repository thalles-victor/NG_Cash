import { UserRepositoryWithPrisma } from "../../../../../Infra/Repositories/Prisma/UserRepository";
import { RecoverInformationController } from "./RecoverInformation.Controller";
import { RecoverInformationService } from "./RecoverInformation.Service";

const userRepository = new UserRepositoryWithPrisma();

export const recoverInformationController = new RecoverInformationController(
  new RecoverInformationService(userRepository)
);
