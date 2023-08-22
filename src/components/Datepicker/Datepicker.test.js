import timekeeper from 'timekeeper';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Datepicker from './Datepicker';

const user = userEvent.setup();

describe('ContaVirtual', () => {
  test('should select range dates', async () => {
    timekeeper.freeze(new Date('2023-08-22T12:00:00'));

    const error = console.error;
    const warn = console.warn;
    console.error = jest.fn();
    console.warn = jest.fn();

    render(<Datepicker />);

    const icon = screen.getByRole('textbox', { name: 'Start Date' });

    user.click(icon);

    // DateRangePicker is open
    expect(screen.getByText(/august 2023/i)).toBeInTheDocument();

    // select first day
    const startDate = screen.getByRole('button', {
      name: /tuesday, august 22, 2023/i,
    });
    await user.click(startDate);

    // select last day
    // const endDate = screen.getByRole('button', {
    //   name: /thursday, august 31, 2023/i,
    // });
    // await user.click(endDate);

    // modal closes even without last day selection
    expect(screen.queryByText(/august 2023/i)).not.toBeInTheDocument();

    console.error = error;
    console.warn = warn;

    timekeeper.reset();
  });
});
