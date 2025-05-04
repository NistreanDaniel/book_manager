import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useBookMutations } from './useBooks';
import { IconTrash, IconAlertCircle } from '@tabler/icons-react';
import { Text } from '@mantine/core';

export default function useDeleteBook() {
    const { deleteMutation } = useBookMutations();

    const openDeleteModal = (bookId, bookTitle) => {
        modals.openConfirmModal({
            title: 'Confirm deletion',
            centered: true,
            children: (
                <Text size="sm">
                   Are you sure you want to delete {bookTitle} book ?
                </Text>
            ),
            labels: { confirm: 'Delete', cancel: 'Cancel' },
            confirmProps: {
                color: 'red',
                loading: deleteMutation.isPending
            },
            onConfirm: () => handleDelete(bookId,bookTitle),
        });
    };

    const handleDelete = (bookId,bookTitle) => {
        deleteMutation.mutate(bookId, {
            onSuccess: () => {
                notifications.show({
                    title: <Text fw={700}>Successfully deleted !</Text>,
                    message: `${bookTitle} has been deleted successfully`,
                    color: 'red',
                    icon: <IconTrash size={20} />,
                    autoClose: 2000,
                });
            },
            onError: (error) => {
                notifications.show({
                    title: <Text fw={700}>Eroare!</Text>,
                    message: error.message || 'An error occurred while deleting the book',
                    color: 'red',
                    icon: <IconAlertCircle size={20} />,
                });
            }
        });
    };

    return { deleteMutation, openDeleteModal };
}
