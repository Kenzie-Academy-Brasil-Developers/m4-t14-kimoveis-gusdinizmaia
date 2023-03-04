import { z } from "zod";
import { scheduleSchema } from "../schemas/schedule.schema";

type iSchedule = z.infer<typeof scheduleSchema>;

export { iSchedule };
