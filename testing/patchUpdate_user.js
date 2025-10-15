const assert = require("assert");
const { expect } = require('chai');

describe("Update User", () => {
    it("should update the user", async () => {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident",
            }),
        });
        const data = await response.json();
        console.log(data);

        expect(response.status).to.equal(200);
        expect(data.name).to.include("morpheus");
        expect(data.job).to.include("zion resident");
    });
});