import axiosInstance from './axiosConfig'
import { Transaction } from '@/types'
import { getCategories } from './category'

export const getTransactions = async (): Promise<Transaction[]> => {
	try {
		const [transactionsResponse, categoriesResponse] = await Promise.all([axiosInstance.get('/transactions'), getCategories()])
		const transactions = transactionsResponse.data
		const categoriesMap = new Map(categoriesResponse.map(category => [category.id, category.name]))

		const enrichedTransactions = transactions.map((transaction: Transaction) => ({
			...transaction,
			categoryName: categoriesMap.get(transaction.categoryId) || 'Unknown',
		}))

		return enrichedTransactions
	} catch (error) {
		console.error('Error fetching transactions:', error)
		throw error
	}
}

export const createTransaction = async (transactionData: Transaction) => {
	try {
		const response = await axiosInstance.post('/transactions', transactionData)
		return response.data
	} catch (error) {
		console.error('Error creating transaction:', error)
		throw error
	}
}
