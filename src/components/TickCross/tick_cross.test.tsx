import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TickCross } from '.';



describe('TickCross', () => {
    let tick_cross: RenderResult;
    it("shows a loading spinner", () => {
        tick_cross = render(<TickCross value={1} loading={true}  />);
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa-spinner');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa-spin');
    })
     it("shows a check mark in green", () => {
        tick_cross = render(<TickCross value={1} loading={false}  />);
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa-check');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('text-success');
    })
     it("shows a cross mark in red", () => {
        tick_cross = render(<TickCross value={0} loading={false}  />);
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('fa-remove');
        expect(tick_cross.getByTestId('tick_cross')).toHaveClass('text-danger');
    })
    it("shows does not show anything", () => {
        tick_cross = render(<TickCross value={null} loading={false}  />);
        expect(tick_cross.getByTestId('tick_cross').classList.contains('fa')).toBe(false);
    })

});
