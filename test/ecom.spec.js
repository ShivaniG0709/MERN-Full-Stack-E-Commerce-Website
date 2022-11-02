const request = require("supertest");
const assert = require("assert");
const server = require("../backend/server");

let token;
//User Testing
//create user --working
// describe("create a user", () => {
//   it("it should have status code 201", (done) => {
//     request(server)
//       .post("/api/register")
//       .send({
//         name: "Shivani Patel",
//         email: "shivani23@gmail.com",
//         password: "Shivani@12",
//         role: "admin",
//       })
//       .expect(201)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });

//login user --working
describe("login a user", () => {
  // let token;
  it("it should have status code 200", (done) => {
    request(server)
      .post("/api/login")
      .send({
        email: "vermaditi2020@gmail.com",
        password: "AditiV@12#",
      })

      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        } else {
          token = res.body.token;

          console.log(res);
          //   assert.equal(res.text, "All books");
          done();
        }
      });
  });
});

describe("get a user", () => {
  it("it should have status code 200", (done) => {
    request(server)
      .get("/api/me")
      //   .query(token)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // done();
        else {
          console.log(res);
          // assert.equal(res.text, "All books");
          done();
        }
      });
  });
});

describe("get a user", () => {
  it("it should have status code 200", (done) => {
    request(server)
      .get("/api/admin/user/62d7a4740237778835cdf443")
      //   .query(token)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // done();
        else {
          console.log(res);
          // assert.equal(res.text, "All books");
          done();
        }
      });
  });
});

describe("get all users", () => {
  it("it should have status code 200", (done) => {
    request(server)
      .get("/api/admin/users")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
        // } else {
        //   console.log(res);
        //   assert.equal(res.text, "All books");
        //   done();
        // }
      });
  });
});

// describe("delete a user", () => {
//   it("it should have status code 200", (done) => {
//     request(server)
//       .delete("/api/admin/user/62d63c67b69ddba14ed89d86")
//       .set("Authorization", `Bearer ${token}`)
//       .expect(200)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });
// //update user profile
// describe("update user profile", () => {
//   it("it should have status code 200", (done) => {
//     request(server)
//       .put("/api/me/update")
//       .send({
//         name: "Shivani Gupta",
//         email: "shivani@gmail.com",
//       })
//       .set("Authorization", `Bearer ${token}`)
//       .expect(200)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });

// describe("post a product", () => {
//   it("it should have status code 201", (done) => {
//     request(server)
//       .post("/api/admin/product/new")
//       .send({
//         title: "New Product !",
//         price: 2020,
//         description:
//           "Stoneybridge is full of holiday-makers in summer, its beaches are full of buckets and spades and sandcastles; but in winter it's cold and wild. Few choose to walk along the fine sands, the big round pebbles and the exposed rocky promontories that make up the wind-swept Atlantic coastline. Those who do can't help but see Stone House, the big house on the cliff; once falling into disrepair it is now a beautiful hotel specialising in winter holidays. Its big, warm kitchen, its open log-fires and its elegant bedrooms provide a welcome few can resist, whatever their reasons for coming. Henry and Nicola are burdened with a terrible secret, while cheerful nurse Winnie finds herself on the holiday from hell. John has arrived on an impulse after he missed a flight at Shannon; eccentric Freda claims to be a psychic - and a part-time hairdresser. Then there's Nora, a silent watchful older woman who seems ready to disapprove at any moment.. A Week in Winter is full of Maeve's trademark warmth, humour and characters you want to spend time with.",
//         category: "Women's Category",
//         image:
//           "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg",
//       })
//       .set("Authorization", `Bearer ${token}`)
//       .expect(201)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });

describe("get all products", () => {
  it("it should have status code 200", (done) => {
    request(server)
      .get("/api/products")

      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
        // } else {
        //   console.log(res);
        //   assert.equal(res.text, "All books");
        //   done();
        // }
      });
  });
});
// describe("delete a product", () => {
//   it("it should have status code 200", (done) => {
//     request(server)
//       .delete("/api/admin/product/62f3b94a3f554f60bb5ad945")
//       .set("Authorization", `Bearer ${token}`)
//       .expect(200)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });

describe("get product details", () => {
  it("it should have status code 200", (done) => {
    request(server)
      .get("/api/product/62e8117180176625dfd0d280")
      //   .query(token)
      // .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // done();
        else {
          console.log(res);
          // assert.equal(res.text, "All books");
          done();
        }
      });
  });
});
//update product details
// describe("update product details", () => {
//   it("it should have status code 200", (done) => {
//     request(server)
//       .put("/api/admin/product/62f3bc42d303fc13da9ffa1a")
//       .send({
//         title: "New new Product !",
//         price: 2020,
//         description:
//           "Stoneybridge is full of holiday-makers in summer, its beaches are full of buckets and spades and sandcastles; but in winter it's cold and wild. Few choose to walk along the fine sands, the big round pebbles and the exposed rocky promontories that make up the wind-swept Atlantic coastline. Those who do can't help but see Stone House, the big house on the cliff; once falling into disrepair it is now a beautiful hotel specialising in winter holidays. Its big, warm kitchen, its open log-fires and its elegant bedrooms provide a welcome few can resist, whatever their reasons for coming. Henry and Nicola are burdened with a terrible secret, while cheerful nurse Winnie finds herself on the holiday from hell. John has arrived on an impulse after he missed a flight at Shannon; eccentric Freda claims to be a psychic - and a part-time hairdresser. Then there's Nora, a silent watchful older woman who seems ready to disapprove at any moment.. A Week in Winter is full of Maeve's trademark warmth, humour and characters you want to spend time with.",
//         category: "Women's Category",
//         image:
//           "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg",
//       })
//       .set("Authorization", `Bearer ${token}`)
//       .expect(200)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         done();
//         // } else {
//         //   console.log(res);
//         //   assert.equal(res.text, "All books");
//         //   done();
//         // }
//       });
//   });
// });
