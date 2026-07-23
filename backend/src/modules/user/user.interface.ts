export type AuthProvider =
    | "EMAIL"
    | "GOOGLE"
    | "GITHUB";

export interface ISocialLinks {
    github?: string;
    linkedin?: string;
    portfolio?: string;
}

export interface IUser {

    // Identity
    name: string;
    username: string;
    email: string;
    password: string;

    // Authentication
    provider: AuthProvider;
    refreshToken?: string;
    isVerified: boolean;

    // Profile
    bio?: string;
    avatar?: string;
    coverImage?: string;
    skills: string[];
    location?: string;
    website?: string;

    // Social
    socialLinks: ISocialLinks;

    // Status
    isActive: boolean;
    isBlocked: boolean;

    // Activity
    lastSeen?: Date;

    // Metadata
    createdAt: Date;
    updatedAt: Date;

    // utils functions
    comparePassword(candidatePassword: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
    
}
/*

interface IUser
        │
        ▼
Schema
        │
        ▼
Model
        │
        ▼
Collection
        │
        ▼
Document

*/