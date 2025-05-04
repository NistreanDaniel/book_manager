import { Modal, Text, Group, Skeleton } from '@mantine/core';
import { IconBook, IconUser, IconCalendar, IconInfoCircle } from '@tabler/icons-react';

export default function BookDetailsModal({ book, opened, onClose }) {
    return (
        <Modal
            opened={opened && !!book}
            onClose={onClose}
            title={
                <Text
                    size="xl"
                    fw={700}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Book Details
                </Text>
            }
            size="lg"
            centered
        >
            {book ? (
                <>
                    <Group gap="sm" mb="md">
                        <IconBook size={20} />
                        <Text fw={500}>Title:</Text>
                        <Text>{book.title || 'Not Specified'}</Text>
                    </Group>

                    <Group gap="sm" mb="md">
                        <IconUser size={20} />
                        <Text fw={500}>Author:</Text>
                        <Text>{book.author || 'Not Specified'}</Text>
                    </Group>

                    <Group gap="sm" mb="md">
                        <IconCalendar size={20} />
                        <Text fw={500}>Year:</Text>
                        <Text>{book.year || 'Not Specified'}</Text>
                    </Group>

                    <Group gap="sm" align="flex-start">
                        <IconInfoCircle size={20} style={{ marginTop: 3 }} />
                        <Text fw={500}>Description:</Text>
                        <Text style={{ whiteSpace: 'pre-line' }}>
                            {book.description || 'Not Specified'}
                        </Text>
                    </Group>
                </>
            ) : (
                <Skeleton height={200} />
            )}
        </Modal>
    );
}
