import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal" })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: string;

  @OneToOne(() => Address, (address) => address.realEstate, { nullable: false })
  @JoinColumn()
  @Unique(["address"])
  address: Address;

  @ManyToOne(() => Category, (category) => category.realEstates)
  @JoinColumn({ name: "categoryId" })
  category: number;

  @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
  schedules: Schedule[];
}

export { RealEstate };
