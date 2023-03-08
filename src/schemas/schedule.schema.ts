import { number, string, z, ZodType } from "zod";

const dateFormat = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
const hourFormat = /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/;

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
  userId: number(),
});

export { scheduleCreateSchema, scheduleSchema };
