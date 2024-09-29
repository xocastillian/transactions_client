import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { TransactionForm } from '../Form/Form'
import { useCreateTransaction } from '@/hooks/useCreateTransactions'
import { CreateTransaction } from '@/types'

interface ModalTransactionProps {
	onSuccess: () => void // Добавляем пропс
}

const ModalTransaction: React.FC<ModalTransactionProps> = ({ onSuccess }) => {
	const { submitTransaction, loading, error } = useCreateTransaction()
	const [open, setOpen] = useState(false)

	const handleSubmit = async (data: CreateTransaction) => {
		await submitTransaction(data)
		if (!error) {
			onSuccess() // Вызываем функцию обновления
			setOpen(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>Отправить</DialogTrigger>
			<DialogContent>
				{error && <p>{error}</p>}
				{loading && <p>Загрузка...</p>}
				<DialogHeader>
					<DialogTitle>Новая транзакция</DialogTitle>
				</DialogHeader>
				<TransactionForm onSubmit={handleSubmit} />
			</DialogContent>
		</Dialog>
	)
}

export default ModalTransaction
