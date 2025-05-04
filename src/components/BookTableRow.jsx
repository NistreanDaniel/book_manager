import { Group, Button } from '@mantine/core';
import useDeleteBook from "../hooks/useDeleteBook";
import { Table } from '@mantine/core';

export default function BookTableRow({ book, setSelectedBook, setEditModalOpen, setDetailsModalOpen }) {
    const { deleteMutation, openDeleteModal } = useDeleteBook();

    return (
        <Table.Tr key={book.id}>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.year}</Table.Td>
            <Table.Td>
                <Group gap="xs">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setSelectedBook(book);
                            setDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setSelectedBook(book);
                            setEditModalOpen(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        color="red"
                        variant="outline"
                        size="sm"
                        onClick={() => openDeleteModal(book.id, book.title)}
                        loading={deleteMutation.isPending && deleteMutation.variables === book.id}
                    >
                        Delete
                    </Button>
                </Group>
            </Table.Td>
        </Table.Tr>
    );
}
