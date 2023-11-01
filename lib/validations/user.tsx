import * as z from 'zod'

export const userValidation = z.object({
    profile_photo: z.string().url().min(1,{message:"Profile photo is required"}),
    name: z.string().min(3,{message:"Name must be at least 3 characters long"}).max(30,{message:"Name must be at most 30 characters long"}),
    username: z.string().min(3,{message:"Username must be at least 3 characters long"}).max(30,{message:"Username must be at most 30 characters long"}),
    bio: z.string().min(3,{message:"Bio must be at least 3 characters long"}).max(100,{message:"Bio must be at most 100 characters long"})
})