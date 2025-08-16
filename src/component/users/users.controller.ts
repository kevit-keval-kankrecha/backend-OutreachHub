import { Controller } from "@nestjs/common";
import { ROUTE_NAMESPACES } from "../../config/tokens/route.tokens";

@Controller(ROUTE_NAMESPACES.USERS)
export class UserController{
    
}