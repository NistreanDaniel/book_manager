import { Group, TextInput, Button } from '@mantine/core';
import { IconSearch, IconPlus } from '@tabler/icons-react';

export default function BookListControls({ searchTerm, setSearchTerm, setEditModalOpen }) {
    return (
        <Group justify="space-between" mb="xl">
            <TextInput
                placeholder="Search by title"
                leftSection={<IconSearch size={18} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                w={350}
                size="md"
                radius="xl"
            />
            <Button
                onClick={() => setEditModalOpen(true)}
                size="md"
                leftSection={<IconPlus size={20} />}
            >
                Create Book
            </Button>
        </Group>
    );
}
