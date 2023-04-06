const obj = {
    cookieHash: '1804857833',
    cachedValue: {
        ia: {
            token_type: 'Bearer',
            access_token:
                'ya29.a0Ael9sCN3vJVMvC6CTyU8ESBQtIlyTSzBbGx6T4UJOWwdZsIySs0GrDz7_zZmJb41M1Myl-Pslir3YRsoSE5XrF4fOdGtKkdkv9DaVLXHWvrDdLV1lMzCGy1BoARDnghYQLChCZpFMyyf8iztitYUZ-mFhkL-EuEaCgYKAfwSARESFQF4udJhARmna3d_pmslhtMO7y9SIQ0166',
            scope: 'email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email',
            login_hint:
                'AJDLj6IfM-bEO_Vaou6xb7nDl_qZ1hbSHkW7H7BABJ_AfK6t9Ha770xh4AcVtCbtiyDjFsG-ABeqVvGsGGaBW_0ueBUD1CoMiIfVTDPj4I1g9AnnJvUVhQI',
            expires_in: 3599,
            id_token:
                'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjZGEzNjBmYjM2Y2QxNWZmODNhZjgzZTE3M2Y0N2ZmYzM2ZDExMWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTg1OTAwNjU2NjQyLTZmcHMycTNldjhuaXB1NmpjaDJudWg1NDhhOW9yYmQ3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTg1OTAwNjU2NjQyLTZmcHMycTNldjhuaXB1NmpjaDJudWg1NDhhOW9yYmQ3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0NzQ5NDI1Mjg0MjQ4OTc5ODcxIiwiaGQiOiJyYW5rdmV0LmNvbSIsImVtYWlsIjoibmlzaGFuQHJhbmt2ZXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJMeDR2TGR4YjdEZVdhYUlNdkd6N2VnIiwibmFtZSI6IkFyaWZ1enphbWFuIE5pc2hhbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhaa3p4eEt6dkNkYk9fN28tYjc0cV9OWFZXUkVHNGd2OFdYei1KNz1zOTYtYyIsImdpdmVuX25hbWUiOiJBcmlmdXp6YW1hbiIsImZhbWlseV9uYW1lIjoiTmlzaGFuIiwibG9jYWxlIjoiZW4tR0IiLCJpYXQiOjE2ODA3NjMyNDksImV4cCI6MTY4MDc2Njg0OSwianRpIjoiZmYxZmY1NDczMGViNTUzYzg0NThkMzA0NDE1NTQyMzQ0OGEzM2RlYiJ9.OgC7PRbRZw7Gv06pGvQ3EmG5LhizKzugX5DHaJeHMoFyhVFRs4H784JOVQFeGPu-yJ4e6LLFEpGnJGn2OcaUPzE3-rPIOgRB4xNLdhiVDJxhZkioUR8YZ9Kp1bOyfLIAM5M5QtT-a3NMkFtuHw7f_s6hKS-adJbCU_GVCxf-noRRRTFDp3Ti41apOMrqZjk1PtQ2acWeBjtyQQNEfoNyFNky8_sxRx45o_vOBJjQGs0p_PVSXvtxN6bpvziijFN_222Lbiz17kU6ScyNo_u8HzR0Ua5Tslv9C7DxGNsW5OCsJvzHU4REKz6qDBEOzchnmXBOVPRuG0UlvpkOGL0Xig',
            session_state: [Object],
            first_issued_at: 1680763249220,
            expires_at: 1680766848220,
        },
        responseType: 'token id_token',
    },
};

console.log([
    Object.keys(obj.cachedValue).filter((key) => key !== 'responseType'),
]);
