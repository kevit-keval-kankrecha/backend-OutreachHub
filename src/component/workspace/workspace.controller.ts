import { Body, Controller, Post } from "@nestjs/common";
import { Workspace } from "./entity/workspace.entity";
import { CreateWorkspaceDto } from "./dtos/workspace.dto";
import { WorkSpaceService } from "./workspace.service";

@Controller('workspaces')
export class WorkSpaceController{
    constructor(private readonly workSpaceService:WorkSpaceService){}
    
  @Post()
  async create(@Body() dto: CreateWorkspaceDto): Promise<Workspace> {
    return this.workSpaceService.createWorkspace(dto);
  }
}