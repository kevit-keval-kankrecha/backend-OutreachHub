import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dtos/workspace.dto';
import { Workspace } from './entity/workspace.entity';
import { WorkspaceRepository } from './repository/workspace.repository';

@Injectable()
export class WorkSpaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}
  async createWorkspace(dto: CreateWorkspaceDto): Promise<Workspace> {
   const workspace = await this.workspaceRepository.createWorkspace(dto)
   return workspace
  }
}
