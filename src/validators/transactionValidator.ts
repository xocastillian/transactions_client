import { z } from 'zod'

export const transactionSchema = z.object({
	author: z.string().min(1, 'Автор не должен быть пустым'),
	sum: z.number().positive('Сумма должна быть положительным числом'),
	comment: z.string().optional(),
	categoryId: z.number().int('ID категории должен быть целым числом').positive('ID категории должен быть положительным числом'),
})

export type TransactionInput = z.infer<typeof transactionSchema>
