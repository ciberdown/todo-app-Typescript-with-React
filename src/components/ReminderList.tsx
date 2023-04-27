import Reminder from "./Reminder";
import ReminderInterface from "./ReminderInterface";
export default function ReminderList(props: {remove:Function, items: ReminderInterface[] }) {

  return (
    <>
      {props.items.map((item: ReminderInterface) => {
        return (
          <>
            <div key={item.id}>
              <Reminder remove={props.remove} item={item} />
            </div>{" "}
            {item.userId}
          </>
        );
      })}
    </>
  );
}
