import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Controls from './Controls'

describe('<Controls />', () => {
    //Snapshot test
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('should toggle open/close when open button is clicked', () => {
        const { getByTestId } = render(<Controls />);
        const openButton = getByTestId('open-button');
        
        fireEvent.click(openButton);
    })
    
    it('should toggle lock/unlock when lock button is clicked', () => {
        const { getByTestId } = render(<Controls />);
        const lockButton = getByTestId('lock-button');
        
        fireEvent.click(lockButton);
    })
});