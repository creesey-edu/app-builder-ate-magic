import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NotificationBell } from './NotificationBell'; // Use named import

describe('NotificationBell', () => {
    it('renders without crashing', () => {
        render(<NotificationBell />);
        expect(screen.getByTestId('notification-bell')).toBeInTheDocument();
    });
});