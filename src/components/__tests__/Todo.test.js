import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';


describe('Composant Todo', () => {
    test('rendu du composant Todo', () => {
        render(<Todo />);
        const heading = screen.getByText(/liste de tâches/i);
        expect(heading).toBeInTheDocument();
    });

    test('permet aux utilisateurs d\'ajouter une tâche', () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText(/ajouter une tâche/i);
        const button = screen.getByText(/ajouter tâche/i);

        fireEvent.change(input, { target: { value: 'Apprendre les tests React' } });
        fireEvent.click(button);

        expect(screen.getByText(/apprendre les tests react/i)).toBeInTheDocument();
    });

    test('ne pas ajouter une tâche vide', () => {
        render(<Todo />);

        const button = screen.getByText(/ajouter tâche/i);
        fireEvent.click(button);

        expect(screen.queryByRole('listitem')).toBeNull();
    });
});


