const assert = require("assert");
const { expect } = require('chai');

describe("Create User", () => {
    it("Should create a new user", async () => {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "leader",
            }),
        });
        const data = await response.json();
        console.log(data);

        expect(response.status).to.equal(201);
        expect(data.name).to.include("morpheus");
        expect(data.job).to.include("leader");
    });
});