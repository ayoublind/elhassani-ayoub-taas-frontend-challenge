export const ErrorMessage = ({ response = null }) => {
    let message = "Opps, something went wront !";
    if (response && response.data && response.data.errors)
        message = response.data.errors.message;
    return Promise.reject(message);
};
