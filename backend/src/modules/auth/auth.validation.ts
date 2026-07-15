import z from "zod"

export const registerSchema = z.object({

    name: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters")
        .max(50),

    username: z
        .string()
        .trim()
        .toLowerCase()
        .min(3)
        .max(30),

    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    password: z
        .string()
        .min(6)
        .max(50)

}).strict()