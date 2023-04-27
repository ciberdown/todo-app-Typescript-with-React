import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import ReminderInterface from "./components/ReminderInterface";
import reminderListService from "./services/ReminderListService";
function App() {
  const [reminderList, setReminderList] = useState<ReminderInterface[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);
  const loadReminders = async () => {
    const respose = await reminderListService.getReminders();
    setReminderList(respose);
  };
  const removeReminder = async (id: number) => {
    await reminderListService.removeReminders(id);
    const newReminderList = reminderList.filter((item) => {
      return item.id !== id;
    });
    setReminderList(newReminderList);
  };
  const addReminder = async (id: number, title: string) => {
    await reminderListService.addReminder(id, title);//returns error 404
  }
  return (
    <div className="App">
      <ReminderList add={addReminder} remove={removeReminder} items={reminderList} />
    </div>
  );
}

export default App;
