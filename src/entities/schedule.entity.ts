import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule, {
    nullable: false,
  })
  @JoinColumn({ name: "realEstateId" })
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedule, { nullable: false })
  @JoinColumn({ name: "userId" })
  user: User;
}

export { Schedule };
