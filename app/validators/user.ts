import vine from '@vinejs/vine'

export const createUserValidation = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(5),
        email: vine.string().unique(async (db, value, field) => {
            const user = await db
                .from('users')
                .where('email', value)
                .first()
            return !user
        }),
        password: vine.string().minLength(8),
    })
)