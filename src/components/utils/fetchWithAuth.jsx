
export const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('jwtToken');
    
    if (!options.headers) {
        options.headers = {};
    }

    if (token) {
        if (isTokenExpired(token)) {
            alert("Session expired. Please log in again.");
            localStorage.removeItem('jwtToken');
            window.location.href = '/login';
            return;
        }

        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(url, options);
};

const isTokenExpired = (token) => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    const now = Math.floor(Date.now() / 1000);

    return now >= expiry;
};
