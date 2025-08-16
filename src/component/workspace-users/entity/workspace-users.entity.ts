import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { User } from '../../users/entity/users.entity';
import { Workspace } from '../../workspace/entity/workspace.entity';
import { WorkspaceUserRole } from '../tokens/workspace-users.tokens';

@Entity('workspace_users')
@Unique(['user', 'workspace'])
export class WorkspaceUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.workspaceUsers)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Workspace, (workspace) => workspace.workspaceUsers)
  @JoinColumn({ name: 'workspaceId' })
  workspace: Workspace;

  @Column({ type: 'enum', enum: WorkspaceUserRole })
  role: WorkspaceUserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
