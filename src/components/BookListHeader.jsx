import { IconBook } from '@tabler/icons-react';
import { Text } from '@mantine/core';

export default function BookListHeader() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 40
        }}>
            <IconBook size={32} color="var(--mantine-color-book-primary-6)" />
            <Text
                size="xl"
                fw={700}
                c="book-primary.6"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                Book Manager
            </Text>
        </div>
    );
}
