import dotenv from "dotenv";

dotenv.config();

/**
 * Returns the value of an environment variable.
 * Throws an error if the variable is missing.
 */
function requiredEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(
            `❌ Missing required environment variable: ${name}`
        );
    }

    return value;
}

export const env = {
    // Server
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV || "development",

    // Database
    MONGODB_URI: requiredEnv("MONGODB_URI"),

    // JWT Access Token
    ACCESS_TOKEN_SECRET: requiredEnv("ACCESS_TOKEN_SECRET"),
    ACCESS_TOKEN_EXPIRES_IN: requiredEnv("ACCESS_TOKEN_EXPIRES_IN"),

    // JWT Refresh Token
    REFRESH_TOKEN_SECRET: requiredEnv("REFRESH_TOKEN_SECRET"),
    REFRESH_TOKEN_EXPIRES_IN: requiredEnv("REFRESH_TOKEN_EXPIRES_IN"),
} as const;