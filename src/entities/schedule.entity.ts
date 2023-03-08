import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "date" })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules, {
    nullable: false,
  })
  @JoinColumn()
  realEstate: number;

  @ManyToOne(() => User, (user) => user.schedules, { nullable: false })
  @JoinColumn()
  user: number;
}

export { Schedule };
