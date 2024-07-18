import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import Input from "./index";
import {PropsInput} from "@/interfaces/Input";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        handleDateChange: {action: "dateChanged"},
        handleOnChange: {action: "changed"},
        handleSelectChange: {action: "selectChanged"},
        setShowCalendar: {action: "calendarToggled"},
        prefix: {control: "text"},
        suffix: {control: "text"},
        selectedDate: {control: "date"}
    }
} as Meta;

const Template: StoryFn<PropsInput> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
    variant: "input",
    placeholder: "Enter text",
    label: "Text Input",
    value: "",
    size: "medium"
};
export const SelectInput = Template.bind({});
SelectInput.args = {
    variant: "select",
    placeholder: "Select an option",
    label: "Select Input",
    value: "",
    size: "medium"
};

export const DateInput = Template.bind({});
DateInput.args = {
    variant: "input",
    placeholder: "Select a date",
    label: "Date Input",
    value: "",
    size: "medium",
    showCalendar: false,
    selectedDate: new Date()
};

export const InputWithPrefixAndSuffix = Template.bind({});
InputWithPrefixAndSuffix.args = {
    variant: "input",
    placeholder: "Enter text",
    label: "Input with Prefix and Suffix",
    value: "",
    size: "medium",
    prefix: "Prefix",
    suffix: "Suffix"
};
