import { useState } from 'react'
import { createTransaction } from '@/api/transactions'
import { CreateTransaction } from '@/types'

export const useCreateTransaction = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const submitTransaction = async (data: CreateTransaction) => {
		setLoading(true)
		setError(null)
		try {
			const response = await createTransaction(data)
			console.log('Транзакция создана:', response)
		} catch (err) {
			setError('Ошибка при создании транзакции')
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return { submitTransaction, loading, error }
}
