import { useState } from "react";
import ReminderInterface from "./ReminderInterface";

export default function Reminder({
  remove,
  item,
}: {
  remove: Function;
  item: ReminderInterface;
}) {
  const [text_color, setText_color] = useState(
    item.completed ? "green" : "red"
  );
  const styles = {
    div_style: {
      display: "flex",
      backgroundColor: `${text_color}`,
      marginInline: "30px",
      paddingInline: 20,
      margin: "2px",
    },
    p_style: {
      padding: 2,
      color: "black",
      fontWeight: "bolder",
      fontSize: "22px",
      width: "100%",
    },
    btn_style: {
      justifySelf: "end",
      backgroundColor: "gray",
      color: "white",
      fontWeight: "bolder",
      fontSize: "20px",
      cursor: "pointer",
      margin: "10px",
      borderRadius: "8px",
      marginColor: "none",
    },
  };
  return (
    <>
      <div style={styles.div_style}>
        <p>{item.id}</p>
        <p style={styles.p_style}>{item.title}</p>
        {item.completed ? <p>(completed)</p> : <p>(remain)</p>}
        <button onClick={() => remove(item.id)} style={styles.btn_style}>
          remove
        </button>
      </div>
    </>
  );
}
