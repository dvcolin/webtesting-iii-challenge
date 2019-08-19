import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Display from './Display'
import Controls from '../controls/Controls'

describe('<Display />', () => {
    //Snapshot test
    it('should match snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('defaults to "unlocked" and "open"', () => {
        const { getByTestId } = render(<Display />);
        
        expect(getByTestId('locked-display').textContent).toBe('Unlocked');
        
        expect(getByTestId('closed-display').textContent).toBe('Open');

    })

    it('displays "Closed" if closed prop is true and "Open" if otherwise', () => {

        const mockClosed = jest.fn();

        mockClosed.mockReturnValueOnce(true);

        const { getByTestId } = render(<Display locked={false} closed={mockClosed} />);
        expect(getByTestId('closed-display').textContent).toBe('Closed');

    })
});