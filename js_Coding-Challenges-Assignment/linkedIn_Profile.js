const regExp = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const testCases = [
    "https://www.linkedin.com/in/john-smith-123456",
    "https://www.linkedin.com/in/jane_doe",
    "https://www.linkedin.com/in/mark-sanders-abc123",
    "https://www.linkedin.com/in/invalid_url",
    "http://www.linkedin.com/in/john-doe",
    "https://www.linkedin.com/company/linkedin",
    "https://www.linkedin.com/pub/dir/?first=John&last=Doe",
    "https://www.linkedin.com/in/profileid1,profileid2",
]
testCases.forEach ((url) => {
    if (regExp.test(url)) {
        console.log(`${url} is valid`);
}
else{
    console.log(`${url} is not valid`);
}
})
