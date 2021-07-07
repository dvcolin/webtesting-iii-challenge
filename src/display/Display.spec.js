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

    it('displays "Open" if closed prop is false', () => {
        const { queryByText } = render(<Display closed={false} />);
        expect(queryByText(/open/i)).toBeTruthy();
    })

    it('displays "Closed" if closed prop is true', () => {
        const { queryByText } = render(<Display closed={true} />);
        expect(queryByText(/closed/i)).toBeTruthy();
    })
    
    it('displays "Unlocked" if locked prop is false', () => {
        const { queryByText } = render(<Display locked={false} />);
        expect(queryByText(/unlocked/i)).toBeTruthy();
    })

    it('displays "Locked" if locked prop is true', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/locked/i)).toBeTruthy();
    })

    it('should have the "red-led" class when "locked"', () => {
        const { getByTestId } = render(<Display locked={true} />);
        expect(getByTestId('locked-display').classList.contains('red-led'));  
    })
    it('should have the "red-led" class when "closed"', () => {
        const { getByTestId } = render(<Display closed={true} />);
        expect(getByTestId('closed-display').classList.contains('red-led'));  
    })
    
    it('should have the "green-led" class when "unlocked"', () => {
        const { getByTestId } = render(<Display locked={false} />);
        expect(getByTestId('locked-display').classList.contains('green-led'));  
    })
    
    it('should have the "green-led" class when "open"', () => {
        const { getByTestId } = render(<Display closed={false} />);
        expect(getByTestId('closed-display').classList.contains('green-led'));  
    })
});