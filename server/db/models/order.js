const Sequelize = require('sequelize')
const db = require('../db')

//ADD ADDRESS INFO?!? HOW WOULD THAT SYNC WITH THE GUEST and USER CART? FROM A UX EXPERIENCE
const Order = db.define('order', {
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderTotal: {
    type: Sequelize.INTEGER
    //allowNull: false?
  }
})

module.exports = Order
