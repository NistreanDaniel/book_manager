// src/App.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BookList from './components/BookList';
import '@mantine/core/styles.css';
import {ModalsProvider} from "@mantine/modals"; // Adaugă acest import

const theme = createTheme({
    colors: {
        'book-primary': [
            '#f0f9ff',
            '#e0f2fe',
            '#bae6fd',
            '#7dd3fc',
            '#38bdf8',
            '#0ea5e9',
            '#0284c7',
            '#0369a1',
            '#075985',
            '#0c4a6e',
        ],
    },
    primaryColor: 'book-primary',
    fontFamily: 'Inter, sans-serif',
    defaultRadius: 'md',
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 60 * 1000,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <ModalsProvider/>
                <Notifications position="top-right" style={{position:'fixed', top: 20, right: 20}} />
                    <BookList />
                <ReactQueryDevtools initialIsOpen={false} />
            </MantineProvider>
        </QueryClientProvider>
    );
}
