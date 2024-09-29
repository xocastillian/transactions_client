import { formatDate } from '@/helpers/formatDate'
import { Transaction } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Transaction>[] = [
	{
		accessorKey: 'dateTime',
		header: 'Date',
		cell: info => formatDate(info.getValue() as string),
	},
	{
		accessorKey: 'author',
		header: 'Author',
	},
	{
		accessorKey: 'sum',
		header: 'Amount',
		cell: info => `${info.getValue()} ₸`,
	},
	{
		accessorKey: 'categoryName',
		header: 'Category',
	},
	{
		accessorKey: 'comment',
		header: 'Comment',
	},
]
