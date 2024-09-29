import { z } from 'zod'

export const createTransactionSchema = z.object({
	author: z.string().min(2, 'Автор обязателен'),
	sum: z.number().min(100, 'Сумма должна быть больше 100'),
	comment: z.string().optional(),
	categoryId: z
		.number({
			required_error: 'Необходимо выбрать категорию',
		})
		.int()
		.positive('ID категории должен быть положительным числом'),
})

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>
