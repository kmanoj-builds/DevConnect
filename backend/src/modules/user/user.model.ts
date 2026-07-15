import { model, Schema } from "mongoose"
import { IUser } from "./user.interface.js"

const userSchema = new Schema<IUser>(
    {
        // Identity
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },

        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 30,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false,
        },

        // Profile
        bio: {
            type: String,
            default: "",
            maxlength: 300,
        },

        avatar: {
            type: String,
            default: "",
        },

        coverImage: {
            type: String,
            default: "",
        },

        skills: {
            type: [String],
            default: [],
        },

        location: {
            type: String,
            default: "",
        },

        website: {
            type: String,
            default: "",
        },

        socialLinks: {
            github: {
                type: String,
                default: "",
            },

            linkedin: {
                type: String,
                default: "",
            },

            portfolio: {
                type: String,
                default: "",
            },
        },

        // Status
        isActive: {
            type: Boolean,
            default: true,
        },

        isBlocked: {
            type: Boolean,
            default: false,
        },

        lastSeen: {
            type: Date,
        },


        // Authentication
        provider: {
            type: String,
            enum: ["EMAIL", "GOOGLE", "GITHUB"],
            default: "EMAIL",
        },

        refreshToken: {
            type: String,
            select: false,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

export default model<IUser>("User", userSchema);