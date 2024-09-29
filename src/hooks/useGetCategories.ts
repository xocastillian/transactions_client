import { useEffect, useState } from 'react'
import { Category } from '@/types'
import { getCategories } from '@/api/category'

export const useGetCategories = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const fetchedCategories = await getCategories()
				setCategories(fetchedCategories)
			} catch (error) {
				console.error('Не удалось получить категории:', error)
				setError('Не удалось получить категории.')
			} finally {
				setLoading(false)
			}
		}

		fetchCategories()
	}, [])

	return { categories, loading, error }
}
