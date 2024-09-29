import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { CreateTransactionInput, createTransactionSchema } from '@/validators/transactionValidator'
import { CreateTransaction } from '@/types'
import { useGetCategories } from '@/hooks/useGetCategories'

interface FormProps {
	onSubmit: (data: CreateTransactionInput) => void
}

export function TransactionForm({ onSubmit }: FormProps) {
	const form = useForm<CreateTransactionInput>({
		resolver: zodResolver(createTransactionSchema),
		defaultValues: {
			author: '',
			sum: 0,
			comment: '',
			categoryId: undefined,
		},
	})

	const { categories, loading, error } = useGetCategories()

	const onSubmitForm = (data: CreateTransactionInput) => {
		const transactionData: CreateTransaction = {
			author: data.author,
			sum: data.sum,
			comment: data.comment,
			categoryId: data.categoryId,
		}

		onSubmit(transactionData)
		form.reset()
	}

	if (loading) {
		return <p>Загрузка категорий...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmitForm)} className='space-y-8'>
				<FormField
					control={form.control}
					name='author'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Автор</FormLabel>
							<FormControl>
								<Input placeholder='Ваше имя' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='sum'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Сумма</FormLabel>
							<FormControl>
								<Input
									type='number'
									placeholder='Введите сумму'
									{...field}
									value={field.value === 0 ? '' : field.value}
									onChange={e => {
										const value = e.target.value === '' ? '' : parseFloat(e.target.value) || 0
										field.onChange(value)
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='comment'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Комментарий</FormLabel>
							<FormControl>
								<Input placeholder='Комментарий (необязательно)' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='categoryId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Категория</FormLabel>
							<FormControl>
								<Select onValueChange={value => field.onChange(Number(value))}>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Выберите категорию' />
									</SelectTrigger>
									<SelectContent>
										{categories.map(category => (
											<SelectItem key={category.id} value={category.id.toString()}>
												{category.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Отправить</Button>
			</form>
		</Form>
	)
}
