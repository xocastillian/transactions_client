import { useEffect, useState } from 'react'
import { getTransactions } from '@/api/transactions'
import { Transaction } from '@/types'

export const useGetTransactions = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const fetchTransactions = async () => {
		setLoading(true)
		setError(null)
		try {
			const data = await getTransactions()
			setTransactions(data)
		} catch {
			setError('Не удалось получить транзакции.')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTransactions()
	}, [])

	return { transactions, loading, error, fetchTransactions }
}
