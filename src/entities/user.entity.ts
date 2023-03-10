import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
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

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updateAt: string;

  @DeleteDateColumn({ type: "date" })
  deleteAt: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const withoutEncrypted = getRounds(this.password);
    if (!withoutEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
