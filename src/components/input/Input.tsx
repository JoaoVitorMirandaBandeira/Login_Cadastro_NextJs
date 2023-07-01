import React, { ChangeEvent } from "react";
import Style from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, value, onChange, ...props }: InputProps) {
    return (
        <input
            className={Style.input}
            type={type}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}
