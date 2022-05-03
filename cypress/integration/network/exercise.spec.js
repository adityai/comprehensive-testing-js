/// <reference types="cypress" />

context("Network Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it('comments returns 200 and 500 body length', () => {
    // https://on.cypress.io/request
    cy.request(`${baseUrl}/comments`).should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property('length').and.be.oneOf([500, 501]);
    });
  });

  it("Can create new post on /posts", () => {
    // resource will not be really updated on the server but it will be faked as if
    // TODO supply the body of the request
    cy.request("POST", `${baseUrl}/posts`, {
      "userId": 11, "title": "Cypress Test", "body": "any body"
      })
      // note that the value here is the returned value of the 2nd request
      // which is the new post object
      .then((response) => {
        console.log(response);
        // TODO expect the response status to be 201
        expect(response.status).to.eq(201);
        // TODO expect the response body to contain the title = "Cypress Test"
        expect(response.body).to.contain({"title": "Cypress Test"});
      });
  });

  // it("Can update posts", () => {
  //   // a PUT is used to update an existing entity
  //   //TODO what method should be used in cy.request()?
  //   cy.request("HELLO", `${baseUrl}/posts/1`, {
  //     id: 1,
  //     userId: 11,
  //     title: "foo",
  //     body: "bar",
  //   }).then((response) => {
  //     //TODO expect response.status to equal what status code?
  //     //TODO expect response.statusText to equal what string?
  //     //TODO expect response.body to contain what title?
  //   });
  // });
});
