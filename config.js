let config;

if (process.env.NODE_ENV === "local") {
    config = {
        $api_url: "localhost:7471",
    };
} else {
    config = {
        $api_url: "https://ancient-taiga-60345.herokuapp.com",
    };
}

export { config }
