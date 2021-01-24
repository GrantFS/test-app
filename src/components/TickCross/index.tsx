import React from 'react';

interface TickCrossProps {
    value: number | null;
    loading: boolean;
 }


const TickCross : React.FC <TickCrossProps> = ({ value, loading = false }) => {
    let classes= '';

    if (loading) {
        classes = 'fa fa-spinner fa-spin';
    } else if(value === null) {
        classes = '';
    } else if(value === 0) {
        classes = 'fa fa-remove text-danger';
    } else if(value === 1) {
        classes = 'fa fa-check text-success';
    }
    return (<span data-testid="tick_cross" className={classes}></span>);
}
export { TickCross };
