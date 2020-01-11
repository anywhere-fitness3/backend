require("dotenv").config();

const db = require("../database/db-config.js");

describe("classes model", () => {
  beforeEach(async () => {
    await db("name_fitClass").truncate();
  });

  describe("get all ()", () => {
    it("should return array", async () => {
      const classes = await db("classes");
      expect(classes);
    });
  });
});
