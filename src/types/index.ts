export interface Transaction {
	id: number
	dateTime: string
	author: string
	sum: number
	comment: string | null
	categoryId: number
	categoryName?: string
}

export interface Category {
	id: number
	name: string
}
