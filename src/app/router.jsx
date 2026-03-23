import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import ExplorePage from '../pages/ExplorePage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import TicTacToeFactsPage from '../pages/Tic-Tac-ToeFactsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'explore',
        element: <ExplorePage />,
      },
      {
        path: 'facts',
        element: <TicTacToeFactsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
