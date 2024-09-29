import { Transaction } from '@/types'
import axiosInstance from './axiosConfig'
import { CreateTransactionInput, createTransactionSchema } from '@/validators/transactionValidator'
import { z } from 'zod'

export const getTransactions = async (): Promise<Transaction[]> => {
	try {
		const response = await axiosInstance.get('/transactions')
		return response.data
	} catch (error) {
		console.error('Error fetching transactions:', error)
		throw error
	}
}

export const createTransaction = async (transactionData: CreateTransactionInput): Promise<Transaction> => {
	try {
		createTransactionSchema.parse(transactionData)

		const response = await axiosInstance.post('/transactions', transactionData)
		return response.data
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error('Validation errors:', error.errors)
			throw new Error('Validation failed')
		}
		console.error('Error creating transaction:', error)
		throw error
	}
}
