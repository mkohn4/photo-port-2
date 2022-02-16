import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../index'

afterEach(cleanup);

describe('Contact component', () =>{
    //baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('h1 text content = contact me', () => {
        const {getByText} = render(<Contact/>);
        expect(getByText('Contact Me')).toHaveTextContent('Contact Me');

    });

    it('data-testid attr button = submit', () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId('button')).toHaveAttribute('type, submit');

    });



});