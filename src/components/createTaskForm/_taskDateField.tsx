import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IDateField } from "./interfaces/IDateField";
import PropTypes from "prop-types";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
    const {
        value = new Date(),
        disabled = false,
        onChange = (date) => console.log(date),
    } = props;
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Task Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={onChange}
                    disabled={disabled}
                />
            </LocalizationProvider>
        </>
    );
};

TaskDateField.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};
