import React from 'react'
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    //Snapshot test
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    })
});