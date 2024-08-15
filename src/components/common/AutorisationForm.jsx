import React from "react";
import { useForm } from "react-hook-form";

const avatarOptions = [
    { value: "avatar1", label: "Avatar 1" },
    { value: "avatar2", label: "Avatar 2" },
    { value: "avatar3", label: "Avatar 3" },
];

function AuthorizationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && <p>Name is required</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <p>Email is required</p>}
            </div>

            <div>
                <label htmlFor="avatar">Select Avatar:</label>
                <select id="avatar" {...register("avatar", { required: true })}>
                    {avatarOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.avatar && <p>Please select an avatar</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default AuthorizationForm;
