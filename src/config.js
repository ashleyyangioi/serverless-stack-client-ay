export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HKRW5Gud048CUlU0cWdUr53nnojvM3rnScQwoRQLeYF0YviM3YPvZnJH6OcgmtbV6kPTd9fXhOSUrlYaYyKl6Yt00xPfwUcQQ",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-ay"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://as0y72ga0m.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Ru0cFPtn3",
        APP_CLIENT_ID: "7ecrjo90amuogbpf1b6v8ese3a",
        IDENTITY_POOL_ID: "us-east-2:2a6adc64-93ad-46f0-827f-484c5964a936"
    }
};