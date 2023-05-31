import React from 'react';
import { DownArrow } from "../../assets";
import { Option } from '../../type';

interface Props extends React.ComponentProps<'select'> {
    containerClassName?: string;
    options: Option[];
}

const Select: React.FC<Props> = ({ containerClassName, options, className, ...selectProps }) => {
    return (
        <div
            className={containerClassName}
        >
            <select
                className={["w-full", className].join('')}
                {...selectProps}
            >
                {options.map((o, i) => (
                    <option key={i} value={o.value}>{o.label}</option>
                ))}
            </select>
            <DownArrow />
        </div>
    );
};

export default Select;
