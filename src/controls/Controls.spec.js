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

    it('lock button should be disabled when "locked" prop is true', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        
        const lockButton = getByText(/lock gate/i)
        expect(lockButton.hasAttribute('disabled')).toBe(true)
    })

});