import { getTransactions } from '@/api/transactions'
import { Transaction } from '@/types'
import { TransactionsTable } from '@/widgets/TransactionsTable/TransactionsTable'
import React, { useEffect, useState } from 'react'

const TransactionsPage: React.FC = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const data = await getTransactions()
				setTransactions(data)
				setLoading(false)
				console.log(data)
			} catch {
				setError('Failed to fetch transactions.')
				setLoading(false)
			}
		}

		fetchTransactions()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return <TransactionsTable data={transactions} />
}

export default TransactionsPage
