import { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import BookListHeader from './BookListHeader';
import BookListControls from './BookListControls';
import BookTable from './BookTable';
import BookTableRow from './BookTableRow';
import BookForm from './BookForm';
import BookDetailsModal from "./BookDetailsModal";

export default function BookList() {
    const { data: books } = useBooks();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const filteredBooks = books?.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{
            maxWidth: 1800,
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: 'var(--mantine-color-gray-0)'
        }}>
            <BookListHeader />

            <BookListControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setEditModalOpen={setEditModalOpen}
            />
            <BookDetailsModal
                book={selectedBook}
                opened={detailsModalOpen}
                onClose={() => setDetailsModalOpen(false)}
            />

            <BookTable>
                {filteredBooks?.map(book => (
                    <BookTableRow
                        key={book.id}
                        book={book}
                        setSelectedBook={setSelectedBook}
                        setEditModalOpen={setEditModalOpen}
                        setDetailsModalOpen={setDetailsModalOpen}
                    />
                ))}
            </BookTable>

            <BookForm
                opened={editModalOpen}
                onClose={() => {
                    setEditModalOpen(false);
                    setSelectedBook(null);
                }}
                book={selectedBook}
            />
        </div>
    );
}
