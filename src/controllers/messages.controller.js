import messagesService from "../services/messages.service.js";

export default class MessagesController {
    static getAll(){
        return messagesService.getAll();
    }
}