import { z } from 'zod'

export const categorySchema = z.object({
	name: z.string().min(1, 'Имя категории не должно быть пустым'),
})

export type CategoryInput = z.infer<typeof categorySchema>
