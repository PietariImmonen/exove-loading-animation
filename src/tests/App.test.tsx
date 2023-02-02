import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent  from '@testing-library/user-event'
import App from '../App'
//All the tests for testing the loading animation. The tests are described what they do
  describe('All test for the loader css app', () => {

    test('Check if the loader is defined', async () => {
        render(<App />)
        const dot = screen.getAllByTitle('loading-image')

        expect(dot).toBeTruthy
    })

    test('Check if the loader coulb be made bigger', async () => {
        const wrapper = render(<App />)
        const user = userEvent.setup()
        const loader = wrapper.getByTitle('loading-image')
        //Expecting loader to have the exact size in the start
        expect(loader).toHaveStyle('width: 100px')
        expect(loader).toHaveStyle('height: 100px')
    
        const spyAnchorTag = vi.spyOn(user, 'click') 
        await user.click(screen.getByText('CHANGE THE SIZE'))
        expect(spyAnchorTag).toHaveBeenCalledOnce()
        //Expecting loader to have the exact spinning speed after clicking the button
        expect(loader).toHaveStyle('width: 150px')
        expect(loader).toHaveStyle('height: 150px')
    })

    test('Check if the animation can be made faster', async () => {
        const wrapper = render(<App />)
        const user = userEvent.setup()
        const loader = wrapper.getByTitle('loading-image')
        //Expecting loader to have the exact spinning speed in the start
        expect(loader).toHaveStyle('animationDuration: 1000ms')
    
        const spyAnchorTag = vi.spyOn(user, 'click') 
        await user.click(screen.getByText('CHANGE SPEED'))
        expect(spyAnchorTag).toHaveBeenCalledOnce()
        //Expecting loader to have the exact spinning speed after clicking the button
        expect(loader).toHaveStyle('animationDuration: 750ms')
    })

    test('Check if the color can be changed', async () => {
        const wrapper = render(<App />)
        const user = userEvent.setup()
        const loader = wrapper.getByTitle('color-ball')
        //Expecting loader to have the exact color in the start
        expect(loader).toHaveStyle('background: #7800F0')
    
        const spyAnchorTag = vi.spyOn(user, 'click') 
        await user.click(screen.getByText('CHANGE COLOR'))
        expect(spyAnchorTag).toHaveBeenCalledOnce()
        //Expecting loader to have the exact color after clicking the button
        expect(loader).toHaveStyle('background: #FFE402')
    })
  });