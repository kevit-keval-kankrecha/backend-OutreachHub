import { User } from 'src/component/users/entity/users.entity';
import { UserRole } from 'src/component/users/tokens/users.tokens';
import { Workspace } from 'src/component/workspace/entity/workspace.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  Index,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('workspace_users')
@Index(['userId', 'workspaceId'], { unique: true })
export class WorkspaceUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @PrimaryColumn('uuid')
  userId: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.id)
  @JoinColumn({ name: 'workspaceId' })
  workspace?: Workspace;

  @PrimaryColumn('uuid')
  workspaceId: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
