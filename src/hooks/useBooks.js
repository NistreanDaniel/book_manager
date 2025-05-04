import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBooks, createBook, updateBook, deleteBook } from '../api/books';

export const useBooks = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: getBooks
    });
};

export const useBookMutations = () => {
    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn: createBook,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
    });

    const updateMutation = useMutation({
        mutationFn: updateBook,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
    });

    const deleteMutation = useMutation({
        mutationFn: deleteBook,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['books'] })
    });

    return { createMutation, updateMutation, deleteMutation };
};
