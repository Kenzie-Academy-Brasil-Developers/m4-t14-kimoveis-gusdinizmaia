import { number, string, z } from "zod";

const scheduleSchema = z.object({
  id: number(),
  date: string(),
  hour: string(),
  realEstateId: number().int(),
  userId: number().int(),
});

export { scheduleSchema };
