import React from "react";
import {Box, Button, InputBase} from "@mantine/core";
import {useForm, UseFormReturnType} from "@mantine/form";
import {handleSubmit} from "../../api/fetch-data";

interface FormProps {
    setValue: (value: string) => void
}
const Form: React.FC<FormProps> = ({setValue}) => {
    const form = useForm({
        initialValues: {
            url: '',
        },
    });
    const onSubmit = async (value: {url: string}) => {
        await handleSubmit(value)
        setValue(value.url)
        form.reset()
    }

    return (
        <Box mx="auto">
            <form style={{display: "flex", alignItems: "end", width: 620, margin: "auto"}}
                  onSubmit={form.onSubmit(onSubmit)}
            >
                <InputBase label="Write URL" sx={{width: "100%"}}
                           labelProps={{style: {color: "white"}}}
                           {...form.getInputProps('url')}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export {Form};
