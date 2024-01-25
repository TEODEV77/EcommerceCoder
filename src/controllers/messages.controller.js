import messagesService from "../services/messages.service";

export default class MessagesController {
    static getAll(){
        return messagesService.getAll();
    }
}