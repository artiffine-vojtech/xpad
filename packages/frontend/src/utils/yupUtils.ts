const formErrors = {
    required: (field: string) => `${field} field is required`,
    validLink: (field: string) => `Should be valid ${field} link`,
};

export { formErrors };
