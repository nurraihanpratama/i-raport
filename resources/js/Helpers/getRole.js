import { usePage } from "@inertiajs/react";

export const userRole = () => {
    return usePage().props.auth.user;
};
