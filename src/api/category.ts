import axiosInstance from './axiosConfig'
import { Category } from '@/types'

export const getCategories = async (): Promise<Category[]> => {
	try {
		const response = await axiosInstance.get('/category')
		return response.data
	} catch (error) {
		console.error('Error fetching categoryes:', error)
		throw error
	}
}

export const createCategory = async (categoryData: Category) => {
	try {
		const response = await axiosInstance.post('/category', categoryData)
		return response.data
	} catch (error) {
		console.error('Error creating categoryes:', error)
		throw error
	}
}
