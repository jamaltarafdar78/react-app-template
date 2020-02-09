import * as React from "react";
import { render, RenderResult,fireEvent } from '@testing-library/react';
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

    it('when user presses increment button, display of count is incremented', async () => {
        const { getByTestId, findByText } = renderResult;
        const countIncrementButton= getByTestId('incrementCount');
        fireEvent.click(countIncrementButton);

         // Wait for page to update with query text
        const countDisplayIncremented = await findByText('Count: 1');
        expect(countDisplayIncremented).toBeDefined();

    });

    it('when user presses increment button more than 9 times, display of count uses warning style', async () => {
        const { getByTestId, findByText } = renderResult;
        const countIncrementButton= getByTestId('incrementCount');
        
        for(let i:number = 0; i<10; i++){
            fireEvent.click(countIncrementButton);
        }
         // Wait for page to update with query text
        const countDisplayIncremented = await findByText('Count: 10');
        expect(countDisplayIncremented).toBeDefined();
        expect(countDisplayIncremented.className).toBe('warning');

    });

    it('when use presses decrement button, display of count is decremented', async() => {
        const { getByTestId, findByText } = renderResult;
        const countDecrementButton= getByTestId('decrementCount');
        fireEvent.click(countDecrementButton);

         // Wait for page to update with query text
        const countDisplayDecremented = await findByText('Count: -1');
        expect(countDisplayDecremented).toBeDefined();
    })
})


