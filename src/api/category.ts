import { Category } from '@/types'
import axiosInstance from './axiosConfig'

export const getCategories = async (): Promise<Category[]> => {
	try {
		const response = await axiosInstance.get('/category')
		return response.data
	} catch (error) {
		console.error('Error fetching categories:', error)
		throw error
	}
}
