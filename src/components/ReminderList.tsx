import { useState } from "react";
import Reminder from "./Reminder";
import ReminderInterface from "./ReminderInterface";
export default function ReminderList(props: {
  remove: Function;
  items: ReminderInterface[];
  add: Function;
}) {
  const [header, setHeader] = useState("to do list");
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{header}</h1>
      </div>

      {props.items.map((item: ReminderInterface, index: number) => {
        return (
          <section key={item.id}>
            {index > 0 ? (
              props.items[index - 1].userId !== props.items[index].userId && (
                <>
                  <hr />
                  <p style={{ padding: "20px" }}>
                    user number {props.items[index].userId}
                  </p>
                  <button
                    onClick={() => {
                      setHeader("some titles added");
                      props.add(
                        props.items[index].userId,
                        "this is message from me to add"
                      );
                    }}
                  >
                    add
                  </button>
                </>
              )
            ) : (
              <>
                <p>user number {props.items[index].userId}</p>
                <button
                  onClick={() => {
                    setHeader("some titles added");
                    props.add(
                      props.items[index].userId,
                      "this is message from me to add"
                    );
                  }}
                >
                  add
                </button>
              </>
            )}
            <div>
              <Reminder remove={props.remove} item={item} />
            </div>
          </section>
        );
      })}
    </>
  );
}
