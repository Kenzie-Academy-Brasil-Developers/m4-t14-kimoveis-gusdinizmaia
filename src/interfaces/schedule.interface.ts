import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  scheduleCreateSchema,
  scheduleSchema,
} from "../schemas/schedule.schema";

type iSchedule = z.infer<typeof scheduleSchema>;
type iScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export { iSchedule, iScheduleCreate };
