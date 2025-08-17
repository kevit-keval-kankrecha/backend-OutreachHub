import { EntityRepository, Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Workspace } from '../entity/workspace.entity';
import { CreateWorkspaceDto } from '../dtos/workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WorkspaceRepository {
  @InjectRepository(Workspace)
  private workSpace: Repository<Workspace>;
  async createWorkspace(dto: CreateWorkspaceDto): Promise<Workspace> {
    const existing = await this.workSpace.findOne({
      where: { name: dto.name },
    });
    if (existing) {
      throw new BadRequestException('Workspace with this name already exists.');
    }
    const workspace = this.workSpace.create(dto);
    return this.workSpace.save(workspace);
  }
}
