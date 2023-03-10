import { number, string, z, ZodType } from "zod";
import { realEstateSchema } from "./realEstate.schema";
import { returnUserSchema, userSchema } from "./user.schema";

const hourFormat = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
const dateFormat = /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/;

const validateFormat = (format: any, message: string): ZodType<string> =>
  string().regex(format, {
    message: message,
  });

const scheduleCreateSchema = z.object({
  date: validateFormat(dateFormat, "data errada"),
  hour: validateFormat(hourFormat, "hora errada"),
  realEstateId: number().int(),
});

const scheduleSchema = scheduleCreateSchema.extend({
  id: z.number(),
  userId: returnUserSchema,
  realEstateId: realEstateSchema,
});

export { scheduleCreateSchema, scheduleSchema };
