import { Module } from "@nestjs/common";
import { WorkSpaceController } from "./workspace.controller";
import { WorkSpaceService } from "./workspace.service";

@Module({
    imports:[],
    controllers:[WorkSpaceController],
    providers:[WorkSpaceService],
    exports:[]
})
export class WorkSpaceModule {}