import { Module } from "@nestjs/common";
import { WorkSpaceController } from "./workspace.controller";
import { WorkSpaceService } from "./workspace.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Workspace } from "./entity/workspace.entity";
import { WorkspaceRepository } from "./repository/workspace.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Workspace])],
    controllers:[WorkSpaceController],
    providers:[WorkSpaceService, WorkspaceRepository],
    exports:[]
})
export class WorkSpaceModule {}