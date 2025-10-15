const assert = require("assert");
const { expect } = require('chai');

describe("Get List Users", function () {
    it("display the list of users", async function () {
        const response = await fetch("https://reqres.in/api/users?page=2", {
            method: "GET",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);

        expect(response.status).to.equal(200);
    });
});