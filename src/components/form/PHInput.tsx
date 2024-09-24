import { Input } from "antd";
import { Controller } from "react-hook-form"

type TPHInputProps = {
    label?: string,
    type: string,
    name: string
}

export default function PHInput({ label, type, name }: TPHInputProps) {
    
    return (
        <div style={{marginBottom: "15px"}}>
            {label ? label : null}
            <Controller
                name={name}
                render={({field}) => (
                    <Input type={type} id={name} {...field} />
                )}
            />
        </div>
    )
}
