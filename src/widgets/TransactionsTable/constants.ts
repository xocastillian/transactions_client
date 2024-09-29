import { formatDate } from '@/helpers/formatDate'
import { Transaction } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Transaction>[] = [
	{
		accessorKey: 'dateTime',
		header: 'Дата',
		cell: info => formatDate(info.getValue() as string),
	},
	{
		accessorKey: 'author',
		header: 'Автор',
	},
	{
		accessorKey: 'sum',
		header: 'Сумма',
		cell: info => `${info.getValue()} ₸`,
	},
	{
		accessorKey: 'categoryName',
		header: 'Категория',
	},
	{
		accessorKey: 'comment',
		header: 'Комментарий (не обязателен)',
	},
]
