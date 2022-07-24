import {render, screen} from "@testing-library/react";
import Card from "./index";

describe('<Card />', () => {
    const initialProps = {
      label: 'label',
      value: 'value',
    };
    const subject = ({label, value} = initialProps) =>
        render(<Card label={label} value={value}/>);

    it('render with initial props', () => {
        subject();
        expect( screen.getByText(initialProps.label) ).toBeInTheDocument();
        expect( screen.getByText(initialProps.value) ).toBeInTheDocument();
    });

});