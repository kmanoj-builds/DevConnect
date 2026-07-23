import { model, Schema } from "mongoose"
import { IUser } from "./user.interface.js"
import bcrypt from "bcryptjs"
import jwt, { type SignOptions} from "jsonwebtoken"
import { env } from "../../config/env.js"

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

userSchema.pre("save", async function () {
    
    if (!this.isModified) {
        return 
    }

    this.password = await bcrypt.hash(this.password, 10)

})

// compare passord
userSchema.methods.comparePassword = function (candidatePassword: string) {
    return bcrypt.compare(
        candidatePassword,
        this.password
    );
};

// generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            username: this.username,
        },
        env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
        }
    );
};

// generate refresh token
userSchema.methods.generateRefreshToken = function () {

    return jwt.sign(
        {
            id: this._id,
        },
        env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
        }
    );
}

export default model<IUser>("User", userSchema);