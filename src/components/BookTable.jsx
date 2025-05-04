import { Table } from '@mantine/core';

export default function BookTable({ children }) {
    return (
        <Table.ScrollContainer minWidth={800}>
            <Table highlightOnHover striped>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Author</Table.Th>
                        <Table.Th>Year</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {children}
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}
