import { productDao } from '../dao/factory.js';
import messageDao from '../dao/message.dao.js';
import ticketDao from '../dao/ticket.dao.js';
import userDao from '../dao/user.dao.js';


import ProductRepository from './products.repository.js';
import MessageRepository from './messages.repository.js';
import TicketRepository from './tickets.repository.js';
import UserRepository from './users.repository.js';




export const productRepository = new ProductRepository(productDao);
export const messageRepository = new MessageRepository(messageDao);
export const ticketRepository = new TicketRepository(ticketDao);
export const userRepository = new UserRepository(userDao);