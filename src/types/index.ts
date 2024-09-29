export interface Category {
	id: number
	name: string
}

export interface Transaction {
	id: number
	dateTime: string
	author: string
	sum: number
	comment?: string
	categoryId: number
	category?: Category
}

export interface CreateTransaction {
	author: string
	sum: number
	comment?: string
	categoryId: number
}
