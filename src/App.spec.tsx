import * as React from "react";
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
        renderResult = render(<App/>);
    });

    it('welcome element should be rendered', () => {
        let welcomeElement = renderResult.getByTestId('welcome');
        expect(welcomeElement).toBeTruthy();
    })

    it('count should be rendered and initialised at correct value', () => {
        let countElement = renderResult.getByTestId('count');
        expect(countElement).toBeTruthy();
        expect(countElement.innerHTML).toBe('Count: 0');
    })


})


