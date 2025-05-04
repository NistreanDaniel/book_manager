import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { Modal, TextInput, NumberInput, Textarea, Button, Stack, Group, Text } from '@mantine/core';
import { useBookMutations } from '../hooks/useBooks';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconEdit, IconPlus } from "@tabler/icons-react";

export default function BookForm({ opened, onClose, book }) {
    const { createMutation, updateMutation } = useBookMutations();
    const isEdit = !!book;

    const form = useForm({
        initialValues: {
            title: '',
            author: '',
            year: new Date().getFullYear(),
            description: '',
        },

        validate: {
            title: (value) => (value.trim().length < 2 ? 'Title must contain at least 2 characters' : null),
            author: (value) => (value.trim().length < 2 ? 'Author must contain at least 2 characters' : null),
            year: (value) => (
                value < 1800 || value > new Date().getFullYear()
                    ? `Year should be between 1800 and ${new Date().getFullYear()}`
                    : null
            ),
        },
    });


    useEffect(() => {
        if (isEdit) {
            form.setValues({
                title: book.title,
                author: book.author,
                year: book.year,
                description: book.description,
            });
        } else {
            form.reset();
        }
    }, [book]);

    const handleSubmit = (values) => {
        const mutation = isEdit ? updateMutation : createMutation;
        mutation.mutate({ ...values, id: book?.id }, {
            onSuccess: () => {
                console.log("values",values);
                notifications.show({
                    title: <Text fw={700}>Success!</Text>,
                    message: `${values?.title} has been ${isEdit ? 'edited' : 'created'} successfully`,
                    // message: `${book.title} has been ${isEdit ? 'edited' : 'created'} successfully`,
                    color: 'book-primary.6',
                    icon: <IconCheck size={24} />,
                });
                onClose();
                form.reset();
            }
        });
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={<Text fw={700} size="xl">{isEdit ? 'Edit book' : 'Add new book'}</Text>}
            size="lg"
            centered
        >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                    <TextInput
                        label="Book Title"
                        placeholder="Add the book title"
                        size="md"
                        required
                        {...form.getInputProps('title')}
                    />

                    <TextInput
                        label="Author"
                        placeholder="Add the author name"
                        size="md"
                        required
                        {...form.getInputProps('author')}
                    />

                    <NumberInput
                        label="Publishing Year"
                        placeholder="Select the publishing year"
                        min={1800}
                        max={new Date().getFullYear()}
                        size="md"
                        required
                        {...form.getInputProps('year')}
                    />

                    <Textarea
                        label="Description"
                        placeholder="Add a description"
                        autosize
                        minRows={3}
                        size="md"
                        {...form.getInputProps('description')}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button
                            type="submit"
                            size="md"
                            loading={createMutation.isPending || updateMutation.isPending}
                            leftSection={isEdit ? <IconEdit size={20} /> : <IconPlus size={20} />}
                        >
                            {isEdit ? 'Save changes' : 'Add book'}
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    );
}
