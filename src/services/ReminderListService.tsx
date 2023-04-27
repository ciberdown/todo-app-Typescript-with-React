import axios from "axios";
import ReminderInterface from "../components/ReminderInterface";
class ReminderListServices {
  http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
  async getReminders() {
    const response = await this.http.get<ReminderInterface[]>("/todos");
    console.log(response)
    return response.data;
  }

  async removeReminders(id: number){
    const response = await this.http.delete('/todos/'+id);
    console.log(response)
  }

  async addReminder(title: string, userId: number){
    //add reminder here
  }
}
const reminderListService = new ReminderListServices();
export default reminderListService;
