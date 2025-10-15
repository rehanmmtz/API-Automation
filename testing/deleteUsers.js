const assert = require("assert");
const { expect } = require('chai');

describe("Delete User", () => {
    it("should delete a user", async () => {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });
        
        expect(response.status).to.equal(204);
    });
});