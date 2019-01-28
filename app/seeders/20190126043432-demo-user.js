"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Administator",
          email: "admin@gmail.com",
          password:
            "$2a$10$.GFPBpwvVfZJwnrOnFCtI.jxVhwBhFQvuz2gLNOFsZsfu54AItt7G",
          phone: 988705693,
          add: "82 Duy Tân quận Cầu Giấy",
          city: "Hà Nội",
          country: "Việt Nam",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
