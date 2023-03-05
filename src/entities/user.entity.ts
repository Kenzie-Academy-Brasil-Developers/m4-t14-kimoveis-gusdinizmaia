import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column()
  admin: boolean;

  @Column({ length: 120 })
  password: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: string;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleteAt: string | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];
}

export { User };
